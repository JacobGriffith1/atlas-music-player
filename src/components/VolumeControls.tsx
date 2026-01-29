import { Volume2 } from "lucide-react";

type Props = {
  value: number; // 0..100
  onChange: (value: number) => void;
};

export default function VolumeControls({ value, onChange }: Props) {
  const clamped = Math.min(100, Math.max(0, Math.round(value / 5) * 5));

  return (
    <div className="flex items-center gap-4">
      <Volume2 className="h-6 w-6 text-[var(--accent)]" aria-hidden="true" />
      <input
        type="range"
        min={0}
        max={100}
        step={5}
        value={clamped}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label="Volume"
        className="w-full"
      />
    </div>
  );
}
