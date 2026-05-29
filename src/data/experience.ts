import { Experience } from "~/types/data";

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "Odan Infotech LLP",
    role: "Full Stack Intern",
    period: "Jan 2026 - Present",
    location: "Surat, GJ",
    website: "https://drive.google.com/file/d/1bB9YhiCMqjXvY-6KhykQPiorAPgg3b0_/view?usp=drive_link",
    highlights: [
      "Led frontend development of a no-code form builder SaaS enabling MSMEs to build customizable dynamic forms",
      "Designed reusable, responsive component libraries, accelerating feature delivery across teams",
      "Implemented real-time validation and conditional logic in form builders, reducing user errors",
      "Built performant dashboard with virtualized lists and infinite scroll, handling 100+ form entries without UI lag",
    ],
    techUsed: ["React", "TypeScript", "Next.js", "Tailwind CSS", "JavaScript"],
  },
  {
    id: "exp-2",
    company: "Tatvasoft",
    role: ".NET Intern",
    period: "June 2025 - July 2025",
    location: "Ahmedabad",
    website: "https://drive.google.com/file/d/1mR9WLzTPVYsgz1LYDGY6lzXs3Dex1mP-/view?usp=drive_link",
    highlights: [
      "Integrated TradingView Advanced Charting Library to provide interactive financial charts with technical indicators",
      "Developed and optimized a real-time trading platform using React, TypeScript, and WebSockets for high-frequency data updates",
      "Implemented a docking layout using Dockview, allowing all trading components to be draggable, resizable, and organized within dockable panels",
    ],
    techUsed: ["React", "TypeScript", "WebSockets", "TradingView", "Dockview"],
  },
  {
    id: "exp-3",
    company: "ShadowFox",
    role: "Java Developer",
    period: "May 2025 - June 202s",
    location: "Remote",
    website: "https://drive.google.com/file/d/1Iq4xHKT5qWv8o9owH3A2hG6UsSD6vjjL/view?usp=drive_link",
    highlights: [
      "Led frontend architecture decisions, improving scalability and development efficiency",
      "Reduced engineering workload by 20% by building a production-ready React & React Native boilerplate",
      "Improved website load time by 30% through bundle optimization and performance tuning",
      "Designed a WebSocket-based real-time chat system with PDF sharing",
      "Enabled large file uploads (100GB+) with automated retry and failure recovery",
    ],
    techUsed: ["React", "React Native", "TypeScript", "WebSockets", "Node.js"],
  },

];
