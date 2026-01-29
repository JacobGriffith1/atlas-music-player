type SongLike = {
  id: string;
  title: string;
  artist: string;
  duration: number;
};

type Props = {
  song: SongLike;
  selected?: boolean;
  onSelect?: (id: string) => void;
};

function formatDuration(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

export default function PlayListItem({ song, selected = false, onSelect }: Props) {
  const state = selected
    ? "bg-[var(--accent-600)] ring-1 ring-[var(--accent)]"
    : "hover:bg-[var(--accent-600)] hover:opacity-90";

  return (
    <button
      type="button"
      onClick={() => onSelect?.(song.id)}
      className={
        `w-full text-left flex items-start justify-between gap-4 rounded-xl px-1 py-2 
        text-shadow-[1px_1px_0_#fb2b7c,-1px_-1px_0_#fb2b7c,1px_-1px_0_#fb2b7c,-1px_1px_0_#fb2b7c]
        ${state}`}
        aria-current={selected ? "true" : undefined}
    >
      <div className="min-w-0">
        <p className="truncate text-lg font-bold leading-tight text-paper">{song.title}</p>
        <p className="truncate -mt-0.5 text-sm font-medium text-paper">{song.artist}</p>
      </div>
      <span className="ml-4 shrink-0 self-center tabular-nums text-sm font-bold text-paper">
        {formatDuration(song.duration)}
      </span>
    </button>
  );
}