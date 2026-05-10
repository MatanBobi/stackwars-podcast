"use client";

import { useRef, useState, useEffect } from "react";

interface AudioPlayerProps {
  src: string;
  title: string;
}

export function AudioPlayer({ src, title }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const time = parseFloat(e.target.value);
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const vol = parseFloat(e.target.value);
    audioRef.current.volume = vol;
    setVolume(vol);
  };

  const handlePlaybackRateChange = () => {
    if (!audioRef.current) return;
    const rates = [1, 1.25, 1.5, 1.75, 2];
    const currentIndex = rates.indexOf(playbackRate);
    const nextRate = rates[(currentIndex + 1) % rates.length];
    audioRef.current.playbackRate = nextRate;
    setPlaybackRate(nextRate);
  };

  const skip = (seconds: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.max(
      0,
      Math.min(duration, audioRef.current.currentTime + seconds),
    );
  };

  const formatTime = (time: number): string => {
    if (isNaN(time)) return "0:00";
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    if (hours > 0) {
      return `${hours}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progressPct = duration ? (currentTime / duration) * 100 : 0;

  return (
    // dir="ltr" is intentional: native <input type="range"> visually inverts
    // in RTL, and media-player layouts are conventionally LTR worldwide.
    <div
      dir="ltr"
      className="w-full rounded-2xl border border-primary/15 bg-card/80 backdrop-blur p-5 sm:p-6 space-y-5 shadow-lg shadow-black/30"
    >
      <audio ref={audioRef} src={src} preload="metadata" />

      {/* Title */}
      <p className="text-xs text-muted-foreground truncate font-medium tracking-wide">
        {title}
      </p>

      {/* Progress */}
      <div className="space-y-2">
        <input
          type="range"
          min={0}
          max={duration || 100}
          value={currentTime}
          onChange={handleSeek}
          aria-label="Seek"
          className="sw-range w-full"
          style={
            {
              "--pct": `${progressPct}%`,
            } as React.CSSProperties
          }
        />
        <div className="flex justify-between text-[11px] text-muted-foreground/70 font-mono tabular-nums">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls row */}
      <div className="flex items-center justify-between gap-4">
        {/* Speed (left) */}
        <button
          type="button"
          onClick={handlePlaybackRateChange}
          className="text-xs font-mono font-semibold text-muted-foreground hover:text-primary border border-primary/20 hover:border-primary/50 hover:bg-primary/5 px-2.5 py-1 rounded-md transition-colors w-12 text-center"
          aria-label="Playback speed"
        >
          {playbackRate}×
        </button>

        {/* Transport (center) */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => skip(-15)}
            className="text-muted-foreground hover:text-primary p-2 rounded-full hover:bg-primary/10 transition-colors"
            aria-label="Skip back 15 seconds"
            title="-15s"
          >
            <SkipBack15 />
          </button>

          <button
            type="button"
            onClick={togglePlay}
            className="w-14 h-14 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center shadow-md shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.04] active:scale-100 transition-all"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 translate-x-[1px]"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {/* Play triangle. Tiny translate-x nudge corrects the optical
                    illusion where a right-pointing triangle looks left-biased
                    when its bounding box is centered. */}
                <path d="M7 4.5v15a1 1 0 0 0 1.55.83l11.5-7.5a1 1 0 0 0 0-1.66l-11.5-7.5A1 1 0 0 0 7 4.5z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            onClick={() => skip(15)}
            className="text-muted-foreground hover:text-primary p-2 rounded-full hover:bg-primary/10 transition-colors"
            aria-label="Skip forward 15 seconds"
            title="+15s"
          >
            <SkipForward15 />
          </button>
        </div>

        {/* Volume (right) */}
        <div className="flex items-center gap-2 w-28 justify-end">
          <svg
            className="w-4 h-4 text-muted-foreground shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.536 8.464a5 5 0 010 7.072m-3.536-3.536L7.293 6.293A1 1 0 005.586 7L5 7.586V16.414L5.586 17a1 1 0 001.707.707L12 13"
            />
          </svg>
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={volume}
            onChange={handleVolumeChange}
            aria-label="Volume"
            className="sw-range sw-range-sm w-full"
            style={
              {
                "--pct": `${volume * 100}%`,
              } as React.CSSProperties
            }
          />
        </div>
      </div>
    </div>
  );
}

function SkipBack15() {
  return (
    <span className="relative inline-flex items-center justify-center w-7 h-7">
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* circular arrow CCW */}
        <path d="M3 12a9 9 0 1 0 3-6.7" />
        <path d="M3 4v5h5" />
      </svg>
      <span className="absolute text-[8px] font-bold leading-none mt-1 font-mono">
        15
      </span>
    </span>
  );
}

function SkipForward15() {
  return (
    <span className="relative inline-flex items-center justify-center w-7 h-7">
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* circular arrow CW */}
        <path d="M21 12a9 9 0 1 1-3-6.7" />
        <path d="M21 4v5h-5" />
      </svg>
      <span className="absolute text-[8px] font-bold leading-none mt-1 font-mono">
        15
      </span>
    </span>
  );
}
