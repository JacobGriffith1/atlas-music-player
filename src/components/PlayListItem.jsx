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

  const state = selected ? "bg-slate-50 ring-1 ring-slate-200" : "hover:bg-slate-50";

  return (
    <div className={`flex items-start justify-between gap-4 rounded-xl px-1 py-2 ${state}`}>
      <div className="min-w-0">
        <p className="truncate text-lg font-bold leading-tight text-ink">{t}</p>
        <p className="truncate -mt-0.5 text-sm font-medium text-muted">{a}</p>
      </div>
      <span className="ml-4 shrink-0 self-center tabular-nums text-sm font-bold text-subtle">
        {formatted}
      </span>
    </div>
  );
}