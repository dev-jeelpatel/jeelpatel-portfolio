"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, MapPin, Calendar, Briefcase, ChevronRight } from "lucide-react";
import { experience } from "~/data/experience";
import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeading } from "~/components/ui/SectionHeading";

export function Experience() {
  const [activeId, setActiveId] = useState(experience[0]?.id ?? "");
  const active = experience.find((e) => e.id === activeId) ?? experience[0];

  return (
    <AnimatedSection id="experience">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Experience" subtitle="My professional journey" />

        <div className="flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden border border-white/10">
          {/* ── Left: Company tabs ── */}
          <div className="md:w-56 shrink-0 border-b md:border-b-0 md:border-r border-white/10 bg-white/[0.02]">
            {experience.map((exp, i) => {
              const isActive = exp.id === activeId;
              return (
                <button
                  key={exp.id}
                  id={`exp-tab-${exp.id}`}
                  onClick={() => setActiveId(exp.id)}
                  className={`
                    w-full text-left px-5 py-4 relative transition-all duration-200 group
                    ${i !== 0 ? "border-t border-white/5" : ""}
                    ${isActive
                      ? "bg-red-500/10 text-[#fafafa]"
                      : "text-[#a1a1aa] hover:bg-white/5 hover:text-[#fafafa]"
                    }
                  `}
                >
                  {/* Active indicator bar */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-r transition-all duration-300
                      ${isActive ? "bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.6)]" : "bg-transparent"}
                    `}
                  />

                  <span className="block text-sm font-semibold leading-snug">
                    {exp.company}
                  </span>
                  <span
                    className={`block text-xs mt-0.5 font-mono transition-colors
                      ${isActive ? "text-red-400/80" : "text-[#a1a1aa]/50 group-hover:text-[#a1a1aa]/70"}
                    `}
                  >
                    {exp.period.split(" - ")[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── Right: Detail panel ── */}
          <div className="flex-1 min-w-0 p-7 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active?.id}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="h-full"
              >
                {active && (
                  <div className="space-y-5">
                    {/* Role + company header */}
                    <div>
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="text-xl font-bold text-[#fafafa] leading-tight">
                            {active.role}
                            <span className="text-red-400"> @ </span>
                            {active.website ? (
                              <a
                                href={active.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-red-400 hover:text-red-300 transition-colors"
                              >
                                {active.company}
                                <ExternalLink className="h-3.5 w-3.5" />
                              </a>
                            ) : (
                              <span className="text-red-400">{active.company}</span>
                            )}
                          </h3>
                        </div>

                        {/* Status badge */}
                        {active.period.toLowerCase().includes("present") && (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>

                      {/* Meta row */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-2">
                        <span className="inline-flex items-center gap-1.5 text-sm text-[#a1a1aa]/70">
                          <Calendar className="h-3.5 w-3.5 text-red-500/60" />
                          {active.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm text-[#a1a1aa]/70">
                          <MapPin className="h-3.5 w-3.5 text-red-500/60" />
                          {active.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm text-[#a1a1aa]/70">
                          <Briefcase className="h-3.5 w-3.5 text-red-500/60" />
                          Internship
                        </span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-red-500/20 via-white/5 to-transparent" />

                    {/* Highlights */}
                    <ul className="space-y-3">
                      {active.highlights.map((h, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06, duration: 0.2 }}
                          className="flex items-start gap-3 text-sm text-[#a1a1aa] leading-relaxed"
                        >
                          <ChevronRight className="h-4 w-4 text-red-500/70 shrink-0 mt-0.5" />
                          {h}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="pt-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#a1a1aa]/50 mb-2.5">
                        Technologies
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {active.techUsed.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-white/5 border border-white/10 hover:border-red-500/30 hover:bg-red-500/5 transition-colors duration-200 px-3 py-1 text-xs text-[#a1a1aa] font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Timeline strip at bottom */}
        <div className="mt-8 flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="flex items-center gap-2">
            {experience.map((exp, i) => (
              <button
                key={exp.id}
                onClick={() => setActiveId(exp.id)}
                className={`relative h-2 rounded-full transition-all duration-300
                  ${exp.id === activeId ? "w-8 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]" : "w-2 bg-white/20 hover:bg-white/40"}
                `}
                aria-label={`Select ${exp.company}`}
              />
            ))}
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-white/5 via-white/5 to-transparent" />
        </div>
      </div>
    </AnimatedSection>
  );
}
