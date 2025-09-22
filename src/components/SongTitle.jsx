export default function SongTitle({ song, title, artist, as = "h2" }) {
  const t = song?.title ?? title ?? "Untitled";
  const a = song?.artist ?? artist ?? "Unknown Artist";
  const Tag = as || "h2"; // why: let parent choose heading level for semantics

  return (
    <div className="space-y-3">
      <Tag className="text-4xl md:text-5xl font-black tracking-tight leading-none text-slate-900">
        {t}
      </Tag>
      <p className="text-2xl font-medium text-slate-500">{a}</p>
    </div>
  );
}