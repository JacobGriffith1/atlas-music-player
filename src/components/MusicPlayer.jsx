import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import PlayListItem from "./PlayListItem";

export default function MusicPlayer() {
  // inline demo data matching your /api/songs shape
  const now = {
    id: "a6pkp78whsyqdvpb5dxn64ss",
    title: "Fading Shadows",
    artist: "The Emberlight",
    genre: "Alternative Rock",
    duration: 194,
    cover: "https://utfs.io/f/E9fJnaKtTy1bV09oPkISuh6fWpNsTRlAk1Qj9yqnVzCi32BL",
  };

  const list = [
    now,
    { id: "2", title: "Electric Fever", artist: "Neon Jungle", duration: 521, cover: now.cover },
    { id: "3", title: "Tidal Drift", artist: "Echoes of the Sea", duration: 341, cover: now.cover },
  ];

  return (
    <div className="mx-auto w-full max-w-5xl space-y-8">
      {/* Top panel */}
      <section className="grid items-start gap-6 md:grid-cols-[280px,1fr]">
        <CoverArt song={now} />
        <div className="flex flex-col gap-6">
          <SongTitle song={now} />
          <PlayControls />
          <VolumeControls defaultValue={60} />
        </div>
      </section>

      {/* Playlist preview (uses Task 2 list item) */}
      <section className="space-y-2">
        {list.map((s, i) => (
          <PlayListItem key={s.id} song={s} selected={i === 0} />
        ))}
      </section>
    </div>
  );
}