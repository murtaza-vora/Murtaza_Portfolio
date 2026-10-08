"use client";

import { useRef, useState, useEffect } from "react";
import { TIMELINE } from "@/lib/data";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate smooth scroll progress through the section
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const totalScrollable = elementHeight;
      const currentScroll = windowHeight * 0.65 - elementTop;

      const progress = Math.min(
        1,
        Math.max(0, currentScroll / totalScrollable)
      );

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Total items including the end card
  const totalItems = TIMELINE.length + 1;
  const activeIndex = Math.floor(scrollProgress * totalItems);

  return (
    <section id="experience" className="py-24 bg-[#fefefe] border-t border-black/5 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        {/* Section Heading Tag */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-black/50 uppercase tracking-widest mb-2">
            <span>05</span>
            <span>&mdash;</span>
            <span>Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black">
            Experience &amp;{" "}
            <span className="font-serif italic font-normal text-neutral-500">
              milestones.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-black/60 mt-3">
          Numbers don't speak for themselves. I help them say something useful.
          </p>
        </div>

        {/* Central Alternating Timeline Container */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto pb-16">
          {/* Central Vertical Spine (Centered on Desktop, Left on Mobile) */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-4 bottom-24 w-[2px] bg-black/10 z-0">
            {/* Animated Filling Spine that draws down as you scroll */}
            <div
              className="w-full bg-black transition-all duration-300 ease-out origin-top"
              style={{
                height: `${Math.min(100, scrollProgress * 105)}%`,
              }}
            />
          </div>

          <div className="space-y-12 md:space-y-16">
            {TIMELINE.map((item, index) => {
              const isEven = index % 2 === 0;
              const isReached = index <= activeIndex;

              return (
                <div
                  key={index}
                  className={`relative flex items-center md:justify-between ${
                    isEven ? "md:flex-row-reverse" : "md:flex-row"
                  } group`}
                >
                  {/* Empty Spacer Column for Desktop Alternating Balance */}
                  <div className="hidden md:block md:w-[calc(50%-44px)]" />

                  {/* Central Node Circle on the Spine */}
                  <div
                    className={`absolute left-4 md:left-1/2 -translate-x-1/2 top-6 md:top-1/2 -translate-y-1/2 w-7 h-7 rounded-full border-2 bg-white flex items-center justify-center z-10 transition-all duration-500 ${
                      isReached
                        ? "border-black scale-110 shadow-md ring-4 ring-black/5"
                        : "border-black/20 scale-90"
                    }`}
                  >
                    <div
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                        isReached ? "bg-black scale-100" : "bg-transparent scale-0"
                      }`}
                    />
                  </div>

                  {/* Milestone Card (Alternates Left and Right) */}
                  <div
                    className={`pl-12 md:pl-0 w-full md:w-[calc(50%-44px)] transition-all duration-700 ease-out ${
                      isReached
                        ? "opacity-100 translate-x-0 scale-100"
                        : isEven
                        ? "opacity-20 md:translate-x-8 scale-95"
                        : "opacity-20 md:-translate-x-8 scale-95"
                    }`}
                  >
                    <div
                      className={`p-6 sm:p-7 rounded-3xl border transition-all duration-500 ${
                        isReached
                          ? "bg-white border-black/15 shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.1)] hover:-translate-y-1"
                          : "bg-white/60 border-black/5"
                      }`}
                    >
                      {/* Top Meta Line: Year & Location */}
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                        <span className="font-mono text-xs font-bold text-black uppercase tracking-wider bg-black/5 px-2.5 py-1 rounded-full">
                          {item.year}
                        </span>
                        <span className="font-mono text-[11px] text-black/50">
                          {item.location}
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-black mt-2">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-black/60 mb-3">
                        {item.organization}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-black/75 leading-relaxed font-normal">
                        {item.description}
                      </p>

                      {/* Tags */}
                      {item.tags && (
                        <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-black/5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-[10px] font-mono text-black/70"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Ending Centered Dashed Card: Next - Your team? */}
            <div
              className={`relative flex flex-col items-center pt-8 transition-all duration-700 ${
                activeIndex >= TIMELINE.length
                  ? "opacity-100 translate-y-0"
                  : "opacity-30 translate-y-6"
              }`}
            >
              {/* Central End Node */}
              <div className="w-8 h-8 rounded-full border-2 border-dashed border-black/40 bg-white flex items-center justify-center mb-6 z-10 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-black animate-ping" />
              </div>

              <div className="max-w-md w-full p-8 rounded-3xl border-2 border-dashed border-black/20 bg-neutral-50/70 text-center hover:bg-neutral-50 transition-colors shadow-xs">
                <span className="font-mono text-xs uppercase tracking-widest text-black/40 block mb-1">
                  Next Chapter
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-black mb-2">
                  Your team?
                </h3>
                <p className="text-xs sm:text-sm text-black/70 leading-relaxed mb-6">
                Whether you're hiring for data analytics, data science, or AI engineering, or exploring a project that needs answers from messy data, let&apos;s build something exceptional together.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-black text-white text-xs font-semibold hover:bg-black/85 transition-all shadow-sm hover:scale-105 active:scale-95"
                >
                  <span>Start a conversation</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
