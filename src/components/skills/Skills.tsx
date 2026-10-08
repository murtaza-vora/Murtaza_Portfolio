"use client";

import { useState } from "react";
import { SKILLS, SKILL_CATEGORIES, SkillItem } from "@/lib/data";
import { TechLogo } from "./TechLogo";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeSkill, setActiveSkill] = useState<SkillItem>(SKILLS[0]);

  return (
    <section id="skills" className="py-24 border-t border-black/5 bg-[#fefefe]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        {/* Section Tag & Heading */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-black/50 uppercase tracking-widest mb-2">
            <span>02</span>
            <span>&mdash;</span>
            <span>Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-black">
            The periodic table of my{" "}
            <span className="font-serif italic font-normal text-neutral-500">
              stack.
            </span>
          </h2>
          <p className="text-sm text-black/60 mt-2 max-w-xl">
            Hover or tap any element to inspect production applications, framework details, and engineering context.
          </p>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {SKILL_CATEGORIES.map((cat) => {
            const count =
              cat === "All"
                ? SKILLS.length
                : SKILLS.filter((s) => s.category === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-2 ${
                  isSelected
                    ? "bg-black text-white shadow-xs"
                    : "border border-black/10 text-black/70 hover:bg-black/5"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-black/5 text-black/50"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid + Sticky Inspector Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Elements Grid (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {SKILLS.map((skill, index) => {
              const matches =
                selectedCategory === "All" || skill.category === selectedCategory;
              const isActive = activeSkill.name === skill.name;

              return (
                <div
                  key={skill.name}
                  onClick={() => setActiveSkill(skill)}
                  onMouseEnter={() => setActiveSkill(skill)}
                  onFocus={() => setActiveSkill(skill)}
                  tabIndex={0}
                  role="button"
                  aria-label={`${skill.name}, category: ${skill.category}`}
                  className={`relative p-3.5 rounded-2xl border cursor-pointer transition-all duration-300 flex flex-col justify-between h-28 focus:outline-none focus:ring-2 focus:ring-black ${
                    isActive
                      ? "border-black bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] scale-[1.03] z-10"
                      : "border-black/10 bg-white/70 hover:border-black/30 hover:bg-white"
                  } ${matches ? "opacity-100" : "opacity-25 grayscale"}`}
                  style={{
                    animationDelay: `${(index % 4 + Math.floor(index / 4)) * 30}ms`,
                  }}
                >
                  {/* Top Bar: Atomic number & Category badge */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-black/40">
                    <span>{skill.number < 10 ? `0${skill.number}` : skill.number}</span>
                    <span className="text-[9px] uppercase tracking-wider truncate max-w-[80px]">
                      {skill.category.split(" ")[0]}
                    </span>
                  </div>

                  {/* Element Symbol */}
                  <div className="my-auto">
                    <span className="text-2xl font-bold font-mono tracking-tight text-black">
                      {skill.symbol}
                    </span>
                  </div>

                  {/* Element Name */}
                  <div className="text-xs font-medium text-black/80 truncate">
                    {skill.name}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky Inspector Panel (4 cols / 320px) */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="bg-white rounded-3xl border border-black/10 p-6 sm:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.04)] flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-black/10 pb-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-black/40">
                  Element Inspector
                </span>
                <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-full bg-black/5 text-black/70">
                  #{activeSkill.number} &middot; {activeSkill.category}
                </span>
              </div>

              {/* Big Logo with Pop Animation */}
              <div className="flex justify-center items-center py-4 bg-neutral-50 rounded-2xl border border-black/5">
                <div className="transition-transform duration-300 hover:scale-110">
                  <TechLogo name={activeSkill.name} size={110} />
                </div>
              </div>

              {/* Skill Title & Info */}
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold font-mono text-black">
                    {activeSkill.symbol}
                  </span>
                  <h3 className="text-xl font-bold text-black tracking-tight">
                    {activeSkill.name}
                  </h3>
                </div>
                <p className="text-xs text-black/70 mt-2 leading-relaxed">
                  {activeSkill.description}
                </p>
              </div>

              {/* Related Projects in Résumé */}
              <div className="border-t border-black/10 pt-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-black/40 block mb-2">
                  Applied In CV Projects
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeSkill.projects.map((proj) => (
                    <span
                      key={proj}
                      className="px-2.5 py-1 rounded-full bg-black/5 text-[11px] font-medium text-black/80"
                    >
                      {proj}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
