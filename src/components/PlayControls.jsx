import { Rewind, Play, FastForward, Shuffle } from "lucide-react";

export default function PlayControls() {
  return (
    <div className="flex items-center justify-between gap-12">
      <button aria-label="Playback speed" className="select-none text-sm font-semibold text-accent">
        1x
      </button>

      <button aria-label="Rewind" className="p-2 text-accent-600 hover:text-accent transition">
        <Rewind className="h-6 w-6" />
      </button>

      <button
        aria-label="Play"
        className="inline-flex h-14 w-14 items-center justify-center rounded-xl border-2 border-accent hover:bg-primary transition"
      >
        <Play className="h-6 w-6 text-accent" />
      </button>

      <button aria-label="Fast forward" className="p-2 text-accent hover:opacity-80 transition">
        <FastForward className="h-6 w-6" />
      </button>

      <button aria-label="Shuffle" className="p-2 text-accent hover:opacity-80 transition">
        <Shuffle className="h-6 w-6" />
      </button>
    </div>
  );
}
