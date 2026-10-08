"use client";

import { useState, useEffect } from "react";
import { NAV, PROFILE } from "@/lib/data";
import { useScrollProgress } from "@/lib/hooks";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const initials = PROFILE.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <>
      {/* 2px ink scroll progress bar along the very top */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-black z-50 transition-all duration-75"
        style={{ width: `${scrollProgress * 100}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <header className="fixed top-0 left-0 right-0 z-40 px-4 md:px-8 py-4 transition-all duration-300">
        <div className="max-w-[1320px] mx-auto flex items-center justify-between">
          {/* Left: Initials Mark & Name */}
          <a
            href="#"
            className="group flex items-center gap-3 no-underline focus:outline-none"
            aria-label="Back to top"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-semibold tracking-wider transition-all duration-500 group-hover:rotate-[360deg] ${
                scrolled
                  ? "bg-black text-white shadow-sm"
                  : "border border-black/20 text-black bg-white/80"
              }`}
            >
              {initials}
            </div>
            <span
              className={`text-sm font-medium tracking-tight text-black transition-opacity duration-300 hidden sm:inline-block ${
                scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              {PROFILE.name}
            </span>
          </a>

          {/* Centre-right: Desktop Nav Pill */}
          <nav
            aria-label="Main Navigation"
            className={`hidden md:flex items-center gap-1 rounded-full px-4 py-2 transition-all duration-300 ${
              scrolled
                ? "bg-white/80 backdrop-blur-md border border-black/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                : "bg-transparent"
            }`}
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 text-xs font-medium text-black/70 hover:text-black rounded-full hover:bg-black/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: Resume button & Mobile Menu trigger */}
          <div className="flex items-center gap-2">
            <a
              href={PROFILE.resumePath}
              download="Murtaza_Vora_Resume.pdf"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium rounded-full bg-black text-white hover:bg-black/85 transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              Resume
            </a>

            {/* Mobile Menu Pill */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="md:hidden px-3.5 py-2 text-xs font-medium rounded-full border border-black/15 bg-white/90 text-black hover:bg-black/5 transition-all"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Paper Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-[#fefefe] flex flex-col justify-between p-8 md:hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]"
            : "opacity-0 pointer-events-none [clip-path:polygon(0_0,100%_0,100%_0,0_0)]"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-black/50">
            Navigation
          </span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Navigation Menu"
            className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center text-sm font-medium hover:bg-black hover:text-white transition-all"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-5 my-auto">
          {NAV.map((item, idx) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-baseline gap-4 text-3xl font-bold tracking-tight text-black hover:text-black/60 transition-colors"
            >
              <span className="font-mono text-xs font-normal text-black/40">
                0{idx + 1}
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2 pt-6 border-t border-black/10">
          <a
            href={PROFILE.resumePath}
            download="Murtaza_Vora_Resume.pdf"
            className="w-full text-center py-3 text-sm font-medium rounded-full bg-black text-white hover:bg-black/80 transition-all"
          >
            Download Résumé (PDF)
          </a>
          <p className="font-mono text-[10px] text-center text-black/40 mt-2">
            Press ESC or tap ✕ to close
          </p>
        </div>
      </div>
    </>
  );
}
