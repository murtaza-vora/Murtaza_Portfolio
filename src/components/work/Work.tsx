"use client";

import { useState } from "react";
import { PROJECTS, ProjectItem } from "@/lib/data";
import { IllustrativeUI } from "./IllustrativeUI";

export default function Work() {
  const [activeProject, setActiveProject] = useState<string>(PROJECTS[0].id);

  return (
    <section id="work" className="py-24 border-t border-black/5 bg-[#fefefe]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        {/* Section Heading Tag */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-black/50 uppercase tracking-widest mb-2">
            <span>03</span>
            <span>&mdash;</span>
            <span>Selected work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-black">
            Things I&apos;ve{" "}
            <span className="font-serif italic font-normal text-neutral-500">
              built.
            </span>
          </h2>
          <p className="text-sm text-black/60 mt-2 max-w-xl">
          Selected data analytics projects, business intelligence solutions, and data-driven applications built to turn complex data into actionable insights.
          </p>
        </div>

        {/* Desktop Expanding Horizontal Accordion */}
        <div className="hidden lg:flex gap-4 h-[620px] w-full">
          {PROJECTS.map((project: ProjectItem) => {
            const isOpen = activeProject === project.id;

            return (
              <div
                key={project.id}
                onClick={() => setActiveProject(project.id)}
                onMouseEnter={() => setActiveProject(project.id)}
                onFocus={() => setActiveProject(project.id)}
                tabIndex={0}
                role="button"
                aria-expanded={isOpen}
                aria-label={`Project: ${project.title}`}
                className={`relative rounded-3xl border border-black/10 overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none focus:ring-2 focus:ring-black ${
                  isOpen
                    ? "flex-[3.5] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8"
                    : "flex-[0.6] bg-white hover:bg-neutral-50 p-6 flex flex-col justify-between items-center shadow-xs"
                }`}
              >
                {!isOpen ? (
                  /* Collapsed Spine */
                  <div className="w-full h-full flex flex-col justify-between items-center select-none">
                    <span className="font-mono text-xs font-bold text-black/40">
                      {project.index}
                    </span>

                    {/* Vertical Title */}
                    <div className="my-auto [writing-mode:vertical-rl] rotate-180">
                      <span className="text-sm font-semibold tracking-tight text-black/80 whitespace-nowrap">
                        {project.title}
                      </span>
                    </div>

                    {/* Rotating Plus Icon */}
                    <div className="w-9 h-9 rounded-full border border-black/15 flex items-center justify-center text-black/60 group-hover:rotate-90 transition-transform duration-300">
                      +
                    </div>
                  </div>
                ) : (
                  /* Expanded Full Panel */
                  <div className="w-full h-full flex gap-8 items-stretch animate-fadeIn">
                    {/* Left Side: Project Details */}
                    <div className="w-7/12 flex flex-col justify-between pr-4 overflow-y-auto">
                      <div>
                        {/* Kicker & Index */}
                        <div className="flex items-center gap-3 font-mono text-xs text-black/40 mb-2">
                          <span>{project.index}</span>
                          <span>&middot;</span>
                          <span className="uppercase tracking-wider font-semibold text-black/60">
                            {project.kicker}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold tracking-tight text-black mb-3">
                          {project.title}
                        </h3>

                        <p className="text-sm text-black/75 leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {/* 2-Column Features List */}
                        <div className="space-y-2 mb-6">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-black/40 block">
                            Key Capabilities
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-black/70">
                            {project.features.map((feat, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-2 bg-neutral-50 p-2.5 rounded-xl border border-black/5"
                              >
                                <span className="text-black font-bold text-xs">
                                  &bull;
                                </span>
                                <span className="leading-snug">{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Tech Chips & CTA Links */}
                      <div className="pt-4 border-t border-black/10 flex flex-col gap-4">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-full bg-black/5 text-[11px] font-mono font-medium text-black/80"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {project.link && project.link !== "#" && (
                          <div>
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold rounded-full bg-black text-white hover:bg-black/80 transition-all"
                            >
                              <span>Visit Platform</span>
                              <span>&nearr;</span>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right Side: Illustrative Mini-UI */}
                    <div className="w-5/12 flex items-center justify-center">
                      <IllustrativeUI type={project.uiType} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Accordion (Vertical) */}
        <div className="flex flex-col gap-4 lg:hidden">
          {PROJECTS.map((project) => {
            const isOpen = activeProject === project.id;
            return (
              <div
                key={project.id}
                className="rounded-2xl border border-black/10 bg-white overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setActiveProject(isOpen ? "" : project.id)}
                  className="w-full p-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-black/40">
                      {project.index}
                    </span>
                    <span className="font-bold text-black text-base">
                      {project.title}
                    </span>
                  </div>
                  <span className="font-mono text-lg text-black/40">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 border-t border-black/5 space-y-4">
                    <p className="text-xs text-black/70 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="h-64">
                      <IllustrativeUI type={project.uiType} />
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-full bg-black/5 text-[10px] font-mono text-black/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
