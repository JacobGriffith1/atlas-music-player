export default function SongTitle({ song, title, artist, as = "h2" }) {
  const t = song?.title ?? title ?? "Untitled";
  const a = song?.artist ?? artist ?? "Unknown Artist";
  const Tag = as || "h2";
  return (
    <div className="space-y-2">
      <Tag className="text-4xl font-black tracking-tight leading-tight text-slate-900">
        {t}
      </Tag>
      <p className="text-xl font-medium text-slate-500">{a}</p>
    </div>
  );
}