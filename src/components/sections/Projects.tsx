"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "~/data/projects";
import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { ProjectCard } from "~/components/ui/ProjectCard";
import { staggerContainer, staggerItem } from "~/lib/motion";

const FILTERS = ["All", "Featured", "Other"] as const;
type Filter = (typeof FILTERS)[number];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const featured = projects.filter((p) => p.featured && !p.disabled);
  const other = projects.filter((p) => !p.featured && !p.disabled);
  const disabled = projects.filter((p) => p.disabled);

  const visibleFeatured =
    filter === "Other" ? [] : featured;
  const visibleOther =
    filter === "Featured" ? [] : [...other, ...disabled];

  const counts: Record<Filter, number> = {
    All: projects.length,
    Featured: featured.length,
    Other: other.length + disabled.length,
  };

  return (
    <AnimatedSection id="projects">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Projects" subtitle="A selection of my recent work" />

        {/* Filter tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] p-1">
            {FILTERS.map((f) => (
              <button
                key={f}
                id={`project-filter-${f.toLowerCase()}`}
                onClick={() => setFilter(f)}
                className={`
                  relative rounded-lg px-4 py-1.5 text-sm font-medium transition-all duration-200
                  ${filter === f
                    ? "text-[#fafafa]"
                    : "text-[#a1a1aa] hover:text-[#fafafa]"
                  }
                `}
              >
                {filter === f && (
                  <motion.div
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-lg bg-red-500/20 border border-red-500/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative flex items-center gap-1.5">
                  {f}
                  <span
                    className={`text-[10px] font-mono rounded-full px-1.5 py-px
                      ${filter === f
                        ? "bg-red-500/30 text-red-300"
                        : "bg-white/5 text-[#a1a1aa]/60"
                      }`}
                  >
                    {counts[f]}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
            className="space-y-6"
          >
            {/* Featured row — full-width cards stacked */}
            {visibleFeatured.length > 0 && (
              <div className="space-y-6">
                {visibleFeatured.map((project) => (
                  <motion.div key={project.id} variants={staggerItem}>
                    <ProjectCard project={project} featured />
                  </motion.div>
                ))}
              </div>
            )}

            {/* Other / Coming soon grid */}
            {visibleOther.length > 0 && (
              <motion.div
                variants={staggerContainer}
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {visibleOther.map((project) => (
                  <motion.div key={project.id} variants={staggerItem}>
                    <ProjectCard project={project} className="h-full" />
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Empty state */}
            {visibleFeatured.length === 0 && visibleOther.length === 0 && (
              <motion.div
                variants={staggerItem}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <p className="text-[#a1a1aa] text-sm">No projects in this category yet.</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}
