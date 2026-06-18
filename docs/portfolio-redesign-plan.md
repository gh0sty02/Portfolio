# Portfolio Redesign Plan

Date: 2026-06-18

## Goal

Redesign the portfolio into a polished, modern developer portfolio that feels editorial and interactive without becoming heavy or hard to maintain. The site should present Pranay Yadav as a full-stack engineer with strong product sense, accessible UI craft, and real production experience.

## Assumptions

- The primary audience is recruiters, hiring managers, founders, and engineering leads.
- The site should remain fast, accessible, and easy to update.
- The portfolio should emphasize selected work and career signal over decorative effects.
- The implementation should keep the existing Next.js project unless the redesign benefits clearly from an App Router migration.
- Dependency upgrades should happen in a separate implementation step from visual redesign so regressions are easier to isolate.
- The final portfolio should be a one-page experience.
- The tone should be playful but professional.
- The visual system should be light-first.
- The site should include a writing/blog section.
- The site should include a downloadable resume link.
- The project can require Node `20.9+` to target the latest Next.js version.

## Inspiration Synthesis

### Josh W. Comeau

Borrow:
- Playful but purposeful micro-interactions.
- Content that feels teachable, human, and technically confident.
- Clear category browsing and discoverable writing/project links.
- Motion used to explain hierarchy, not just decorate.

Avoid:
- Copying the blog-heavy structure unless writing becomes a primary portfolio goal.
- Overloading the homepage with many content categories.

### Brittany Chiang

Borrow:
- Sharp content hierarchy: role, about, experience, projects, writing/contact.
- Accessible, keyboard-friendly layout.
- Dense but readable experience and project sections.
- Strong use of typography, spacing, and restrained color.

Avoid:
- Recreating the exact dark teal visual language.
- Making the redesign too static if the goal is a more current Awwwards/Godly direction.

### Awwwards / Godly / Richard Ekwonye

Borrow:
- Large type, light editorial layouts, parallax, transitions, and scroll animation.
- A visual-first project section with strong art direction.
- Spacious layouts that make each project feel intentionally selected.

Avoid:
- Scroll hijacking.
- Heavy WebGL or animation layers that hurt Core Web Vitals.
- Abstract visuals that do not explain the work.

## Design Direction

The selected direction is **Visual Dossier Portfolio**, based on `docs/prototypes/portfolio-style-03-visual-dossier.html`.

Detailed implementation plan: `docs/plans/2026-06-18-visual-dossier-implementation-plan.md`.

The direction should keep:

- Light-first, monochrome base.
- One decisive accent color.
- Large, confident type.
- Framed editorial layouts.
- Selected motion moments.
- Dossier-style project records.
- Personal, playful details within professional copy.

The site should feel closer to a well-designed product engineer portfolio than a generic template.

## Design System

### Visual Style

- Base: light-first theme.
- Background: warm near-white or neutral white.
- Text: near-black for primary content, muted zinc/slate for supporting text.
- Accent: blue by default, with possible alternatives after brand preference is confirmed.
- Border style: thin, visible neutral borders.
- Radius: restrained, mostly 8px or less.
- Cards: only for repeated project/work items, not every section.

Recommended starting tokens:

```css
--background: #fafafa;
--foreground: #09090b;
--muted: #52525b;
--surface: #ffffff;
--border: #e4e4e7;
--accent: #2563eb;
--accent-foreground: #ffffff;
```

### Typography

Selected pairing from the Visual Dossier prototype:

- Headings: `Archivo`
- Body/metadata: `IBM Plex Mono`

Fallback option:

- Body: `Space Grotesk` only if mono body copy feels too rigid during implementation.

Typography rules:

- Homepage hero uses large type, but should still reveal the next section in the first viewport.
- No negative letter spacing.
- Body copy should stay readable at 16-18px with generous line height.
- Section labels should use compact uppercase mono text.

### Motion

Use motion as hierarchy and feedback:

- Hero text entrance: short staggered reveal.
- Project cards: image hover, metadata reveal, soft border/accent transition.
- Section reveals: Intersection Observer or Framer Motion `whileInView`.
- Page transitions: optional, only if route structure remains multi-page.
- Parallax: subtle project imagery or section background movement, not full scroll replacement.

Motion constraints:

- Respect `prefers-reduced-motion`.
- Animate only `transform` and `opacity` where possible.
- Avoid scroll hijacking.
- Keep animation duration mostly between 150ms and 500ms.

## Information Architecture

Preferred structure: a strong single-page homepage. Supporting routes are not part of the initial redesign unless needed later for project case studies or writing detail pages.

### Homepage Sections

1. Hero
   - Name, role, concise positioning statement.
   - Primary CTA: view projects.
   - Secondary CTA: contact or resume.
   - Small availability/status line.

2. Featured Work
   - 5 selected projects.
   - Each project should show problem, outcome, role, stack, and links.
   - Use large visual cards, alternating layout, and hover metadata.
   - Featured projects: Devkit, Synaptics, ConverseX, Flowify, Stonkify.

3. Experience
   - Timeline/list inspired by Brittany Chiang.
   - Focus on impact bullets rather than responsibilities.
   - Include company, role, duration, tech, and 2-4 strongest outcomes.

4. About
   - Short, specific narrative.
   - Keep personality, but prioritize engineering identity.
   - Include what kinds of problems you like solving.

5. Tech Stack
   - Group by frontend, backend, tooling, and cloud.
   - Avoid long undifferentiated tag clouds.

6. Writing / Notes
   - Pull from existing Hashnode and LinkedIn writing.
   - Show recent posts with title, platform, date, short excerpt, and outbound link.

7. Contact
   - Email, GitHub, LinkedIn, resume.
   - Clear final CTA.

### Supporting Routes

- No separate About, Projects, or Experience pages in the initial redesign.
- Optional later: individual project case-study pages if a featured project needs more detail.
- Optional later: writing detail pages if blog content becomes substantial.

## Component Plan

Likely components:

- `Hero`
- `Section`
- `DossierFrame`
- `DossierNav`
- `HeroDossier`
- `ProjectRecord`
- `ProjectGallery`
- `InfoPanel`
- `WritingPanel`
- `ContactLinks`
- `AnimatedLink`
- `ThemeToggle`
- `MotionProvider`

Implementation should reuse existing local UI primitives where they still fit. Replace rather than extend components that encode the current visual style too tightly.

## Content Requirements

Before implementation, confirm or prepare:

- Updated role/title.
- Current availability or job-search status.
- Dynamic resume source.
  - Confirmed source: `https://drive.google.com/drive/folders/13z1tyWNGUNsHO6Vl35ECYmEJZmmpJI4t?usp=drive_link`
  - Preferred approach: keep this stable Google Drive link, or a file ID/redirect if direct linking becomes cleaner, and render the resume CTA from configuration/env.
  - If the site needs metadata or preview details, add a small server-side fetch layer later.
  - Avoid committing resume PDFs to the repo if the resume changes frequently.
- Preferred email and social links.
- Featured projects:
  - Devkit
  - Synaptics
  - ConverseX
  - Flowify
  - Stonkify
- For each featured project:
  - One-sentence summary.
  - Problem solved.
  - Your role.
  - Outcome/impact.
  - Stack.
  - Live URL.
  - GitHub URL if public.
  - Best screenshot or product image.
- Writing sources:
  - Hashnode: `https://pranayyadav.hashnode.dev/`
  - LinkedIn: `https://www.linkedin.com/in/pranayyadav02/`
- Experience entries with measurable impact where possible.

## Dynamic Content Plan

### Resume

The resume should not be treated as a static repo asset. Since it changes frequently, the portfolio should link to a stable external source.

Recommended implementation:

- Store `NEXT_PUBLIC_RESUME_URL` as an environment variable.
- Point it to `https://drive.google.com/drive/folders/13z1tyWNGUNsHO6Vl35ECYmEJZmmpJI4t?usp=drive_link`, or a lightweight redirect URL that you can update without code changes.
- Use the CTA label `Resume` or `View Resume`.
- Open in a new tab and make the link accessible with clear text.

Optional later enhancement:

- Use the Google Drive API only if we need to fetch file metadata or handle private access.
- Keep OAuth/API work out of the initial redesign unless the resume cannot be public.

### Writing

The writing section should aggregate public posts from Hashnode and LinkedIn.

Recommended implementation:

- Hashnode: use RSS or public GraphQL/API if available for the profile.
- LinkedIn: link to selected public posts manually unless a reliable public feed is available.
- Start with a curated data file if platform APIs are unreliable, then automate later.
- Show 3-4 entries max on the homepage to avoid turning the portfolio into a blog index.

## Library Upgrade Plan

Current repo already uses:

- Next.js `^15.1.6`
- React `^19.0.0`
- Tailwind CSS `^3.4.19`
- Framer Motion `^11.16.0`

Verified latest via npm registry/web where available on 2026-06-18:

- Next.js latest: `16.2.9`
- React latest: `19.2.7`

Network access for local `npm view` was restricted during planning, so remaining package versions should be verified during implementation before editing `package.json`.

Upgrade strategy:

1. Baseline current app
   - Run lint/build before dependency changes.
   - Record any existing failures separately.

2. Upgrade framework packages
   - Upgrade `next`, `react`, `react-dom`, and matching React type packages.
   - Use Node `20.9+` so the latest Next.js target is acceptable.

3. Upgrade UI/support packages
   - Radix packages.
   - `lucide-react`.
   - `framer-motion` or migrate to `motion` package if current ecosystem expectations require it.
   - `tailwind-merge`, `class-variance-authority`, `clsx`, `usehooks-ts`.

4. Decide Tailwind path
   - Conservative: stay on Tailwind 3 if the goal is a quicker redesign.
   - Modernization: migrate to Tailwind 4 if plugin/config compatibility is acceptable.

5. Verify
   - `npm install`
   - `npm run lint`
   - `npm run build`
   - Manual responsive pass at 375px, 768px, 1024px, and 1440px.

## Implementation Phases

### Phase 1: Content and Design Foundation

Success criteria:
- Design tokens established.
- Fonts selected.
- Homepage section order finalized.
- Project data shape defined.
- Featured-project shortlist captured.
- Resume source strategy confirmed.
- Hashnode and LinkedIn profile URLs confirmed.

### Phase 2: Dependency Upgrade

Success criteria:
- Latest compatible Next.js/React installed.
- Lockfile updated.
- Build passes or any framework migration blockers are documented.

### Phase 3: Homepage Redesign

Success criteria:
- New hero, featured work, experience, about, stack, writing, and contact sections implemented.
- Mobile and desktop layouts are stable.
- No content hidden behind navigation.

### Phase 4: Motion and Polish

Success criteria:
- Motion respects reduced-motion preferences.
- Project cards have clear hover/focus states.
- Keyboard navigation remains usable.
- Core content works without relying on decorative animation.

### Phase 5: Final Verification

Success criteria:
- Lint/build pass.
- Responsive QA complete.
- Light-first theme checked for contrast and visual polish.
- Images have useful alt text.
- Metadata and Open Graph content updated.

## Accessibility and Performance Rules

- Use semantic landmarks: `header`, `nav`, `main`, `section`, `footer`.
- Preserve visible focus states.
- Keep touch targets at least 44px.
- Use optimized `next/image` assets for project visuals.
- Avoid layout shift by reserving image dimensions.
- Lazy-load below-the-fold imagery.
- Do not use color alone to communicate state.
- Keep decorative motion disabled or simplified for reduced-motion users.

## Open Questions

1. For each featured project, what are the live URL, GitHub URL, strongest screenshot, and one-sentence impact summary?
2. What is the preferred current role/title and availability/status line?
3. What is the preferred public email address for contact CTAs?
