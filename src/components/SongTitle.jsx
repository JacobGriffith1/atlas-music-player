export default function SongTitle({ song, title, artist, as = "h2" }) {
  const t = song?.title ?? title ?? "Untitled";
  const a = song?.artist ?? artist ?? "Unknown Artist";
  const Tag = as || "h2";
  return (
    <div className="space-y-2">
      <Tag className="text-4xl font-black tracking-tight leading-tight text-[oklch(var(--ink))]">
        {t}
      </Tag>
      <p className="text-xl font-medium text-[oklch(var(--muted))]">
        {a}
      </p>
    </div>
  );
}
