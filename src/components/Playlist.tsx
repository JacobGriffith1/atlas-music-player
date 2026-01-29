import PlayListItem from "./PlayListItem";

type SongLike = {
  id: string;
  title: string;
  artist: string;
  duration: number;
  cover?: string | null;
};

type Props = {
  songs: SongLike[];
  selectedId?: string | null;
  onSelect?: (id: string) => void;
};

export default function Playlist({ songs, selectedId, onSelect }: Props) {
  return (
    <section className="space-y-2 md:max-h-[80vh] md:overflow-auto pr-1 text-[oklch(var(--ink))]">
      {songs.map((s) => (
        <PlayListItem
          key={s.id}
          song={s}
          selected={selectedId ? s.id === selectedId : false}
          onSelect={onSelect}
        />
      ))}
    </section>
  );
}