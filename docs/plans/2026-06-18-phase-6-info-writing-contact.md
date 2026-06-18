# Phase 6 Info, Writing, and Contact

Date: 2026-06-18

## Scope

Replace remaining homepage placeholders with data-driven Visual Dossier sections.

## Added Components

- `components/dossier/InfoPanels.tsx`
- `components/dossier/WritingPanels.tsx`
- `components/dossier/ContactLinks.tsx`

## Behavior

- Info section renders About, Stack, and Experience from `data/portfolio.ts`.
- Writing section links to Hashnode and LinkedIn, plus fallback note.
- Contact section renders email placeholder, LinkedIn, resume, and Hashnode links.
- Resume uses the dynamic URL from `profile.resumeUrl`.
- Missing email renders as a non-link placeholder.

## Verification

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Results:

- `npm run lint`: passed with three pre-existing warnings.
- `npx tsc --noEmit`: passed.
- `npm run build`: passed.

## Exit Criteria

- Info section is populated.
- Writing links are populated.
- Contact links are populated.
- Build passes.
