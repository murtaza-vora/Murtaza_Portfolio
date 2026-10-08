"use client";

import { PROFILE } from "@/lib/data";
import LanyardCard from "./LanyardCard";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-black/5 bg-[#fefefe]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        {/* Section Heading Tag */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-black/50 uppercase tracking-widest mb-2">
            <span>01</span>
            <span>&mdash;</span>
            <span>About me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-black">
          Turning data into{" "}
            <span className="font-serif italic font-normal text-neutral-500">
              decision.
            </span>
          </h2>
        </div>

        {/* Three-Column Grid per Guide Specification */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Column: Summary & CTAs */}
          <div className="flex flex-col justify-center gap-6 order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-black">
              Hi, I&apos;m {PROFILE.name.split(" ")[0]}.
            </h3>
            <p className="text-sm sm:text-base text-black/75 leading-relaxed font-normal">
              {PROFILE.summaryVerbatim}
            </p>
            <p className="text-xs sm:text-sm text-black/60 leading-relaxed">
              From uncovering operational efficiencies at UpMeals and scaling enterprise analytics at Deloitte to deploying predictive machine learning models, I bridge data-driven insights with strategic business impact.
            </p>

            {/* Links and Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={PROFILE.resumePath}
                download="Murtaza_Vora_Resume.pdf"
                className="px-5 py-2.5 text-xs font-semibold rounded-full bg-black text-white hover:bg-black/85 transition-all shadow-sm hover:scale-105 active:scale-95"
              >
                Résumé (PDF) ↓
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs font-semibold rounded-full border border-black/20 hover:bg-black/5 text-black transition-all hover:scale-105 active:scale-95"
              >
                LinkedIn ↗
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs font-semibold rounded-full border border-black/20 hover:bg-black/5 text-black transition-all hover:scale-105 active:scale-95"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Centre Column: 3D Hanging Lanyard ID Card */}
          <div className="order-1 lg:order-2 flex justify-center">
            <LanyardCard />
          </div>

          {/* Right Column: Quick Facts & Paraphrased Quote */}
          <div className="flex flex-col justify-between h-full gap-6 order-3 border-t lg:border-t-0 lg:border-l border-black/10 pt-8 lg:pt-0 lg:pl-8">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-black/40 block">
                Quick Facts
              </span>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-baseline gap-4 py-2 border-b border-black/5">
                  <span className="text-black/40 shrink-0">Location</span>
                  <span className="font-medium text-black text-right">{PROFILE.location}</span>
                </div>
                <div className="flex justify-between items-baseline gap-4 py-2 border-b border-black/5">
                  <span className="text-black/40 shrink-0">Current Role</span>
                  <span className="font-medium text-black text-right">Data Analyst, UpMeals</span>
                </div>
                <div className="flex justify-between items-baseline gap-4 py-2 border-b border-black/5">
                  <span className="text-black/40 shrink-0">Degree</span>
                  <span className="font-medium text-black text-right">Master in Analytics, Northeastern</span>
                </div>
                <div className="flex justify-between items-baseline gap-4 py-2 border-b border-black/5">
                  <span className="text-black/40 shrink-0">Internship</span>
                  <span className="font-medium text-black text-right">Business Analyst at Skill Safari</span>
                </div>
                <div className="flex justify-between items-baseline gap-4 py-2 border-b border-black/5">
                  <span className="text-black/40 shrink-0">Direct Email</span>
                  <a href={`mailto:${PROFILE.email}`} className="font-medium text-black text-right hover:underline">
                    {PROFILE.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Paraphrased Quote */}
            <div className="bg-neutral-50 p-6 rounded-2xl border border-black/5 mt-4">
              <p className="font-serif italic text-base sm:text-lg text-black/80 leading-snug">
                &ldquo;{PROFILE.quote}&rdquo;
              </p>
              <span className="font-mono text-[10px] text-black/40 uppercase tracking-widest mt-3 block">
                — Murtaza Vora
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
