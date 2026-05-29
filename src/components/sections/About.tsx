"use client";

import { ExternalLink, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { personalInfo } from "~/data/personal";
import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeading } from "~/components/ui/SectionHeading";

const stats = [
  { value: "4+", label: "Years Learning" },
  { value: "20+", label: "Projects Delivered" },
  { value: "20+", label: "Happy Clients" },
];

const socials = [
  {
    name: "GitHub",
    handle: "@dev-jeelpatel",
    href: "https://github.com/dev-jeelpatel",
    icon: Github,
    accent: false,
  },
  {
    name: "LinkedIn",
    handle: "jeelpatel48",
    href: "https://www.linkedin.com/in/jeelpatel48/",
    icon: Linkedin,
    accent: false,
  },
  {
    name: "Email",
    handle: "dev.jeelpatel@gmail.com",
    href: "mailto:dev.jeelpatel@email.com",
    icon: Mail,
    accent: true,
  },
];

export function About() {
  return (
    <AnimatedSection id="about">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div className="flex flex-col gap-6">
            <p className="text-[#a1a1aa] leading-relaxed text-base">
              {personalInfo.bio}
            </p>

            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-lg p-4">
                  <p className="text-2xl font-bold text-[#fafafa]">{stat.value}</p>
                  <p className="text-xs text-[#a1a1aa]/60 mt-1 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest text-[#a1a1aa]/50 mb-1">
              Find me on
            </p>

            {socials.map(({ name, handle, href, icon: Icon, accent }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl p-4 flex items-center gap-4 group transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.12)] hover:border-white/20"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon className={`w-4 h-4 ${accent ? "text-red-400" : "text-[#a1a1aa]"}`} />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#fafafa]">{name}</p>
                  <p className="text-xs text-[#a1a1aa]/60 mt-0.5">{handle}</p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#a1a1aa]/30 ml-auto group-hover:text-[#a1a1aa]/60 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}