# Syrine Smati — Portfolio

Personal portfolio site showcasing projects, skills, education, and experience. Built with React, TypeScript, Vite, and Tailwind CSS.

Live at [syrinesmati-portfolio.vercel.app](https://syrinesmati-portfolio.vercel.app/).

## Stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) (Radix primitives)
- [React Router](https://reactrouter.com/) for client-side routing
- [Framer Motion](https://www.framer.com/motion/) for animations
- English/French language toggle and light/dark theme toggle, both persisted to `localStorage`

## Getting started

Requires Node.js and npm.

```sh
npm install
npm run dev
```

## Scripts

- `npm run dev` — start the Vite dev server
- `npm run build` — production build
- `npm run build:dev` — development-mode build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

## Project structure

- `src/components` — page sections (Hero, About, Skills, Experience, Projects, Contact, etc.)
- `src/pages` — routed pages (`Index`, `ProjectDetail`, `NotFound`)
- `src/data/projects.ts` — single source of truth for project content (EN/FR) shared by the projects grid and project detail pages
- `src/contexts` — `LanguageContext` and `ThemeContext` providers
- `src/assets` — images, videos, and documents (CVs) used across the site
