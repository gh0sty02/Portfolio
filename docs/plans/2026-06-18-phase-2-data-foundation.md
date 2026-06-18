# Phase 2 Data Foundation

Date: 2026-06-18

## Scope

Add typed content data for the selected Visual Dossier implementation.

## Added

- `data/portfolio.ts`

## Data Included

- Profile metadata:
  - name
  - role
  - focus
  - location
  - headline
  - intro
  - resume URL
  - pending email/status fields
- Featured projects:
  - Devkit
  - Synaptics
  - ConverseX
  - Flowify
  - Stonkify
- Info panels:
  - About
  - Stack
  - Experience
- Writing links:
  - Hashnode
  - LinkedIn
  - fallback
- Contact links:
  - Email placeholder
  - LinkedIn
  - Resume
  - Hashnode

## Notes

- `NEXT_PUBLIC_RESUME_URL` is supported, with the confirmed Google Drive URL as fallback.
- Devkit and Synaptics are intentionally marked `pending` until assets/details are provided.
- Existing project images are mapped for ConverseX, Flowify, and Stonkify.
- Existing GitHub URLs are included where already known.
- The repository ignores `/data/`, so `data/portfolio.ts` must be force-added to version control.

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

- Typed portfolio data exists.
- Confirmed external links are represented.
- Pending content can render intentionally in later phases.
