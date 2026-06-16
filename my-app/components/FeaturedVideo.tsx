"use client";

import { useState } from "react";

export default function FeaturedVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl shadow-black/50">

      <video
        controls
        playsInline
        preload="metadata"
        poster="/video-thumbnail.png"
        className="w-full"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {!playing && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="flex h-36 w-36 items-center justify-center rounded-full border-4 border-cyan-400 bg-white/95 shadow-[0_0_50px_rgba(34,211,238,0.6)]">
            <div className="ml-2 h-0 w-0 border-y-[24px] border-y-transparent border-l-[38px] border-l-slate-900" />
          </div>
        </div>
      )}
    </div>
  );
}