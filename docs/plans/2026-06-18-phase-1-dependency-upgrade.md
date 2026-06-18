# Phase 1 Dependency Upgrade

Date: 2026-06-18

## Scope

Upgrade core framework and support libraries before Visual Dossier implementation.

## Upgraded Packages

Core:

- `next`: `^16.2.9`
- `react`: `^19.2.7`
- `react-dom`: `^19.2.7`
- `eslint-config-next`: `^16.2.9`

Support:

- Radix packages
- `framer-motion`
- `lucide-react`
- `react-icons`
- `tailwind-merge`
- `usehooks-ts`
- React/Node type packages
- `autoprefixer`
- `postcss`

Compatibility pins:

- `typescript`: `^5.9.3`
- `eslint`: `^9.39.4`

Reason:

- TypeScript `6.x` and ESLint `10.x` were pulled by `@latest`, but current Next/ESLint ecosystem peer ranges require TypeScript `<6` and ESLint `9.x`.

## Required Code Changes

- Migrated lint script from `next lint` to `eslint .` because Next 16 no longer supports the old `next lint` behavior.
- Replaced `.eslintrc.json` with `eslint.config.mjs`.
- Updated Framer Motion usage to use variant labels with `variants={...}`.
- Updated `react-icons` D3 import from `SiD3Dotjs` to `SiD3`.
- Removed `next/font/google` usage from the old app shell so builds do not fail in restricted/offline environments.
- Added fallback CSS font variables for existing Tailwind font-family utilities.

## Verification

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Results:

- `npm run lint`: passed with three pre-existing warnings.
- `npx tsc --noEmit`: passed.
- `npm run build`: passed when run outside the sandbox.

Build note:

- The sandboxed build failed with a Turbopack internal error caused by restricted process/port operations.
- The same build passed with elevated permissions.

## Audit

`npm audit fix` was run.

Remaining audit issue:

- Moderate transitive PostCSS advisory inside Next's dependency tree.
- `npm audit fix --force` proposes downgrading Next to `9.3.3`, so it was not applied.

## Exit Criteria

- Dependencies upgraded.
- Lint script migrated.
- TypeScript checks pass.
- Production build passes.
