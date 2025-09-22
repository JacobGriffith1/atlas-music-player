// File: src/Playground.jsx
// Why: quick local preview to verify Task-2 components; safe to delete before submit.
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import PlayListItem from "./PlayListItem";

export default function Playground() {
  // Matches your API fields exactly
  const demoSong = {
    id: "a6pkp78whsyqdvpb5dxn64ss",
    title: "Fading Shadows",
    artist: "The Emberlight",
    genre: "Alternative Rock",
    duration: 194,
    cover:
      "https://utfs.io/f/E9fJnaKtTy1bV09oPkISuh6fWpNsTRlAk1Qj9yqnVzCi32BL",
    song:
      "https://utfs.io/f/E9fJnaKtTy1ba1N97yFrtlodEaJI0m4wGY9KgyPiUvCf8hMp",
  };

  const list = [
    demoSong,
    {
      id: "2",
      title: "City Lights",
      artist: "Echo Drive",
      duration: 261,
      cover: demoSong.cover,
    },
    {
      id: "3",
      title: "Night Runner",
      artist: "Aurora",
      duration: 179,
      cover: demoSong.cover,
    },
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-8 p-6">
      {/* Top: cover + info/controls */}
      <section className="grid items-start gap-6 md:grid-cols-[280px,1fr]">
        <CoverArt song={demoSong} />
        <div className="flex flex-col gap-6">
          <SongTitle song={demoSong} />
          <PlayControls />
          <VolumeControls />
        </div>
      </section>

      {/* Playlist preview */}
      <section className="space-y-2">
        {list.map((s, i) => (
          <PlayListItem key={s.id} song={s} selected={i === 0} />
        ))}
      </section>
    </div>
  );
}
