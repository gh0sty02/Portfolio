# Visual Dossier Portfolio Implementation Plan

Date: 2026-06-18

## Selected Direction

Use `docs/prototypes/portfolio-style-03-visual-dossier.html` as the source direction for the portfolio redesign.

This direction is a **visual dossier**: a framed, editorial, image-led portfolio that reads like a set of records rather than a product landing page. It should feel personal, structured, and graphic without becoming a SaaS homepage or a generic project grid.

## Design Intent

### What To Preserve

- Framed page layout with left/right border rails.
- Light background with black/near-black text and thin neutral lines.
- Large Archivo headlines.
- IBM Plex Mono-style metadata and supporting text.
- One-page layout.
- Dossier language: records, field notes, info, public trail.
- Strong visual project gallery using asymmetric `large` and `small` records.
- Compact personal/info panels instead of long marketing copy.

### What To Improve During Implementation

- Replace placeholder portrait block with a real personal visual, workspace image, abstract mark, or generated bitmap.
- Improve project visual handling for Devkit and Synaptics once assets arrive.
- Add purposeful hover/focus states to project records.
- Add subtle scroll reveal and image movement without scroll hijacking.
- Make the mobile layout feel intentional, not just stacked.
- Replace placeholder contact email and role/status copy.

### What To Avoid

- Product-site hero CTAs.
- Metric cards.
- Pricing/feature-card patterns.
- Overly rounded SaaS cards.
- Heavy 3D or WebGL in the initial implementation.
- Dark theme as the default.
- Long resume-style experience dumps.

## Visual System

### Colors

Use the prototype palette as the base:

```css
--bg: #f6f6f1;
--ink: #0e0e0c;
--muted: #66665f;
--line: #d9d9ce;
--paper: #ffffff;
--accent: #214cff;
```

Implementation notes:

- `--bg` is the body background and page field.
- `--paper` is used for project records.
- `--line` must stay visible but subtle.
- `--accent` is reserved for section indexes, focus, and a few active states.
- Avoid introducing many extra accent colors unless project imagery needs them.

### Typography

Use:

- Headings: `Archivo`
- Metadata/body: `IBM Plex Mono`

Rules:

- Large headings should remain the primary visual personality.
- Body text should stay compact and factual.
- Section labels use uppercase mono text.
- Do not use negative letter spacing.
- Keep line height tight for headings and readable for paragraph text.

### Layout

Core layout:

- Outer `.frame` wrapper with max width around `1240px`.
- Left and right frame borders.
- Section rows separated by `1px` borders.
- Hero is two columns on desktop:
  - Main headline/copy column.
  - Side dossier card with visual and facts.
- Project records use a 12-column gallery:
  - Large records span 7 columns.
  - Small records span 5 columns.
  - All records stack on mobile.

## Information Architecture

Final one-page order:

1. Navigation
2. Hero / Intro Dossier
3. Work / Project Records
4. Info / About, Stack, Experience
5. Writing / Public Trail
6. Contact

## Content Mapping

### Hero

Purpose:

- Establish identity and taste immediately.
- Avoid conversion copy.

Content:

- Title: `Selected work and field notes.`
- Supporting copy should explain Pranay as a full-stack engineer who builds interfaces, APIs, and dependable product systems.
- Side visual should include one personal image/mark and metadata rows:
  - Role
  - Focus
  - Resume

### Work

Featured projects:

- Devkit
- Synaptics
- ConverseX
- Flowify
- Stonkify

Record format:

- Project name.
- One-paragraph context.
- Visual area.
- Metadata/tags if useful.
- Optional links once available.

Initial behavior:

- Devkit and Synaptics can use designed placeholders until final assets are supplied.
- ConverseX, Flowify, and Stonkify can use existing images from `public/`.
- Links should be hidden or marked pending until real URLs are provided.

### Info

Three-panel layout:

- About
- Stack
- Experience

Rules:

- Keep copy concise.
- About should be personal but tied to engineering values.
- Stack should be grouped by working capability, not a long tag cloud.
- Experience should be impact-led and short.

### Writing

Sources:

- Hashnode: `https://pranayyadav.hashnode.dev/`
- LinkedIn: `https://www.linkedin.com/in/pranayyadav02/`

Initial implementation:

- Start with curated external links.
- Add Hashnode feed fetching only after the static redesign is stable.
- Do not depend on LinkedIn fetching.

### Contact

Links:

- Email: pending final address.
- LinkedIn: confirmed.
- Resume: `NEXT_PUBLIC_RESUME_URL`, defaulting to the Google Drive folder URL.
- Hashnode: confirmed.

## Component Plan

Recommended components:

- `DossierFrame`
- `DossierNav`
- `HeroDossier`
- `SectionHeader`
- `ProjectRecord`
- `ProjectGallery`
- `InfoPanel`
- `WritingPanel`
- `ContactLinks`

Data modules:

- `data/profile.ts`
- `data/projects.ts`
- `data/writing.ts`
- `data/experience.ts`

Use existing components only if they match this visual language. Avoid forcing old button/card primitives into this design if they carry the old style.

## Implementation Phases

### Phase 1: Baseline and Upgrade

Tasks:

- Run current lint/build.
- Upgrade Next.js/React dependencies as planned.
- Keep Tailwind 3 initially unless Tailwind 4 migration is straightforward.
- Confirm Node `20.9+`.

Verification:

- `npm run lint`
- `npm run build`

### Phase 2: Data Foundation

Tasks:

- Add structured profile, project, writing, and experience data.
- Add `NEXT_PUBLIC_RESUME_URL` support.
- Add final known URLs for Hashnode and LinkedIn.
- Add project placeholders for missing Devkit/Synaptics assets.

Verification:

- TypeScript passes.
- No component reads undefined fields unsafely.

### Phase 3: Visual System

Tasks:

- Add Archivo and IBM Plex Mono via `next/font`.
- Add dossier color tokens.
- Update global CSS for:
  - Base background.
  - Focus-visible.
  - Selection color.
  - Reduced motion.
- Create frame and section primitives.

Verification:

- App renders the selected color/type system.
- Focus ring is visible.
- No horizontal overflow at `375px`.

### Phase 4: Page Structure

Tasks:

- Replace current homepage with the one-page dossier structure.
- Add semantic sections and anchor IDs:
  - `#work`
  - `#info`
  - `#writing`
  - `#contact`
- Keep old pages temporarily only if needed, but nav should point to homepage anchors.

Verification:

- Keyboard navigation follows document order.
- Anchor links work.
- Hero fills the first viewport on desktop without hiding key content on mobile.

### Phase 5: Project Gallery

Tasks:

- Build `ProjectGallery` with 12-column desktop layout.
- Build `ProjectRecord` supporting:
  - `size: "large" | "small"`
  - optional image
  - placeholder visual
  - tags/metadata
  - optional links
- Map records:
  - Devkit: large, placeholder.
  - Synaptics: small, placeholder or diagram-style block.
  - ConverseX: small, existing image.
  - Flowify: large, existing image.
  - Stonkify: large, existing image.

Verification:

- Missing images do not create broken image icons.
- Existing images render through `next/image`.
- Layout stacks cleanly below `900px`.

### Phase 6: Info, Writing, Contact

Tasks:

- Build three-panel info section.
- Build writing section with Hashnode and LinkedIn links plus fallback note.
- Build contact section with external links.
- Ensure resume URL comes from env/config.

Verification:

- External links open in new tabs where appropriate.
- Link text is meaningful.
- Contact email placeholder is isolated for later replacement.

### Phase 7: Motion and Polish

Tasks:

- Add subtle section reveal.
- Add project record hover/focus states.
- Add slight image scale/position movement on hover.
- Add active nav hover states.
- Respect `prefers-reduced-motion`.

Motion rules:

- Use `opacity` and `transform`.
- Avoid scroll hijacking.
- Avoid full-screen transition gimmicks.
- Keep effects under 300ms for hover and under 600ms for entrance reveals.

Verification:

- Reduced-motion users get static content.
- Hover-only information is also visible or keyboard accessible.
- Mobile scroll remains native.

### Phase 8: QA and Shipping

Tasks:

- Responsive review:
  - `375px`
  - `768px`
  - `1024px`
  - `1440px`
- Accessibility review:
  - headings
  - landmarks
  - focus order
  - alt text
  - link labels
- SEO/metadata update.
- README update if setup changes.

Verification:

- `npm run lint`
- `npm run build`
- Manual browser check.

## Acceptance Criteria

- Homepage follows `portfolio-style-03-visual-dossier`.
- The site feels like a personal dossier/portfolio, not a product landing page.
- One-page navigation works.
- Five selected projects appear.
- Resume, Hashnode, and LinkedIn links are present.
- Devkit and Synaptics placeholders are intentional and visually styled.
- Existing project images render for ConverseX, Flowify, and Stonkify.
- Layout is responsive.
- Focus states and reduced-motion behavior are implemented.
- Build and lint pass.

## Remaining Inputs

- Final email address.
- Current role/title wording.
- Availability/status line.
- Final project URLs and GitHub URLs.
- Final Devkit and Synaptics visuals.
- Final project impact summaries.
