# Portfolio Redesign Phased Execution Plan

Date: 2026-06-18

## Confirmed Direction

Build a one-page, light-first portfolio using `docs/prototypes/portfolio-style-03-visual-dossier.html` as the selected visual direction. The site should combine:

- Josh W. Comeau-style purposeful micro-interactions and human personality.
- Brittany Chiang-style content clarity, accessibility, and strong hierarchy.
- Awwwards/Godly-inspired large typography, editorial spacing, graphic framing, and polished transitions.

The site should stay fast, maintainable, and focused on career signal. Motion should support comprehension and delight, not hide weak content or create scroll friction. The final experience should feel like a personal visual dossier, not a product landing page.

## Confirmed Inputs

- Resume source: `https://drive.google.com/drive/folders/13z1tyWNGUNsHO6Vl35ECYmEJZmmpJI4t?usp=drive_link`
- Hashnode: `https://pranayyadav.hashnode.dev/`
- LinkedIn: `https://www.linkedin.com/in/pranayyadav02/`
- Featured projects:
  - Devkit
  - Synaptics
  - ConverseX
  - Flowify
  - Stonkify
- Runtime target: Node `20.9+`
- Framework target: latest compatible Next.js and React.
- Selected prototype: `portfolio-style-03-visual-dossier.html`
- Dedicated implementation plan: `docs/plans/2026-06-18-visual-dossier-implementation-plan.md`

## Deferred Inputs

These should not block layout, component, or upgrade work, but they are needed before final content polish:

- Live URL for each featured project.
- GitHub URL for each featured project if public.
- One-sentence impact summary for each project.
- Problem, role, stack, and outcome details for each project.
- Final screenshots or product images for each project.
- Preferred current role/title.
- Current availability/status line.
- Preferred email address.

## Execution Principles

- Keep the redesign one-page for the initial release.
- Follow the Visual Dossier prototype as the design source of truth.
- Avoid speculative features and heavy visual libraries.
- Upgrade dependencies in a separate phase before major UI rewrites.
- Use static/curated content first where platform APIs are unreliable.
- Prefer environment/config values for frequently changing external URLs.
- Verify at each phase before moving on.

## Phase 0: Baseline Audit

### Goal

Capture the current state before changing dependencies or redesigning pages.

### Tasks

- Check current Node and npm versions.
- Run current lint and build.
- Record existing failures separately from new failures.
- Review current data files for projects, experience, skills, and social links.
- Identify components that can be reused versus replaced.
- Confirm whether old routes can remain temporarily during migration.

### Expected Files To Inspect

- `package.json`
- `package-lock.json`
- `pages/index.tsx`
- `pages/about.tsx`
- `pages/projects.tsx`
- `pages/experience.tsx`
- `components/`
- `data/`
- `styles/globals.css`
- `tailwind.config.ts`

### Verification

- Baseline `npm run lint` result captured.
- Baseline `npm run build` result captured.
- Known pre-existing issues listed if either command fails.

### Exit Criteria

We know whether the current app is already healthy, and any later breakage can be attributed to a specific phase.

## Phase 1: Dependency and Platform Upgrade

### Goal

Move the project onto the latest compatible framework/library versions before redesign work begins.

### Tasks

- Confirm Node is `20.9+`.
- Verify latest package versions during implementation.
- Upgrade core packages:
  - `next`
  - `react`
  - `react-dom`
  - `@types/react`
  - `@types/react-dom`
  - `eslint-config-next`
- Upgrade support/UI packages:
  - Radix packages
  - `lucide-react`
  - `framer-motion` or current replacement package if needed
  - `class-variance-authority`
  - `clsx`
  - `tailwind-merge`
  - `usehooks-ts`
- Decide Tailwind path:
  - Preferred initial path: keep Tailwind 3 if Tailwind 4 migration would slow the redesign.
  - Upgrade Tailwind separately only if compatibility is clear.
- Update lockfile.
- Resolve framework deprecations and lint/build issues.

### Verification

- `npm install`
- `npm run lint`
- `npm run build`

### Exit Criteria

The existing app builds on upgraded dependencies, or blockers are documented with exact package/version causes.

## Phase 2: Content Model and Data Layer

### Goal

Create a clean content structure that supports the one-page portfolio without hardcoding everything inside JSX.

### Tasks

- Create or update a central profile/content data module.
- Add confirmed external URLs:
  - Resume Drive folder URL.
  - Hashnode profile URL.
  - LinkedIn profile URL.
- Model featured projects with placeholders for deferred fields.
- Model writing entries with a pragmatic source strategy.
- Model contact/social links.
- Model experience entries with impact-oriented fields.

### Proposed Data Shape

```ts
type FeaturedProject = {
  name: string;
  summary: string;
  problem?: string;
  role?: string;
  outcome?: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
};

type WritingItem = {
  title: string;
  platform: 'Hashnode' | 'LinkedIn';
  url: string;
  publishedAt?: string;
  excerpt?: string;
};
```

### Resume Strategy

- Store the resume URL in `NEXT_PUBLIC_RESUME_URL`.
- Use the confirmed Google Drive folder URL as the first value.
- Render the CTA as an external link.
- Do not commit resume PDFs.
- Add Google Drive API integration only if public linking is not enough.

### Writing Strategy

- Hashnode: attempt RSS/public feed or public API during implementation.
- LinkedIn: start with curated public post/profile links unless a reliable public feed is available.
- Display a maximum of 3-4 writing cards on the homepage.
- Keep manual fallback data so the site does not break if fetching fails.

### Verification

- TypeScript accepts the content model.
- Missing project details render as graceful placeholders during development.
- Resume, Hashnode, and LinkedIn links open correctly.

### Exit Criteria

The homepage can be built from structured content data, with project details safely incomplete until the user provides final copy/assets.

## Phase 3: Design System Foundation

### Goal

Establish the visual system before rebuilding sections.

### Tasks

- Add font setup:
  - Preferred: `Archivo` for headings.
  - Preferred: `IBM Plex Mono` for metadata/body.
  - Fallback: `Space Grotesk` only if mono body copy feels too rigid in implementation.
- Define light-first tokens:
  - Background
  - Foreground
  - Muted text
  - Surface
  - Border
  - Accent
- Use the Visual Dossier palette:
  - `#f6f6f1`
  - `#0e0e0c`
  - `#66665f`
  - `#d9d9ce`
  - `#ffffff`
  - `#214cff`
- Update global CSS for:
  - Base typography
  - Smooth anchor scrolling
  - Selection color
  - Focus-visible styles
  - Reduced-motion behavior
- Decide whether to keep the existing theme provider:
  - Preferred: simplify to light-first for initial release.
  - Keep only if removing dark mode creates more churn than value.
- Create shared layout primitives:
  - `Section`
  - `SectionHeader`
  - `Container`
  - `AnimatedLink`

### Verification

- Homepage renders with final fonts and base tokens.
- Focus states are visible.
- Reduced motion preference is respected.
- No horizontal scroll at 375px.

### Exit Criteria

All later components can use the same spacing, type, color, and focus rules.

## Phase 4: One-Page Information Architecture

### Goal

Replace the current multi-page feeling with a cohesive single-scroll portfolio.

### Section Order

1. Navigation
2. Hero / Intro Dossier
3. Work / Project Records
4. Info / About, Stack, Experience
5. Writing / Public Trail
6. Contact

### Tasks

- Convert homepage into the primary portfolio experience.
- Add sticky or minimally fixed navigation with anchor links.
- Use semantic section IDs:
  - `#work`
  - `#info`
  - `#writing`
  - `#contact`
- Keep old routes only if needed temporarily, but do not design around them.
- Update metadata and Open Graph content for the one-page site.

### Verification

- Anchor navigation works.
- Keyboard tab order follows visual order.
- First viewport clearly communicates who Pranay is and what action to take.
- Contact/resume CTAs are reachable from top and bottom of the page.

### Exit Criteria

The site reads as a single coherent portfolio instead of a set of separate pages.

## Phase 5: Section Implementation

### Goal

Build each homepage section with final layout structure and placeholder-safe content.

### Hero

Tasks:
- Add name, role, positioning statement, availability/status, and CTAs.
- Include playful microcopy or a small interactive detail.
- Keep first viewport balanced so the next section is visible.

Verification:
- Hero works at 375px, 768px, 1024px, and 1440px.
- Primary CTA scrolls to work.
- Resume CTA opens the configured resume URL.

### Featured Work

Tasks:
- Build five featured project cards for Devkit, Synaptics, ConverseX, Flowify, and Stonkify.
- Use the Visual Dossier gallery pattern, not generic cards:
  - Large records span wider columns.
  - Small records create asymmetry.
  - Visual areas look like dossier evidence, screenshots, or diagrams.
- Use placeholder-safe fields for missing URLs, images, and impact copy.
- Favor project records over dense lists or product cards.
- Add hover/focus states for links and cards.

Verification:
- Missing project assets do not create broken images.
- Cards remain readable without hover.
- Project links are disabled or hidden when URLs are not available.

### Experience

Tasks:
- Rework current experience into an impact-first timeline/list.
- Keep company, role, date range, tech, and 2-4 concise bullets per role.
- Reduce visual noise from icons and repeated dividers.

Verification:
- Experience is scannable in under 30 seconds.
- Bullets emphasize outcomes where data exists.

### About

Tasks:
- Replace expandable long copy with a tighter narrative.
- Keep personality, but tie it back to engineering values.
- Avoid hidden “show more” content for core identity.

Verification:
- About section is readable without interaction.
- Copy stays concise on mobile.

### Tech Stack

Tasks:
- Group skills by category instead of a broad tag cloud.
- Show current strengths first.
- Keep visual treatment restrained.

Verification:
- Categories are understandable without tooltips.
- Tags wrap cleanly on small screens.

### Writing

Tasks:
- Add cards for Hashnode and LinkedIn writing.
- Use the Hashnode URL as the primary writing source.
- Use LinkedIn as a social/writing source with curated profile or post links.
- Keep the section short.

Verification:
- External links are accessible.
- Empty/unavailable feed states are handled.
- Homepage does not become blog-heavy.

### Contact

Tasks:
- Add final CTA with email, LinkedIn, GitHub, and resume.
- Keep the section direct and easy to act on.

Verification:
- All links work.
- Resume URL opens externally.
- Email link uses the final preferred email once provided.

### Exit Criteria

All one-page sections exist, are responsive, and support the confirmed content strategy.

## Phase 6: Motion and Interaction Polish

### Goal

Add motion after the layout works, so animation supports a stable design.

### Tasks

- Add hero text reveal.
- Add section reveal on scroll.
- Add project card hover/focus transitions.
- Add subtle parallax only where it improves visual depth.
- Add link/button micro-interactions.
- Add reduced-motion alternatives.

### Constraints

- Use `transform` and `opacity`.
- Avoid animating layout properties.
- Avoid scroll hijacking.
- Keep interactions usable with keyboard and touch.
- Do not add heavy 3D/WebGL unless a specific section needs it.

### Verification

- `prefers-reduced-motion` disables or simplifies animation.
- Mobile scrolling remains native and smooth.
- Hover-only details are also available through focus or visible text.

### Exit Criteria

The site feels polished without becoming animation-dependent.

## Phase 7: Responsive, Accessibility, and SEO Pass

### Goal

Make the finished one-page portfolio robust across devices and assistive usage.

### Tasks

- Test breakpoints:
  - 375px
  - 768px
  - 1024px
  - 1440px
- Verify semantic landmarks.
- Verify heading hierarchy.
- Verify focus order.
- Verify focus-visible styles.
- Verify image alt text.
- Verify external link labels.
- Update metadata:
  - Title
  - Description
  - Open Graph title
  - Open Graph description
  - Open Graph image if available
- Update README if setup changes.

### Verification

- `npm run lint`
- `npm run build`
- Manual keyboard navigation.
- Manual responsive inspection.

### Exit Criteria

The portfolio is ready for deployment review.

## Phase 8: Final Content Replacement

### Goal

Replace placeholders with final project and writing details once provided.

### Tasks

- Add final project screenshots/images.
- Add project live URLs.
- Add GitHub URLs where public.
- Add impact summaries and outcome copy.
- Add final writing post links or feed output.
- Add final preferred email.
- Add final availability/status line.

### Verification

- No placeholder copy remains.
- No broken links.
- No broken images.
- Project cards have consistent content depth.

### Exit Criteria

The portfolio can be shipped publicly.

## Suggested Work Order

1. Phase 0: Baseline Audit
2. Phase 1: Dependency and Platform Upgrade
3. Phase 2: Content Model and Data Layer
4. Phase 3: Design System Foundation
5. Phase 4: One-Page Information Architecture
6. Phase 5: Section Implementation
7. Phase 6: Motion and Interaction Polish
8. Phase 7: Responsive, Accessibility, and SEO Pass
9. Phase 8: Final Content Replacement

## Risk Register

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Latest Next.js upgrade introduces breaking changes | Medium | Upgrade before redesign and verify with lint/build |
| Tailwind 4 migration slows redesign | Medium | Keep Tailwind 3 initially unless upgrade is straightforward |
| Google Drive folder link is not ideal for direct resume CTA | Medium | Use stable redirect or direct file share link if needed |
| LinkedIn writing is hard to fetch programmatically | Medium | Start with curated links |
| Project assets arrive late | Low | Build placeholder-safe project cards |
| Motion hurts mobile performance | Medium | Add motion late, test mobile, respect reduced motion |

## Definition of Done

- One-page portfolio is implemented.
- Light-first design is polished.
- Playful but professional tone is reflected in copy and interactions.
- Featured projects are shown: Devkit, Synaptics, ConverseX, Flowify, Stonkify.
- Resume CTA uses the dynamic external source.
- Writing section includes Hashnode and LinkedIn.
- Site passes lint and build.
- Responsive QA is complete.
- Keyboard navigation and reduced-motion behavior are verified.
- No final placeholders remain, except project details explicitly deferred by the user.
