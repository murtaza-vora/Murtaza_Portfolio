"use client";

import { useEffect, useRef, useState } from "react";
import { PROFILE } from "@/lib/data";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioBlocked, setAudioBlocked] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try autoplay with audio first
    video.muted = false;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setIsMuted(false);
          setAudioBlocked(false);
        })
        .catch(() => {
          // Autoplay with audio was blocked by browser policy -> fall back to muted
          video.muted = true;
          setIsMuted(true);
          setAudioBlocked(true);
          video.play().then(() => setIsPlaying(true)).catch(() => {});
        });
    }

    // Unlock audio on first user interaction anywhere on the page
    const unlockAudio = () => {
      if (video) {
        video.muted = false;
        setIsMuted(false);
        setAudioBlocked(false);
      }
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
    };

    window.addEventListener("pointerdown", unlockAudio);
    window.addEventListener("keydown", unlockAudio);
    window.addEventListener("touchstart", unlockAudio);

    // Pause video and audio when less than 35% of hero is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio < 0.35) {
            video.pause();
            setIsPlaying(false);
          } else {
            video.play().then(() => setIsPlaying(true)).catch(() => {});
          }
        });
      },
      { threshold: [0, 0.35, 1.0] }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
    };
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isMuted) {
      video.muted = false;
      setIsMuted(false);
      setAudioBlocked(false);
      video.play().catch(() => {});
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-[#fefefe]"
    >
      {/* Background Giant Outlined Ghost Word */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span
          className="text-[18vw] font-black uppercase tracking-tighter text-transparent"
          style={{
            WebkitTextStroke: "1.5px rgba(0, 0, 0, 0.05)",
            transform: "translateY(-5%)",
          }}
        >
          {PROFILE.ghostWord}
        </span>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-[1320px] mx-auto w-full px-4 sm:px-8 flex-1 flex flex-col items-center justify-center text-center">
        {/* Section tag / status indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 bg-white/60 backdrop-blur-sm mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[11px] tracking-wide text-black/70 uppercase">
            Available for Data Analyst / Data Scientist/ AI engineer
          </span>
        </div>

        {/* Video Container in Center */}
        <div className="relative w-full max-w-[768px] mx-auto flex items-center justify-center my-2">
          {/* Multiply blend mode blends pure white video background seamlessly into warm off-white page */}
          <div className="relative w-full aspect-[16/9] max-h-[75vh] flex items-center justify-center overflow-hidden">
            <video
              ref={videoRef}
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-contain mix-blend-multiply"
              style={{ filter: "brightness(1.35) contrast(1.05)" }}
              poster="/hero/portrait-bust.webp"
            >
              <source src="/hero/hero.mp4" type="video/mp4" />
              <source src="/hero/hero.webm" type="video/webm" />
              Your browser does not support HTML5 video.
            </video>

            {/* Sound Control Round Button (46px, solid ink) */}
            <div className="absolute bottom-4 right-4 z-20">
              <div className="relative flex items-center justify-center">
                {audioBlocked && (
                  <span className="absolute w-12 h-12 rounded-full bg-black/20 animate-ping-pulse pointer-events-none" />
                )}
                <button
                  type="button"
                  onClick={toggleSound}
                  aria-label={isMuted ? "Unmute video introduction" : "Mute video introduction"}
                  className="w-[46px] h-[46px] rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  {isMuted ? (
                    /* Sound Off Icon (Play/triangle icon per guide) */
                    <svg
                      className="w-4 h-4 translate-x-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  ) : (
                    /* Sound On Icon (Two bars / speaker bars per guide) */
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Headline from Résumé */}
        <div className="max-w-3xl mx-auto mt-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-black leading-[1.15]">
            Murtaza Vora
          </h1>
          <p className="mt-2 text-base sm:text-lg text-black/60 font-medium tracking-tight">
            Data Analyst &middot; Data Scientist &middot; AI Engineer
          </p>
          <p className="mt-2 text-xs sm:text-sm text-black/50 max-w-xl mx-auto leading-relaxed">
          Northeastern MSc Analytics Graduate &middot; Microsoft Certified Azure Data Scientist &middot; Based in Vancouver, Canada
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <a
            href="#work"
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider rounded-full bg-black text-white hover:bg-black/85 transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
          >
            Explore work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider rounded-full border border-black/20 bg-white text-black hover:bg-black/5 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Connect
          </a>
          <a
            href={PROFILE.resumePath}
            download="Murtaza_Vora_Resume.pdf"
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider rounded-full border border-black/20 bg-white text-black hover:bg-black/5 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Résumé ↓
          </a>
        </div>
      </div>
    </section>
  );
}
