# Phase 7 Motion and Polish

Date: 2026-06-18

## Scope

Add lightweight motion, focus, and accessibility refinements to the Visual Dossier homepage.

## Changes

- Added smooth anchor scrolling.
- Added global reduced-motion handling.
- Added `dossier-reveal` utility animation.
- Added reveal treatment to:
  - Hero
  - Section headers
  - Project records
  - Info panels
  - Writing panels
  - Contact links
- Added skip link to the dossier navigation.
- Improved linked writing panel focus/hover states.

## Motion Rules Followed

- No scroll hijacking.
- No heavy animation library added.
- Motion uses only opacity and transform.
- Reduced-motion preferences disable animations and smooth scrolling.

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

- Dossier page has subtle motion.
- Keyboard users have a skip link.
- Reduced-motion users are respected.
- Build passes.
