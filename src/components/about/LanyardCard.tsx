"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { PROFILE } from "@/lib/data";

export default function LanyardCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse physics: spring damped tilt toward cursor
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = (e.clientX - centerX) / (rect.width / 2);
      const dy = (e.clientY - centerY) / (rect.height / 2);
      targetX = -dy * 12; // tilt angle degrees
      targetY = dx * 14;
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const updatePhysics = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      setRotate({ x: currentX, y: currentY });
      animFrame = requestAnimationFrame(updatePhysics);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    animFrame = requestAnimationFrame(updatePhysics);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-start w-full max-w-[380px] mx-auto py-4 select-none [perspective:1200px]"
    >
      {/* Lanyard Top Attachment & Woven Strap */}
      <div className="flex flex-col items-center z-20">
        {/* Lanyard Clip / Mount */}
        <div className="w-12 h-3 bg-neutral-800 rounded-t-sm shadow-md" />
        {/* Ribbon Strap with vertically patterned name/role */}
        <div className="relative w-7 h-20 bg-neutral-900 border-x border-neutral-700 overflow-hidden flex flex-col items-center justify-center shadow-md">
          <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(45deg,#000,#000_2px,#222_2px,#222_4px)]" />
          <span className="relative text-[7px] font-mono uppercase tracking-widest text-neutral-400 rotate-90 whitespace-nowrap">
            {PROFILE.preferredName}
          </span>
        </div>
        {/* Metallic Clip Ring */}
        <div className="w-5 h-7 border-2 border-neutral-400 rounded-full -mt-2 bg-gradient-to-b from-neutral-300 to-neutral-500 shadow-sm" />
        <div className="w-8 h-2.5 bg-neutral-700 rounded-sm -mt-1 shadow-md" />
      </div>

      {/* Interactive 3D Flippable Card */}
      <div
        ref={cardRef}
        onClick={() => setIsFlipped(!isFlipped)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsFlipped(!isFlipped);
          }
        }}
        tabIndex={0}
        role="button"
        aria-label="Developer ID card. Click or press Enter to flip."
        className="relative w-full aspect-[1/1.32] min-h-[460px] cursor-pointer mt-1 rounded-[26px] preserve-3d transition-transform duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] focus:outline-none focus:ring-2 focus:ring-black"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${
            rotate.y + (isFlipped ? 180 : 0)
          }deg)`,
        }}
      >
        {/* FRONT OF ID CARD */}
        <div className="absolute inset-0 w-full h-full bg-white rounded-[26px] border border-black/10 shadow-[0_16px_40px_rgba(0,0,0,0.08)] p-6 flex flex-col justify-between backface-hidden overflow-hidden">
          {/* Top Hanging Slot Punch */}
          <div className="w-12 h-2.5 mx-auto bg-neutral-200 rounded-full border border-neutral-300 -mt-2 mb-2 shadow-inner" />

          {/* Top Black Header Band */}
          <div className="bg-black text-white px-4 py-2 rounded-xl flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-widest uppercase font-bold">
              DEVELOPER ID
            </span>
            <span className="font-mono text-[9px] text-neutral-400">
              CEE &middot; 2026
            </span>
          </div>

          {/* Portrait & Details Row */}
          <div className="flex gap-4 items-center mt-3">
            {/* 128x156 portrait frame */}
            <div className="relative w-[116px] h-[142px] rounded-xl overflow-hidden border border-black/15 bg-neutral-100 shadow-sm shrink-0 group">
              <Image
                src="/hero/MKVavtar.jpg" 
                alt={PROFILE.name}
                fill
                sizes="128px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="flex flex-col gap-1 min-w-0">
              <span className="text-[10px] font-mono text-black/40 uppercase tracking-wider">
                Full Name
              </span>
              <p className="text-sm font-bold text-black tracking-tight leading-tight truncate">
                {PROFILE.name}
              </p>
              <span className="text-[10px] font-mono text-black/40 uppercase tracking-wider mt-1">
                Position
              </span>
              <p className="text-xs font-medium text-black/80 leading-tight">
                Data Scientist &amp; AI Engineer
              </p>
              {/* <span className="text-[9px] font-mono text-black/50 mt-1">
                Cardiff Met &middot; 1st Class
              </span> */}
            </div>
          </div>

          {/* Metadata Rows */}
          <div className="grid grid-cols-2 gap-2 py-2 border-y border-black/10 text-[10px] font-mono mt-2">
            <div>
              <span className="text-black/40 uppercase text-[9px] block">ID Number</span>
              <span className="font-semibold text-black">{PROFILE.idDetails.idNumber}</span>
            </div>
            <div>
              <span className="text-black/40 uppercase text-[9px] block">Valid Thru</span>
              <span className="font-semibold text-black">{PROFILE.idDetails.validTill}</span>
            </div>
          </div>

          {/* Barcode & Hologram Bottom Bar */}
          <div className="flex items-center justify-between pt-2">
            {/* Holographic Sticker Simulation */}
            <div className="w-12 h-10 rounded-md bg-gradient-to-tr from-neutral-200 via-neutral-100 to-neutral-300 border border-neutral-300 p-1 flex items-center justify-center shadow-xs">
              <span className="text-[7px] font-mono text-neutral-600 font-bold uppercase tracking-tighter text-center">
                OFFICIAL
                <br />
                VERIFIED
              </span>
            </div>

            {/* CSS Simulated Barcode */}
            <div className="flex flex-col items-end">
              <div className="flex gap-[2px] h-7 items-end">
                <div className="w-[2px] h-full bg-black" />
                <div className="w-[1px] h-full bg-black" />
                <div className="w-[3px] h-full bg-black" />
                <div className="w-[1px] h-full bg-black" />
                <div className="w-[2px] h-full bg-black" />
                <div className="w-[4px] h-full bg-black" />
                <div className="w-[1px] h-full bg-black" />
                <div className="w-[2px] h-full bg-black" />
                <div className="w-[3px] h-full bg-black" />
                <div className="w-[1px] h-full bg-black" />
                <div className="w-[2px] h-full bg-black" />
                <div className="w-[4px] h-full bg-black" />
              </div>
              <span className="font-mono text-[8px] text-black/50 tracking-widest mt-0.5">
                9477-1015-137
              </span>
            </div>
          </div>

          <p className="text-[9px] font-mono text-center text-black/35 mt-1">
            Tap or hover to flip card &rarr;
          </p>
        </div>

        {/* BACK OF ID CARD */}
        <div className="absolute inset-0 w-full h-full bg-white rounded-[26px] border border-black/10 shadow-[0_16px_40px_rgba(0,0,0,0.08)] p-6 flex flex-col justify-between backface-hidden rotate-y-180 overflow-hidden">
          {/* Top Punch Slot */}
          <div className="w-12 h-2.5 mx-auto bg-neutral-200 rounded-full border border-neutral-300 -mt-2 mb-2 shadow-inner" />

          {/* Top Magnetic Stripe */}
          <div className="w-full h-8 bg-neutral-900 rounded-lg shadow-inner -mt-1" />

          {/* "What I am" section */}
          <div className="flex flex-col gap-2 my-auto">
            <span className="font-mono text-[10px] uppercase font-bold text-black tracking-widest">
              What I Am &middot; Profile Credentials
            </span>
            <ul className="text-xs text-black/80 space-y-1.5 list-disc pl-4 font-normal leading-relaxed">
              <li>
                <strong className="text-black">Data Scientist</strong>  
              </li>
              <li>
                <strong className="text-black">Master's </strong> in Analytics(Northeastern University)
              </li>
              <li>
                <strong className="text-black">Bachelor of Technology</strong> — in Information & Technology(Parul University)
              </li>
              {/* <li>
                <strong className="text-black">Founder</strong> of Halneo SME Digital Enablement Platform
              </li> */}
            </ul>
          </div>

          {/* Signature & Contact Notice */}
          <div className="border-t border-black/10 pt-3">
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-[9px] font-mono text-black/40 uppercase">Authorized Signature</span>
              <span className="font-serif italic text-sm text-black font-medium">
                {PROFILE.idDetails.signature}
              </span>
            </div>
            <div className="bg-neutral-50 rounded-xl p-2.5 border border-black/5">
              <p className="text-[10px] text-black/70 font-mono leading-tight">
                If found, say hello:{" "}
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="font-bold underline text-black hover:text-black/70"
                >
                  {PROFILE.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
