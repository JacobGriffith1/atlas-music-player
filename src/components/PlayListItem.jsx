export default function PlayListItem({
  song,
  title,
  artist,
  length,
  selected = false,
}) {
  const t = song?.title ?? title ?? "Untitled";
  const a = song?.artist ?? artist ?? "Unknown Artist";

  const secs =
    typeof song?.duration === "number" && Number.isFinite(song.duration)
      ? song.duration
      : undefined;
  const formatted =
    secs !== undefined
      ? `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, "0")}`
      : length ?? "";

  const state = selected ? "bg-[var(--accent-600)] ring-1 ring-[var(--accent)]" : "hover:bg-[var(--accent-600)] hover:opacity-90";

  return (
    <div className={`flex items-start justify-between gap-4 rounded-xl px-1 py-2 text-shadow-[1px_1px_0_#fb2b7c,-1px_-1px_0_#fb2b7c,1px_-1px_0_#fb2b7c,-1px_1px_0_#fb2b7c] ${state}`}>
      <div className="min-w-0">
        <p className="truncate text-lg font-bold leading-tight text-paper">{t}</p>
        <p className="truncate -mt-0.5 text-sm font-medium text-paper">{a}</p>
      </div>
      <span className="ml-4 shrink-0 self-center tabular-nums text-sm font-bold text-paper">
        {formatted}
      </span>
    </div>
  );
}