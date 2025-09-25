export default function SongTitle({ song, title, artist, as = "h2" }) {
  const t = song?.title ?? title ?? "Untitled";
  const a = song?.artist ?? artist ?? "Unknown Artist";
  const Tag = as || "h2";
  return (
    <div className="space-y-2">
      <Tag className="text-4xl text-paper text-shadow-[1px_1px_0_#fb2b7c,-1px_-1px_0_#fb2b7c,1px_-1px_0_#fb2b7c,-1px_1px_0_#fb2b7c] font-black tracking-tight leading-tight">
        {t}
      </Tag>
      <p className="text-xl font-medium text-[var(--accent-600)]">
        {a}
      </p>
    </div>
  );
}
