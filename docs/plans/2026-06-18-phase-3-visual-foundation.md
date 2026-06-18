# Phase 3 Visual Foundation

Date: 2026-06-18

## Scope

Add Visual Dossier design primitives and theme tokens without replacing the homepage yet.

## Added Components

- `components/dossier/DossierFrame.tsx`
- `components/dossier/DossierNav.tsx`
- `components/dossier/SectionHeader.tsx`

## Added Design Tokens

Tailwind dossier colors:

- `dossier-bg`: `#f6f6f1`
- `dossier-ink`: `#0e0e0c`
- `dossier-muted`: `#66665f`
- `dossier-line`: `#d9d9ce`
- `dossier-paper`: `#ffffff`
- `dossier-accent`: `#214cff`

Tailwind dossier fonts:

- `font-dossier-heading`
- `font-dossier-mono`

## Global CSS Updates

- Added Visual Dossier font stack variables.
- Added visible `:focus-visible` outline.
- Added selected text styling.

## Notes

- Final hosted font loading is intentionally deferred until the page implementation phase.
- Current font variables use fallback stacks that keep builds independent of Google Font network access.
- Existing pages are not visually replaced in this phase.

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

- Visual Dossier primitives exist.
- Semantic dossier tokens are available.
- Existing app still builds.
