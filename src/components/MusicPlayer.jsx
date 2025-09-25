import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer() {
  const currentSong = {
    id: "a6pkp78whsyqdvpb5dxn64ss",
    title: "Fading Shadows",
    artist: "The Emberlight",
    duration: 194,
    cover:
      "https://utfs.io/f/E9fJnaKtTy1bV09oPkISuh6fWpNsTRlAk1Qj9yqnVzCi32BL",
  };

  const songs = [
    currentSong,
    {
      id: "2",
      title: "Electric Fever",
      artist: "Neon Jungle",
      duration: 521,
      cover:
        "https://utfs.io/f/E9fJnaKtTy1b0N9zurCYB1gk62ReoSDdcKnwOZbaUyqujE4p",
    },
    {
      id: "3",
      title: "Tidal Drift",
      artist: "Echoes of the Sea",
      duration: 341,
      cover:
        "https://utfs.io/f/E9fJnaKtTy1bgUYJxLRHtQnU93BlJCuMbwphd17cmE6AYKrq",
    },
  ];

  return (
    <div className="w-full">
      <div className="mx-auto max-w-5xl rounded-[var(--radius-xl)] bg-primary-700 p-6 shadow-xl text-ink">
        <div className="flex w-full flex-col gap-y-8 md:flex-row md:gap-x-[10%] md:px-[5%]">
          <section className="md:w-[40%]">
            <CurrentlyPlaying song={currentSong} />
          </section>

          {/* divider: horizontal on small, vertical on md+ */}
          <div className="my-4 h-px w-full bg-primary md:my-0 md:mx-6 md:h-auto md:w-px" />

          <aside className="md:w-[40%]">
            <h2 className="mb-3 text-base font-semibold uppercase tracking-wider text-muted">
              Playlist
            </h2>
            <Playlist songs={songs} />
          </aside>
        </div>
      </div>
    </div>
  );
}