import { Rewind, Play, FastForward, Shuffle, Pause } from "lucide-react";

export type PlaybackRate = 0.5 | 1 | 2;

type Props = {
  playbackRate: PlaybackRate;
  onCycleRate: () => void;

  isPlaying: boolean;
  onTogglePlay: () => void;

  canPrev: boolean;
  onPrev: () => void;

  canNext: boolean;
  onNext: () => void;

  shuffle: boolean;
  onToggleShuffle: () => void;
};

export default function PlayControls({
  playbackRate,
  onCycleRate,
  isPlaying,
  onTogglePlay,
  canPrev,
  onPrev,
  canNext,
  onNext,
  shuffle,
  onToggleShuffle,
}: Props) {
  return (
    <div className="flex items-center justify-between gap-12">
      <button 
        type="button"
        aria-label="Playback speed"
        onClick={onCycleRate}
        className="select-none text-sm font-semibold text-[var(--accent)]"
        >
        {playbackRate}x
      </button>

      <button 
        type="button"
        aria-label="Rewind"
        disabled={!canPrev}
        onClick={onPrev}
        className="p-2 text-[var(--accent-600)] hover:text-[var(--accent)] transition disabled:opacity-40 disabled:hover:text-[var(--accent-600)]"
      >
        <Rewind className="h-6 w-6" />
      </button>

      <button
        type="button"
        aria-label={isPlaying ? "Pause" : "Play"}
        aria-pressed={isPlaying}
        onClick={onTogglePlay}
        className="inline-flex h-14 w-14 items-center justify-center rounded-xl border-2 border-[var(--accent)] hover:bg-primary transition"
      >
        {isPlaying ? (
          <Pause className="h-6 w-6 text-[var(--accent)]" />
        ) : (
          <Play className="h-6 w-6 text-[var(--accent)]" />
        )}
      </button>

      <button
        type="button"
        aria-label="Fast forward"
        disabled={!canNext}
        onClick={onNext}
        className="p-2 text-[var(--accent)] hover:opacity-80 transition disabled:opacity-40 disabled:hover:text-[var(--accent-600)]"
      >
        <FastForward className="h-6 w-6" />
      </button>

      <button 
        type="button"
        aria-label="Shuffle"
        aria-pressed={shuffle}
        onClick={onToggleShuffle}
        className={`p-2 hover:opacity-80 transition ${
          shuffle ? "text-[var(--accent-600)]" : "text-[var(--accent)]"
        }`}
      >
        <Shuffle className="h-6 w-6" />
      </button>
    </div>
  );
}
