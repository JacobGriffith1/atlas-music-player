import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls, { type PlaybackRate } from "./PlayControls";
import VolumeControls from "./VolumeControls";

type SongLike = {
  id: string;
  title: string;
  artist: string;
  duration: number;
  cover?: string | null;
};

type Props = {
  song: SongLike | null;

  playbackRate?: PlaybackRate;
  onCycleRate?: () => void;

  isPlaying?: boolean;
  onTogglePlay?: () => void;

  canPrev?: boolean;
  onPrev?: () => void;

  canNext?: boolean;
  onNext?: () => void;

  shuffle?: boolean;
  onToggleShuffle?: () => void;

  volume?: number; // 0..100
  onVolumeChange?: (value: number) => void;
};

export default function CurrentlyPlaying({
  song,
  playbackRate = 1,
  onCycleRate = () => {},

  isPlaying = false,
  onTogglePlay = () => {},

  canPrev = false,
  onPrev = () => {},
  
  canNext = false,
  onNext = () => {},

  shuffle = false,
  onToggleShuffle = () => {},

  volume = 50,
  onVolumeChange = () => {},
}: Props) {
  if (!song) return null;

  return (
    <section className="flex flex-col gap-4 md:gap-5 md:sticky md:top-8 text-[oklch(var(--ink))]">
      <CoverArt song={song} />
      <SongTitle song={song} />

      <PlayControls
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
      />

      <VolumeControls value={volume} onChange={onVolumeChange} />
    </section>
  );
}
