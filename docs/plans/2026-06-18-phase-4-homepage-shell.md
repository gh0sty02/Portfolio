# Phase 4 Homepage Shell

Date: 2026-06-18

## Scope

Switch the homepage from the old multi-section layout to the Visual Dossier one-page shell.

## Added

- `components/dossier/HeroDossier.tsx`

## Updated

- `pages/_app.tsx`
  - Added per-page `getLayout` support.
  - Legacy pages still render with the old Navbar/Footer.
  - Homepage can render inside the Visual Dossier frame without old site chrome.
- `pages/index.tsx`
  - Replaced old homepage.
  - Removed the missing `styles/Home.module.css` import by replacing the page.
  - Added Visual Dossier sections:
    - Hero
    - Work
    - Info
    - Writing
    - Contact

## Notes

- Work, info, writing, and contact sections intentionally contain placeholders in this phase.
- Project gallery lands in Phase 5.
- Info/writing/contact content lands in Phase 6.

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

- Homepage uses the Visual Dossier frame.
- One-page section anchors exist.
- Legacy routes remain functional.
- Build passes.
