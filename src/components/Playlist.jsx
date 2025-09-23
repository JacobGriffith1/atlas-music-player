import PlayListItem from "./PlayListItem";

export default function Playlist({ songs }) {
  const data =
    songs ||
    [
      {
        id: "1",
        title: "Fading Shadows",
        artist: "The Emberlight",
        duration: 194,
        cover:
          "https://utfs.io/f/E9fJnaKtTy1bV09oPkISuh6fWpNsTRlAk1Qj9yqnVzCi32BL",
      },
      {
        id: "2",
        title: "Electric Fever",
        artist: "Neon Jungle",
        duration: 521,
        cover:
          "https://utfs.io/f/E9fJnaKtTy1bV09oPkISuh6fWpNsTRlAk1Qj9yqnVzCi32BL",
      },
      {
        id: "3",
        title: "Tidal Drift",
        artist: "Echoes of the Sea",
        duration: 341,
        cover:
          "https://utfs.io/f/E9fJnaKtTy1bV09oPkISuh6fWpNsTRlAk1Qj9yqnVzCi32BL",
      },
    ];

  return (
    <section className="space-y-2 md:max-h-[80vh] md:overflow-auto pr-1">
      {data.map((s, i) => (
        <PlayListItem key={s.id} song={s} selected={i === 0} />
      ))}
    </section>
  );
}