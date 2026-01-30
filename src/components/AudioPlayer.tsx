import { useEffect, useRef } from "react";
import type { PlaybackRate } from "./PlayControls";

type Props = {
  src: string | null;
  isPlaying: boolean;
  volume: number; // 0..100
  playbackRate: PlaybackRate;
  onEnded?: () => void;
};

function clamp01(v: number): number {
  if (!Number.isFinite(v)) return 0.5;
  return Math.min(1, Math.max(0, v));
}

export default function AudioPlayer({
  src,
  isPlaying,
  volume,
  playbackRate,
  onEnded,
}: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.volume = clamp01(volume / 100);
  }, [volume]);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.playbackRate = playbackRate;
  }, [playbackRate]);

  // Only handle loading/resetting when the track changes.
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    if (!src) {
      el.pause();
      el.removeAttribute("src");
      el.load();
      return;
    }

    el.pause();
    el.src = src;
    el.load();
    el.currentTime = 0;
  }, [src]);

  // Only handle play/pause toggles here.
  useEffect(() => {
    const el = audioRef.current;
    if (!el || !src) return;

    if (isPlaying) {
      void el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, [isPlaying, src]);

  return <audio ref={audioRef} onEnded={onEnded} preload="metadata" />;
}
