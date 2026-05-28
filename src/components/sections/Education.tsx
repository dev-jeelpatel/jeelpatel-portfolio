"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, GraduationCap, ChevronDown, Award, BookOpen, Star } from "lucide-react";
import { education } from "~/data/education";
import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "~/lib/motion";

export function Education() {
  const [expandedId, setExpandedId] = useState<string | null>(education[0]?.id ?? null);

  return (
    <AnimatedSection id="education">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Education"
          subtitle="My academic journey and milestones"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative space-y-6"
        >
          {/* Glowing vertical line */}
          <div className="absolute left-[23px] top-6 bottom-6 w-[2px] timeline-line hidden sm:block" />

          {education.map((entry, index) => {
            const isExpanded = expandedId === entry.id;
            const isLast = index === education.length - 1;

            return (
              <motion.div
                key={entry.id}
                variants={staggerItem}
                className="relative sm:pl-16"
              >
                {/* Timeline icon */}
                <div className="absolute left-0 top-5 hidden sm:flex h-12 w-12 items-center justify-center rounded-full border-2 border-red-500 bg-[#0a0a0a] timeline-dot z-10">
                  <GraduationCap className="h-5 w-5 text-red-400" />
                </div>

                {/* Card */}
                <div
                  className={`glass rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer
                    ${isExpanded
                      ? "shadow-[0_0_40px_rgba(239,68,68,0.12)] border-red-500/30"
                      : "glass-hover hover:shadow-[0_0_24px_rgba(239,68,68,0.06)]"
                    }`}
                  onClick={() => setExpandedId(isExpanded ? null : entry.id)}
                >
                  {/* Card header — always visible */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        {/* Mobile icon */}
                        <div className="flex items-center gap-2 mb-2 sm:hidden">
                          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-red-500/50 bg-red-500/10">
                            <GraduationCap className="h-3.5 w-3.5 text-red-400" />
                          </div>
                          <span className="text-xs text-[#a1a1aa]/60 font-mono">{entry.period}</span>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                          <h3 className="text-lg font-bold text-[#fafafa] leading-tight">
                            {entry.degree}
                          </h3>
                          <span className="hidden sm:block text-sm text-[#a1a1aa]/60 font-mono shrink-0">
                            {entry.period}
                          </span>
                        </div>

                        <p className="text-sm font-medium text-red-400 mb-1">{entry.field}</p>

                        <div className="flex flex-wrap items-center gap-2">
                          {entry.website ? (
                            <a
                              href={entry.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1 text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors"
                            >
                              {entry.institution}
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          ) : (
                            <span className="text-sm text-[#a1a1aa]">{entry.institution}</span>
                          )}
                          <span className="text-[#a1a1aa]/40">•</span>
                          <span className="text-sm text-[#a1a1aa]/60">{entry.location}</span>
                          {entry.gpa && (
                            <>
                              <span className="text-[#a1a1aa]/40">•</span>
                              <span className="text-xs font-mono text-red-400/80 bg-red-500/10 border border-red-500/20 rounded-full px-2 py-0.5">
                                GPA {entry.gpa}
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Expand toggle */}
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="shrink-0 mt-1"
                      >
                        <ChevronDown className="h-5 w-5 text-[#a1a1aa]/50" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Expandable content */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-white/5 pt-5 space-y-5">
                          {/* Description */}
                          <p className="text-sm text-[#a1a1aa] leading-relaxed">{entry.description}</p>

                          <div className="grid sm:grid-cols-2 gap-4">
                            {/* Achievements */}
                            {entry.achievements.length > 0 && (
                              <div>
                                <div className="flex items-center gap-2 mb-3">
                                  <Award className="h-4 w-4 text-red-400" />
                                  <span className="text-xs font-semibold text-[#fafafa] uppercase tracking-wider">
                                    Achievements
                                  </span>
                                </div>
                                <ul className="space-y-2">
                                  {entry.achievements.map((a, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-[#a1a1aa]">
                                      <Star className="h-3 w-3 text-red-500/60 shrink-0 mt-0.5" />
                                      {a}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Key Courses */}
                            {entry.courses.length > 0 && (
                              <div>
                                <div className="flex items-center gap-2 mb-3">
                                  <BookOpen className="h-4 w-4 text-red-400" />
                                  <span className="text-xs font-semibold text-[#fafafa] uppercase tracking-wider">
                                    Key Courses
                                  </span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {entry.courses.map((course) => (
                                    <span
                                      key={course}
                                      className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-xs text-[#a1a1aa] font-mono"
                                    >
                                      {course}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Year badge between cards */}
                {!isLast && (
                  <div className="hidden sm:flex items-center gap-3 mt-4 mb-2 ml-[-64px] pl-16">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
