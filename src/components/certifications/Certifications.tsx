"use client";

import { CERTIFICATIONS } from "@/lib/data";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 border-t border-black/5 bg-[#fefefe]"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Sticky Left Heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-black/50 uppercase tracking-widest mb-2">
              <span>04</span>
              <span>&mdash;</span>
              <span>Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-black">
              Always{" "}
              <span className="font-serif italic font-normal text-neutral-500">
                learning.
              </span>
            </h2>
            <p className="font-mono text-xs text-black/50 mt-3">
              {CERTIFICATIONS.length} Certified Milestones &middot; Industry &amp; Academic Honors
            </p>
          </div>

          {/* Right: Numbered Lock-Flood List in elevated white card */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] divide-y divide-black/10 overflow-hidden">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                tabIndex={0}
                className="flood-row group p-6 sm:p-7 flex items-center justify-between cursor-pointer focus:outline-none"
              >
                {/* Left: Index & Title */}
                <div className="relative z-10 flex items-start sm:items-center gap-6">
                  <span className="font-mono text-xs font-semibold text-black/40 group-hover:text-neutral-400 transition-colors">
                    {cert.index}
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-black group-hover:text-white transition-colors">
                      {cert.title}
                    </h3>
                    <p className="flood-subtext text-xs text-black/60 mt-1 transition-colors">
                      {cert.issuer} &middot; {cert.year}
                    </p>
                  </div>
                </div>

                {/* Right: Badge & Sliding Arrow */}
                <div className="relative z-10 flex items-center gap-4 shrink-0">
                  {cert.badge && (
                    <span className="hidden sm:inline-block font-mono text-[10px] px-2.5 py-1 rounded-full border border-black/10 bg-neutral-50 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white text-black/70 transition-colors">
                      {cert.badge}
                    </span>
                  )}
                  <span className="flood-arrow font-mono text-base text-black/40 group-hover:text-white transition-transform duration-300">
                    &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
