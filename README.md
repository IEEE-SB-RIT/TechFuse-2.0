# TechFuse 2.0

Official repository for IEEE SPS SBC RIT TechFuse 2.0 — a modern, TypeScript-first web application and event platform maintained by IEEE SPS SBC RIT.

## Table of contents

- [About](#about)
- [Features](#features)
- [Tech stack & repo composition](#tech-stack--repo-composition)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Local setup](#local-setup)
  - [Available scripts](#available-scripts)
- [Development workflow](#development-workflow)
- [Project structure](#project-structure)
- [Deployment](#deployment)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## About

TechFuse 2.0 is the official codebase for the IEEE SPS SBC RIT TechFuse event website and tooling. The repo contains the front-end web application (built with TypeScript) and auxiliary scripts used to drive content, build pipelines, and event operations.

Repository description: "IEEE SPS SBC RIT TechFuse 2.0 Official Github Repository"

## Features

- Event website with schedule, speakers, and registration pages
- Responsive, accessible UI components
- Content driven by typed data models (TypeScript)
- Build and deploy scripts for production hosting
- Local development server with hot reload

## Tech stack & repo composition

Primary technologies used in this repository:

- TypeScript — primary language for UI and logic
- CSS — styling and layouts
- Python — small scripts/tools (data ingestion, automation)
- JavaScript — some legacy or interop code

Language composition (approximate):
- TypeScript: 94%
- CSS: 3.9%
- Python: 1.4%
- JavaScript: 0.7%

## Getting started

### Prerequisites

- Node.js (LTS) — 16.x or later recommended
- npm (or yarn/pnpm) — matching your preferred package manager
- git — for cloning and contributing
- (Optional) Python 3.8+ for auxiliary scripts

### Local setup

1. Clone the repository
   ```
   git clone https://github.com/IEEE-SB-RIT/TechFuse-2.0.git
   cd TechFuse-2.0
   ```

2. Install dependencies
   ```
   npm install
   # or
   # yarn install
   # pnpm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

4. Open your browser at http://localhost:3000 (or the port printed by the dev server).

### Available scripts

Common npm scripts you will likely see in this project (adjust names if the repo uses different ones):

- npm run dev — start local dev server with hot reload
- npm run build — build production assets
- npm run start — run production build locally
- npm run lint — run static analysis / linters
- npm run format — format codebase (Prettier or equivalent)
- npm run test — run unit and integration tests

Check package.json for an exact list of scripts and their definitions.

## Development workflow

- Work on feature branches named like `feat/<short-description>` or `fix/<short-description>`.
- Create small, focused pull requests with descriptive titles and context.
- Ensure typings and lints pass locally before opening a PR.
- Add or update tests for new functionality.
- When ready, open a pull request targeting `main` (or the repository's default branch) and request reviews.

If your change affects public-facing copy, assets, or event data, note whether any stakeholders (event organizers) need to review.

## Project structure

A typical layout:

- /src — TypeScript application source
  - /components — UI components
  - /pages — route/page components
  - /styles — global and component styles
  - /utils — utility helpers and types
- /public — static assets (images, favicon, etc.)
- /scripts — small utilities or automation (may contain Python)
- package.json — scripts and dependency config
- tsconfig.json — TypeScript configuration
- README.md — this file

Adjust paths and folder names to match the repository's exact structure.

## Deployment

Deployment will depend on your hosting choice (Vercel, Netlify, GitHub Pages, Firebase, or a custom host). Common steps:

1. Build production assets:
   ```
   npm run build
   ```

2. Deploy the `build` or `dist` output to your hosting provider following their instructions.

If using continuous deployment (recommended), connect the repository to your hosting provider and ensure the build command and publish directory are configured correctly.



## Contact

Maintainers: IEEE SPS SBC RIT  
Repository: https://github.com/IEEE-SB-RIT/TechFuse-2.0

For event or repository-specific inquiries, open an issue or reach out to the maintainers listed on the GitHub organization/team pages.

## Acknowledgements

- IEEE SPS SBC RIT contributors and volunteers
- Open source projects and libraries used throughout the codebase
