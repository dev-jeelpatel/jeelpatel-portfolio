"use client";

import {
  ExternalLink,
  Github,
  Package,
  Sparkles,
  ShieldCheck,
  Zap,
  Users,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Project } from "~/types/data";
import { cn } from "~/lib/cn";

const highlightIcons: Record<string, LucideIcon> = {
  Sparkles,
  ShieldCheck,
  Zap,
  Users,
};

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  className?: string;
}

export function ProjectCard({ project, featured, className }: ProjectCardProps) {
  const isDisabled = project.disabled;

  if (featured) {
    return (
      <div
        className={cn(
          "group relative rounded-2xl overflow-hidden border border-white/10 transition-all duration-500",
          isDisabled
            ? "opacity-40 cursor-not-allowed"
            : "hover:border-red-500/40 hover:shadow-[0_0_60px_rgba(239,68,68,0.12)]",
          className
        )}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative flex flex-col md:flex-row gap-0">
          {/* Image panel */}
          <div className="md:w-2/5 shrink-0 relative overflow-hidden bg-white/[0.03] min-h-[200px] md:min-h-[280px]">
            {project.image ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-zinc-900/60" />
            )}
            {/* Decorative grid */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(239,68,68,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.2) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            {!project.image && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-500/20 border border-red-500/30 mb-3">
                    <Sparkles className="w-7 h-7 text-red-400" />
                  </div>
                  <p className="text-xs text-red-400/60 font-mono uppercase tracking-widest">
                    Featured Project
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Content panel */}
          <div className="flex-1 p-7 bg-white/[0.02] flex flex-col justify-between">
            <div>
              {/* Title row */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-2xl font-bold text-[#fafafa] leading-tight group-hover:text-red-300 transition-colors duration-300">
                  {project.title}
                </h3>
                {!isDisabled && (project.liveUrl || project.githubUrl) && (
                  <a
                    href={project.liveUrl ?? project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-[#a1a1aa] hover:border-red-500/50 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Description — truncated */}
              <p className="text-sm text-[#a1a1aa] leading-relaxed line-clamp-3 mb-4">
                {project.description}
              </p>

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {project.highlights.slice(0, 4).map((h) => {
                    const Icon = highlightIcons[h.icon];
                    return (
                      <div
                        key={h.label}
                        className="flex items-center gap-2 rounded-lg bg-white/[0.04] border border-white/[0.06] px-3 py-2"
                      >
                        {Icon && <Icon size={13} className="text-red-400 shrink-0" />}
                        <span className="text-xs font-medium text-[#d4d4d8] truncate">{h.label}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="space-y-4">
              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-mono text-[#a1a1aa]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              {!isDisabled && (
                <div className="flex flex-wrap gap-4 pt-1">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[#a1a1aa] hover:text-red-400 transition-colors"
                    >
                      <Github size={15} /> Source
                    </a>
                  )}
                  {project.npmUrl && (
                    <a
                      href={project.npmUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[#a1a1aa] hover:text-red-400 transition-colors"
                    >
                      <Package size={15} /> npm
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[#a1a1aa] hover:text-red-400 transition-colors"
                    >
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Non-featured card ──────────────────────────────────────────
  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex flex-col transition-all duration-300",
        isDisabled
          ? "opacity-35 cursor-not-allowed"
          : "hover:border-red-500/30 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(239,68,68,0.08)] hover:bg-white/[0.04]",
        className
      )}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/5 group-hover:border-red-500/30 group-hover:bg-red-500/10 transition-all duration-300">
          <Zap className="w-4 h-4 text-[#a1a1aa] group-hover:text-red-400 transition-colors" />
        </div>
        {!isDisabled && (project.liveUrl || project.githubUrl) && (
          <a
            href={project.liveUrl ?? project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-0 group-hover:opacity-100 flex items-center justify-center w-7 h-7 rounded-full border border-white/10 text-[#a1a1aa] hover:border-red-500/50 hover:text-red-400 transition-all duration-200"
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        )}
        {isDisabled && (
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#555] border border-white/5 rounded-full px-2 py-0.5">
            Soon
          </span>
        )}
      </div>

      {/* Title */}
      <h3
        className={cn(
          "text-base font-bold mb-2 transition-colors duration-300",
          isDisabled ? "text-[#555]" : "text-[#fafafa] group-hover:text-red-300"
        )}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        className={cn(
          "text-sm leading-relaxed mb-4 flex-1 line-clamp-3",
          isDisabled ? "text-[#444]" : "text-[#a1a1aa]"
        )}
      >
        {project.description}
      </p>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.techStack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className={cn(
              "rounded-full border px-2.5 py-0.5 text-xs font-mono",
              isDisabled
                ? "border-white/5 text-[#444]"
                : "border-white/10 bg-white/5 text-[#a1a1aa]"
            )}
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 4 && (
          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-mono text-[#a1a1aa]/50">
            +{project.techStack.length - 4}
          </span>
        )}
      </div>

      {/* Links */}
      {!isDisabled && (
        <div className="flex gap-4 border-t border-white/5 pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#a1a1aa] hover:text-red-400 transition-colors"
            >
              <Github size={13} /> Code
            </a>
          )}
          {project.npmUrl && (
            <a
              href={project.npmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#a1a1aa] hover:text-red-400 transition-colors"
            >
              <Package size={13} /> npm
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#a1a1aa] hover:text-red-400 transition-colors"
            >
              <ExternalLink size={13} /> Demo
            </a>
          )}
        </div>
      )}
    </div>
  );
}
