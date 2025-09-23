import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

export default function CurrentlyPlaying({ song }) {
  const current =
    song || {
      id: "a6pkp78whsyqdvpb5dxn64ss",
      title: "Fading Shadows",
      artist: "The Emberlight",
      duration: 194,
      cover:
        "https://utfs.io/f/E9fJnaKtTy1bV09oPkISuh6fWpNsTRlAk1Qj9yqnVzCi32BL",
    };

  return (
    <section className="flex flex-col gap-4 md:gap-5 md:sticky md:top-8">
      <CoverArt song={current} />
      <SongTitle song={current} />
      <PlayControls />
      <VolumeControls defaultValue={60} />
    </section>
  );
}