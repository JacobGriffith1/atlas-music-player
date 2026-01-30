import { useEffect, useMemo, useState } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import LoadingSkeleton from "./LoadingSkeleton";
import AudioPlayer from "./AudioPlayer";
import type { PlaybackRate } from "./PlayControls";

type PlaylistSong = {
  id: string;
  title: string;
  artist: string;
  genre?: string;
  duration: number; // seconds
};

type SongDetail = PlaylistSong & {
  cover: string;
  song: string; // audio URL
};

function nextRate(r: PlaybackRate): PlaybackRate {
  if (r === 0.5) return 1;
  if (r === 1) return 2;
  return 0.5;
}

function clamp0to100(v: number): number {
  if (!Number.isFinite(v)) return 50;
  return Math.min(100, Math.max(0, Math.round(v)));
}

function pickRandomIndex(maxExclusive: number, exclude: number): number{
  if (maxExclusive <= 1) return exclude;
  let idx = exclude;
  while (idx === exclude) idx = Math.floor(Math.random() * maxExclusive);
  return idx;
}

export default function MusicPlayer() {
  // Server state
  const [songs, setSongs] = useState<PlaylistSong[]>([]);
  const [currentSongId, setCurrentSongId] = useState<string | null>(null);
  const [currentDetail, setCurrentDetail] = useState<SongDetail | null>(null);
  const [loadingPlaylist, setLoadingPlaylist] = useState(true);
  const [loadingSong, setLoadingSong] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Player state (Client state)
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState<PlaybackRate>(1);
  const [shuffle, setShuffle] = useState(false);
  const [volume, setVolume] = useState(50);

  // Fetch playlist
  useEffect(() => {
    let cancelled = false;

    async function loadPlaylist() {
      try {
        setLoadingPlaylist(true);
        setError(null);

        const res = await fetch("/api/v1/playlist");
        if (!res.ok) throw new Error(`Playlist fetch failed: ${res.status}`);

        const data = (await res.json()) as PlaylistSong[];
        if (cancelled) return;

        setSongs(data);
        setCurrentSongId((prev) => prev ?? data[0]?.id ?? null);
      } catch (e) {
        if (cancelled) return;
        setError(e instanceof Error ? e.message : "Unknown error");
      } finally {
        if (cancelled) return;
        setLoadingPlaylist(false);
      }
    }

    loadPlaylist();
    return () => {
      cancelled = true;
    };
  }, []);

  // Fetch current song detail (cover + audio url)
  useEffect(() => {
    if (!currentSongId) {
      setCurrentDetail(null);
      return;
    }

    let cancelled = false;

    async function loadSong() {
      try {
        setLoadingSong(true);
        setError(null);

        const res = await fetch(`/api/v1/songs/${currentSongId}`);
        if (!res.ok) throw new Error(`Song fetch failed: ${res.status}`);

        const detail = (await res.json()) as SongDetail;
        if (cancelled) return;

        setCurrentDetail(detail);
      } catch (e) {
        if (cancelled) return;
        setError(e instanceof Error ? e.message : "Unknown error");
        setCurrentDetail(null);
      } finally {
        if (cancelled) return;
        setLoadingSong(false);
      }
    }

    loadSong();
    return () => {
      cancelled = true;
    };
  }, [currentSongId]);

  // Derived helpers
  const currentIndex = useMemo(() => {
    if (!currentSongId) return -1;
    return songs.findIndex((s) => s.id === currentSongId);
  }, [songs, currentSongId]);

  const canPrev = currentIndex > 0;
  const canNext = songs.length > 0 && (shuffle || currentIndex < songs.length - 1);

  // Actions (wired to PlayControls)
  const onCycleRate = () => setPlaybackRate((r) => nextRate(r));
  const onTogglePlay = () => setIsPlaying((p) => !p);
  const onToggleShuffle = () => setShuffle((s) => !s);
  const onVolumeChange = (v: number) => setVolume(clamp0to100(v));

  const onPrev = () => {
    if (!canPrev) return;
    const prev = songs[currentIndex - 1];
    if (prev) setCurrentSongId(prev.id);
  };

  const onNext = () => {
    if (!canNext) return;

    if (shuffle) {
      const idx = pickRandomIndex(songs.length, Math.max(0, currentIndex));
      setCurrentSongId(songs[idx].id);
      return;
    }

    const next = songs[currentIndex + 1];
    if (next) setCurrentSongId(next.id);
  };

  const isLoading = loadingPlaylist || loadingSong;

  if (isLoading) return <LoadingSkeleton />;
  if (error) return <div className="p-6 text-[var(--color-ink)]">Error: {error}</div>;
  if (!currentDetail) return <div className="p-6 text-[var(--color-ink)]">No song selected.</div>;

  return (
    <div className="w-full">
      <AudioPlayer 
        src={currentDetail.song}
        isPlaying={isPlaying}
        volume={volume}
        playbackRate={playbackRate}
        onEnded={onNext}
      />
      <div className="mx-auto max-w-5xl rounded-[var(--radius-xl)] bg-[var(--primary-700)] p-6 shadow-xl">
        <div className="flex w-full flex-col gap-y-8 md:flex-row md:gap-x-[10%] md:px-[5%]">
          <section className="md:w-[40%]">
            <CurrentlyPlaying
              song={currentDetail}
              playbackRate={playbackRate}
              onCycleRate={onCycleRate}
              isPlaying={isPlaying}
              onTogglePlay={onTogglePlay}
              canPrev={canPrev}
              onPrev={onPrev}
              canNext={canNext}
              onNext={onNext}
              shuffle={shuffle}
              onToggleShuffle={onToggleShuffle}
              volume={volume}
              onVolumeChange={onVolumeChange}
            />
          </section>

          <div className="my-4 h-px w-full bg-[var(--primary)] md:my-0 md:mx-6 md:h-auto md:w-px" />

          <aside className="md:w-[40%]">
            <h2 className="mb-3 text-base font-semibold uppercase tracking-wider text-[var(--accent)]">
              Playlist
            </h2>

            <Playlist songs={songs} selectedId={currentSongId} onSelect={setCurrentSongId} />
          </aside>
        </div>
      </div>
    </div>
  );
}
