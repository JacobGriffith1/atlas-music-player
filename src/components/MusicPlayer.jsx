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
    <div className="w-full">
      <div className="flex w-full flex-col gap-y-8 md:flex-row md:gap-x-[10%] md:px-[5%]">
        <section className="md:w-[40%]">
          <CurrentlyPlaying song={currentSong} />
        </section>
        <aside className="md:w-[40%]">
          <Playlist songs={songs} />
        </aside>
      </div>
    </div>
  );
}