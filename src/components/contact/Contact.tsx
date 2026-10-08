"use client";

import { useState } from "react";
import { PROFILE } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const line1 = "Let's build";
  const line2 = "something together.";

  return (
    <section id="contact" className="py-24 bg-[#fefefe] border-t border-black/5">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12">
          {/* Main Headline with Hopping Letters */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-black/50 uppercase tracking-widest mb-4">
              <span>07</span>
              <span>&mdash;</span>
              <span>Get in touch</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-black leading-[1.05]">
              {/* Line 1 */}
              <div className="flex flex-wrap">
                {line1.split("").map((char, i) => (
                  <span
                    key={i}
                    className="inline-block transition-transform duration-200 hover:-translate-y-2 hover:text-neutral-500 cursor-default"
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </div>
              {/* Line 2 */}
              <div className="flex flex-wrap">
                {line2.split("").map((char, i) => (
                  <span
                    key={i}
                    className={`inline-block transition-transform duration-200 hover:-translate-y-2 hover:text-neutral-500 cursor-default ${
                      i >= 10 ? "font-serif italic font-normal text-neutral-500" : ""
                    }`}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </div>
            </h2>

            {/* Email with One-Click Copy Chip */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${PROFILE.email}`}
                className="text-xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-black underline decoration-black/20 hover:decoration-black transition-colors"
              >
                {PROFILE.email}
              </a>

              <button
                type="button"
                onClick={copyEmail}
                aria-live="polite"
                className="px-4 py-2 rounded-full text-xs font-mono font-medium border border-black/15 bg-white text-black hover:bg-black hover:text-white transition-all shadow-xs"
              >
                {copied ? "Copied ✓" : "Copy email"}
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-6 mt-8 font-mono text-xs">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/80 hover:text-black underline"
              >
                LinkedIn Profile ↗
              </a>
              <span className="text-black/20">•</span>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/80 hover:text-black underline"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Slowly Spinning Circular "Say Hello" Badge */}
          <div className="relative flex items-center justify-center shrink-0 self-center lg:self-start lg:mt-8">
            <div className="relative w-36 h-36 flex items-center justify-center animate-spin-slow">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[9.5px] font-mono uppercase tracking-[0.22em] fill-black">
                  <textPath href="#circlePath" startOffset="0%">
                    • SAY HELLO • GET IN TOUCH •
                  </textPath>
                </text>
              </svg>
            </div>
            {/* Center Dot */}
            <div className="absolute w-3 h-3 rounded-full bg-black shadow-xs" />
          </div>
        </div>

        {/* Footer Row */}
        <div className="mt-24 pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-black/50">
          <div>
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-black transition-colors">
              Back to top ↑
            </a>
            <span>·</span>
            <span>Built with Next.js 15 &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </section>
  );
}