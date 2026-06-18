# Phase 5 Project Gallery

Date: 2026-06-18

## Scope

Replace the Work placeholder with the Visual Dossier project gallery.

## Added Components

- `components/dossier/ProjectRecord.tsx`
- `components/dossier/ProjectGallery.tsx`

## Behavior

- Projects render from `data/portfolio.ts`.
- Large/small record sizing follows the Visual Dossier prototype.
- Existing images are used for:
  - ConverseX
  - Flowify
  - Stonkify
- Devkit and Synaptics render intentional visual placeholders.
- GitHub links are shown when known.
- Missing links render as `Links pending`.

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

- Work section is data-driven.
- No broken image rendering for missing assets.
- Project records follow Visual Dossier layout.
