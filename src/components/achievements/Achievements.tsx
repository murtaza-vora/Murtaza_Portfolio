"use client";

import { useRef, useEffect, useState } from "react";
import { ACHIEVEMENTS, AchievementItem } from "@/lib/data";

export default function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const totalScrollable = container.offsetHeight - window.innerHeight;
      if (totalScrollable > 0) {
        const current = -rect.top;
        const progress = Math.min(1, Math.max(0, current / totalScrollable));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      id="achievements"
      className="relative h-[280vh] bg-[#fefefe] border-t border-black/5"
    >
      {/* Sticky Viewport Frame */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-12 overflow-hidden">
        {/* Header with Title & Thin Progress Bar */}
        <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-black/50 uppercase tracking-widest mb-1">
                <span>06</span>
                <span>&mdash;</span>
                <span>Metrics &amp; Honors</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-black">
                Proven track{" "}
                <span className="font-serif italic font-normal text-neutral-500">
                  record.
                </span>
              </h2>
            </div>

            {/* Scroll Indicator */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-black/50">
                {Math.round(scrollProgress * 100)}%
              </span>
              <div className="w-32 h-[2px] bg-black/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-black transition-all duration-75"
                  style={{ width: `${scrollProgress * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sliding Horizontal Cards Track */}
        <div className="w-full my-auto overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-6 sm:gap-8 px-4 sm:px-8 transition-transform duration-100 ease-out will-change-transform"
            style={{
              transform: `translateX(-${scrollProgress * 65}%)`,
            }}
          >
            {ACHIEVEMENTS.map((item: AchievementItem, idx: number) => {
              return (
                <div
                  key={idx}
                  className="shrink-0 w-[clamp(340px,40vw,520px)] h-[clamp(260px,32vh,320px)] bg-white rounded-[28px] p-8 shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500 border border-black/5 flex flex-col justify-between"
                >
                  {/* Top Bar: Platform Tile & Index */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-neutral-100 flex items-center justify-center font-mono font-bold text-xs text-black shadow-xs">
                      {item.logo}
                    </div>
                    <span className="font-mono text-xs text-black/40 font-semibold">
                      {item.index}
                    </span>
                  </div>

                  {/* Bottom: Left Info & Right Giant Counting Number */}
                  <div className="flex items-end justify-between gap-4">
                    <div className="max-w-[60%]">
                      <span className="font-mono text-[10px] text-black/40 uppercase tracking-widest block mb-1">
                        {item.caption}
                      </span>
                      <h3 className="text-lg font-bold text-black tracking-tight leading-tight">
                        {item.label}
                      </h3>
                      <p className="text-xs text-black/60 mt-1 line-clamp-2">
                        {item.detail}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-black">
                        {item.number}
                      </span>
                      {item.suffix && (
                        <span className="text-base sm:text-lg font-serif italic text-neutral-500 ml-1">
                          {item.suffix}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Ending Card: and counting... */}
            <div className="shrink-0 w-[clamp(280px,30vw,360px)] h-[clamp(260px,32vh,320px)] rounded-[28px] border-2 border-dashed border-black/20 flex flex-col items-center justify-center text-center p-8 bg-neutral-50/40">
              <span className="font-serif italic text-3xl sm:text-4xl text-neutral-400">
                and counting...
              </span>
              <p className="font-mono text-xs text-black/50 mt-3">
                Committed to compounding growth through software and community impact.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Hint */}
        <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-8">
          <p className="font-mono text-[11px] text-black/40">
            Scroll down to advance &middot; Keep scrolling for contact
          </p>
        </div>
      </div>
    </section>
  );
}
