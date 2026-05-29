# Jeel Patel - Developer Portfolio & Blog

This is my personal portfolio website and blog, built using Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript, and Framer Motion. 

The site features a modern, responsive single-page homepage alongside a markdown-based blog that generates static pages at build time. It also integrates production security headers, source map suppression, and client-side anti-copy safeguards.

---

## Features

*   **Responsive Bento Grid Layout**: The homepage uses CSS Bento Grid layouts with interactive micro-animations and custom timeline components.
*   **Starfield Background**: A custom particle-based starfield canvas that animates smoothly in the background.
*   **Static Blog System**: Powered by a unified, remark, and rehype parser pipeline. It reads markdown files from the local directory and includes custom callouts, light/dark theme toggling, a reading progress bar, and a sticky table of contents.
*   **Automatic Image Pipeline**: A pre-development and pre-build script that converts high-resolution raw mobile images (.heic, .png, .jpg) in the profile folder to WebP to ensure fast page loads.
*   **Production Security & Deterrents**:
    *   **Security Headers**: Customized Next.js response headers (including X-Frame-Options, X-Content-Type-Options, Referrer-Policy, and XSS Protection).
    *   **Disabled Source Maps**: Browser source mapping is disabled in production to keep core codebase private.
    *   **Copy & Inspect Protection**: A global client-side hook that prevents right-clicking, text copying, and common browser inspection keyboard shortcuts (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S) while clearing the console to discourage simple site cloning.

---

## Tech Stack

*   **Framework**: Next.js 16 (using App Router and Turbopack)
*   **Frontend Library**: React 19
*   **Styling**: Tailwind CSS v4 and CSS variables
*   **Animation**: Framer Motion 12
*   **Language**: TypeScript 5
*   **Icon Library**: Lucide React
*   **Markdown Parsing**: Unified, Remark, Rehype, and Gray-matter
*   **Image Processing**: Sharp and Heic-convert

---

## Directory Structure

```text
├── content/
│   └── blog/                 # Markdown (.md) blog posts with YAML frontmatter
├── public/
│   ├── profile/              # Drop raw portfolio photos here (auto-converts to WebP)
│   └── og-image.png          # Open Graph social preview image
├── scripts/
│   └── convert-images.mjs    # HEIC/PNG/JPG to WebP conversion script
├── src/
│   ├── app/                  # App Router configurations and page layouts
│   ├── components/
│   │   ├── blog/             # Blog UI components (TOC, theme toggle, cards)
│   │   ├── effects/          # StarField, CursorFollower, and AntiCopy effects
│   │   ├── sections/         # Homepage sections (Hero, About, Projects, etc.)
│   │   └── ui/               # Reusable buttons, Navbar, and Footer
│   ├── data/                 # Static content configuration files
│   ├── lib/                  # Blog parsing, image helpers, and motion settings
│   └── types/                # TypeScript interface definitions
├── next.config.ts            # Next.js config with secure HTTP headers
└── package.json
```

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
Starts the local server on `http://localhost:3001` and runs the pre-development script to convert profile images:
```bash
npm run dev
```

### 3. Build for Production
Validates TypeScript, lint rules, and builds the application for production deployment with source maps disabled:
```bash
npm run build
```

### 4. Code Quality Linting
Runs the ESLint code quality checks:
```bash
npm run lint
```

---

## Content Management

### Modifying Portfolio Content
All homepage content is loaded dynamically from configuration files. You can customize your bio, contact info, experiences, projects, or skills by editing these files:
*   `src/data/personal.ts` (Contact information, social profiles, bio, and resume URL)
*   `src/data/experience.ts` (Internship timeline and career history)
*   `src/data/education.ts` (Degrees, GPAs, and certificates)
*   `src/data/projects.ts` (Project descriptions and links)
*   `src/data/skills.ts` (List of technologies and skill sections)

### Publishing Blog Posts
To add a new blog post, create a markdown file under `content/blog/` with a valid YAML frontmatter block:

```yaml
---
title: "How to Build a Secure Next.js App"
slug: "secure-next-js-app"
date: "2026-05-29"
description: "A deep dive into setting up production security headers and source map suppression."
tags: ["NextJS", "Security", "WebDev"]
published: true
---

Write your markdown content here...
```

---

## Contact

*   **Developer**: Jeel Patel
*   **Role**: Full Stack Developer Intern
*   **Location**: Surat, Gujarat, India
*   **Email**: [dev.jeelpatel@gmail.com](mailto:dev.jeelpatel@gmail.com)
*   **GitHub**: [@dev-jeelpatel](https://github.com/dev-jeelpatel)
*   **LinkedIn**: [Jeel Patel](https://www.linkedin.com/in/jeelpatel48)
