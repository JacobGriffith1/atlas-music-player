import { useState } from "react";
import { Volume2 } from "lucide-react";

// why: accent-* doesn't consistently fill track; use layered bars driven by state.
const WIDTH_STEPS = [
  "w-[0%]","w-[5%]","w-[10%]","w-[15%]","w-[20%]","w-[25%]","w-[30%]","w-[35%]","w-[40%]","w-[45%]",
  "w-[50%]","w-[55%]","w-[60%]","w-[65%]","w-[70%]","w-[75%]","w-[80%]","w-[85%]","w-[90%]","w-[95%]","w-[100%]"
];

export default function VolumeControls({ defaultValue = 60, onChange }) {
  const [value, setValue] = useState(
    Math.min(100, Math.max(0, Math.round(defaultValue / 5) * 5))
  );
  const idx = Math.round(value / 5);
  const filled = WIDTH_STEPS[idx];

  return (
    <div className="flex items-center gap-4">
      <Volume2 className="h-6 w-6 text-[var(--accent)]" aria-hidden="true" />

      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 right-0 top-1/2 -translate-y-1/2 h-2 rounded-full bg-paper opacity-90 border-[var(--accent)] border-2" />
        <div className={`absolute left-0 top-1/2 -translate-y-1/2 h-2 rounded-full bg-[var(--accent-600)] ${filled}`}>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-[var(--accent-600)] border-2 border-[var(--accent)] shadow" />
        </div>
        <input
          type="range"
          min="0"
          max="100"
          step="5"
          value={value}
          onChange={(e) => {
            const v = Number(e.target.value);
            setValue(v);
            onChange?.(v);
          }}
          aria-label="Volume"
          className="absolute inset-0 w-full appearance-none opacity-0"
        />
      </div>
    </div>
  );
}
