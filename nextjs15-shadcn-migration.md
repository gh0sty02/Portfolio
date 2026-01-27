# Next.js 15 + shadcn/ui Migration Plan

## Overview

**Project Type:** WEB

**Migration Objective:** Migrate Portfolio from Next.js 14.0.3 + Chakra UI v2 to Next.js 15 + shadcn/ui while maintaining **pixel-perfect UI consistency** across all screen sizes (mobile, tablet, desktop). This is a **zero visual regression** migration—only the underlying technology stack changes.

**Current Stack:**

- Next.js 14.0.3 (Pages Router)
- Chakra UI v2.8.2 + Emotion
- Framer Motion v10
- TypeScript 5.3.2
- React 18.2.0

**Target Stack:**

- Next.js 15 (Pages Router - maintain existing routing)
- shadcn/ui (Radix UI + Tailwind CSS v4)
- Framer Motion v11 (latest)
- TypeScript 5.7+ (latest stable)
- React 18.3+ (or 19 if Next 15 supports)
- `usehooks-ts` for color mode (replaces Chakra's useColorMode)

**Key Constraints:**

- **Zero UI changes:** Colors, spacing, fonts, layouts must be identical
- **Preserve all fonts:** Poppins (weights: 100, 300, 400, 500, 700), Roboto Mono (500), Russo One
- **System color mode:** Maintain `useSystemColorMode: true` behavior
- **Phased migration:** Components migrated in logical groups
- **Fix-forward strategy:** No rollback, resolve issues in place

---

## Success Criteria

| Criterion               | Verification Method                                                                 |
| ----------------------- | ----------------------------------------------------------------------------------- |
| **Visual Consistency**  | Side-by-side screenshots (old vs new) show zero differences at 375px, 768px, 1440px |
| **Color Accuracy**      | All theme colors match: `gray.100` → `#f7fafc`, `#121212` → `#121212`               |
| **Font Preservation**   | Poppins, Roboto Mono, Russo One loaded and applied identically                      |
| **Responsive Behavior** | All breakpoints work as before (mobile, tablet, desktop)                            |
| **Animation Parity**    | Framer Motion animations behave identically                                         |
| **System Theme Sync**   | Light/dark mode switches with OS preference                                         |
| **Build Success**       | `npm run build` passes with zero errors                                             |
| **Type Safety**         | `npx tsc --noEmit` passes with zero errors                                          |
| **Runtime Stability**   | No console errors in dev mode                                                       |

---

## Tech Stack Rationale

### Next.js 15

- Latest stable release with improved performance
- Maintains Pages Router (no migration to App Router needed)
- Better TypeScript support and DX improvements

### shadcn/ui + Radix UI

- Headless components provide full styling control
- Better tree-shaking vs Chakra (smaller bundle)
- Tailwind CSS v4 offers modern CSS-first architecture
- Direct replacement for Chakra's component library

### Tailwind CSS v4

- CSS-first configuration (vs JS config)
- Native container queries
- Improved performance and DX

### usehooks-ts (Color Mode)

- Well-maintained library (159k weekly downloads)
- Provides `useLocalStorage` + `useMediaQuery` hooks
- Lightweight alternative to next-themes
- Direct control over theme implementation

### Framer Motion v11

- Latest version with performance improvements
- Drop-in upgrade from v10

---

## File Structure

### New Files (to be created)

```
Portfolio/
├── tailwind.config.ts          # Tailwind v4 config with theme tokens
├── postcss.config.mjs          # PostCSS configuration
├── components/
│   ├── ui/                     # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── container.tsx      # Custom: replaces Chakra Container
│   │   ├── text.tsx           # Custom: replaces Chakra Text
│   │   ├── heading.tsx        # Custom: replaces Chakra Heading
│   │   ├── divider.tsx        # Custom: replaces Chakra Divider
│   │   ├── box.tsx            # Custom: replaces Chakra Box
│   │   └── ...                # Other shadcn components as needed
│   └── theme/
│       └── theme-provider.tsx  # Custom theme provider using usehooks-ts
├── lib/
│   └── utils.ts                # cn() utility for Tailwind
├── styles/
│   └── globals.css             # Updated with Tailwind directives + CSS variables
└── hooks/
    └── use-theme.ts            # Custom hook for system-aware theme switching
```

### Modified Files

```
Portfolio/
├── package.json                # Updated dependencies
├── next.config.js → next.config.ts  # TypeScript config
├── tsconfig.json               # Updated compiler options
├── pages/
│   ├── _app.tsx                # Replace ChakraProvider with ThemeProvider
│   ├── _document.tsx           # Update font loading strategy
│   ├── index.tsx               # Migrate Chakra components
│   ├── about.tsx               # Migrate Chakra components
│   ├── experience.tsx          # Migrate Chakra components
│   └── projects.tsx            # Migrate Chakra components
└── components/
    ├── Layout/
    │   ├── Navbar.tsx          # Migrate Chakra components
    │   └── Footer.tsx          # Migrate Chakra components
    ├── Profile.tsx             # Migrate Chakra components
    ├── Projects/               # Migrate all project components
    ├── skills/                 # Migrate all skill components
    └── utils/                  # Migrate utility components
```

### Deleted Files

```
config/theme.ts                 # Replaced by Tailwind config + CSS variables
```

---

## Migration Phases

### **Phase 0: Foundation Setup** (P0 - Critical)

Infrastructure and tooling setup. No component migration yet.

### **Phase 1: Core Migration** (P1 - High)

Layout components (Navbar, Footer) + theme system.

### **Phase 2: Page Migration** (P2 - High)

All pages (index, about, experience, projects).

### **Phase 3: Feature Components** (P3 - Medium)

Profile, Projects, Skills components.

### **Phase 4: Polish & Verification** (P4 - Final)

Visual regression testing, performance optimization, final checks.

---

## Task Breakdown

### **PHASE 0: FOUNDATION SETUP**

#### Task 0.1: Create Migration Branch

**Agent:** `frontend-specialist`  
**Skills:** `clean-code`, `bash-linux`  
**Priority:** P0  
**Dependencies:** None  
**Estimated Time:** 2 minutes

**INPUT:**

- Current `main` branch with Next.js 14 + Chakra UI

**OUTPUT:**

- New branch `migration/nextjs15-shadcn`
- Branch pushed to remote

**VERIFY:**

```bash
git branch --show-current
# Expected: migration/nextjs15-shadcn

git status
# Expected: On branch migration/nextjs15-shadcn
```

**Commands:**

```bash
git checkout -b migration/nextjs15-shadcn
git push -u origin migration/nextjs15-shadcn
```

---

#### Task 0.2: Install Next.js 15 + Core Dependencies

**Agent:** `frontend-specialist`  
**Skills:** `nextjs-react-expert`, `clean-code`  
**Priority:** P0  
**Dependencies:** Task 0.1  
**Estimated Time:** 5 minutes

**INPUT:**

- Existing `package.json` with Next.js 14

**OUTPUT:**

- Updated `package.json` with:
  - Next.js 15.x (latest stable)
  - React 18.3+ (or 19 if compatible)
  - TypeScript 5.7+
  - Removed: `@chakra-ui/react`, `@chakra-ui/icons`, `@emotion/react`, `@emotion/styled`
  - Added: `tailwindcss`, `autoprefixer`, `postcss`, `tailwind-merge`, `clsx`, `class-variance-authority`, `usehooks-ts`

**VERIFY:**

```bash
npm install
npm run dev
# Expected: Server starts without errors (pages may be broken, that's OK)
```

**Dependencies to Add:**

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "framer-motion": "^11.0.0",
    "react-icons": "^5.5.0",
    "usehooks-ts": "^3.1.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18.3.0",
    "typescript": "^5.7.0",
    "tailwindcss": "^4.0.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^9.0.0",
    "eslint-config-next": "^15.0.0"
  }
}
```

---

#### Task 0.3: Configure Tailwind CSS v4

**Agent:** `frontend-specialist`  
**Skills:** `tailwind-patterns`, `frontend-design`  
**Priority:** P0  
**Dependencies:** Task 0.2  
**Estimated Time:** 8 minutes

**INPUT:**

- Empty Tailwind config
- Chakra theme colors: `gray.100` (light mode), `#121212` (dark mode), green accent `#38a169`

**OUTPUT:**

- `tailwind.config.ts` with:
  - Custom colors matching Chakra theme exactly
  - Font family definitions (Poppins, Roboto Mono, Russo One)
  - Responsive breakpoints matching Chakra defaults
  - Container configuration
- `postcss.config.mjs` with Tailwind + Autoprefixer
- Updated `styles/globals.css` with:
  - Tailwind directives (`@tailwind base`, `@tailwind components`, `@tailwind utilities`)
  - CSS variables for light/dark mode
  - Preserved custom styles (scrollbar, logo animations)

**VERIFY:**

```bash
npx tailwindcss --help
# Expected: Tailwind CLI responds

# Check if config is valid
node -e "require('./tailwind.config.ts')"
# Expected: No errors
```

**Color Mapping:**

```css
/* Light Mode */
--background: 240 17% 98%; /* gray.100 → #f7fafc */
--foreground: 222 47% 11%; /* Default text */
--primary: 142 69% 45%; /* green.500 → #38a169 */

/* Dark Mode */
--background: 0 0% 7%; /* #121212 */
--foreground: 0 0% 95%; /* Light text */
--primary: 142 69% 45%; /* Same green */
```

---

#### Task 0.4: Setup Custom Theme Provider

**Agent:** `frontend-specialist`  
**Skills:** `nextjs-react-expert`, `frontend-design`  
**Priority:** P0  
**Dependencies:** Task 0.3  
**Estimated Time:** 10 minutes

**INPUT:**

- `usehooks-ts` library installed
- Chakra's `useSystemColorMode: true` behavior requirement

**OUTPUT:**

- `hooks/use-theme.ts`: Custom hook combining:
  - `useMediaQuery('(prefers-color-scheme: dark)')` for system preference
  - `useLocalStorage('theme', 'system')` for manual override
  - Logic to sync theme with `<html>` class (`dark` or `light`)
- `components/theme/theme-provider.tsx`: Provider component wrapping entire app
- Type definitions for theme ('light' | 'dark' | 'system')

**VERIFY:**

```typescript
// In browser console after implementation:
localStorage.setItem('theme', 'dark');
// Expected: Page switches to dark mode

localStorage.setItem('theme', 'system');
// Expected: Page follows OS preference
```

**Implementation Notes:**

- Must respect system preference by default
- Allow manual override via localStorage
- Apply theme class to `<html>` element for Tailwind to work
- Sync theme on mount and whenever system preference changes

---

#### Task 0.5: Setup shadcn/ui CLI & Base Components

**Agent:** `frontend-specialist`  
**Skills:** `nextjs-react-expert`, `clean-code`  
**Priority:** P0  
**Dependencies:** Task 0.4  
**Estimated Time:** 7 minutes

**INPUT:**

- Initialized Tailwind config
- Project structure

**OUTPUT:**

- `components.json`: shadcn/ui configuration file
- `lib/utils.ts`: `cn()` utility function (clsx + tailwind-merge)
- Base components installed via shadcn CLI:
  - `button` (for future use)
  - `card` (used in projects)

**VERIFY:**

```bash
# Check if shadcn is configured
cat components.json
# Expected: Valid JSON with paths configured

# Check if utils work
node -e "const { cn } = require('./lib/utils'); console.log(cn('test'));"
# Expected: "test"
```

**Commands:**

```bash
npx shadcn@latest init
# Select: TypeScript, Tailwind CSS, src directory: No, components: ./components/ui

npx shadcn@latest add button
npx shadcn@latest add card
```

---

### **PHASE 1: CORE MIGRATION**

#### Task 1.1: Create Custom Chakra Replacement Components

**Agent:** `frontend-specialist`  
**Skills:** `frontend-design`, `nextjs-react-expert`  
**Priority:** P1  
**Dependencies:** Task 0.5  
**Estimated Time:** 15 minutes

**INPUT:**

- Chakra component usage patterns from codebase
- Tailwind config with theme tokens

**OUTPUT:**

- `components/ui/container.tsx`: Replicates Chakra's `<Container>` with `maxW` prop
- `components/ui/text.tsx`: Replicates Chakra's `<Text>` with `fontFamily`, `fontWeight`, `fontSize` props
- `components/ui/heading.tsx`: Replicates Chakra's `<Heading>` with `as`, `size` props
- `components/ui/divider.tsx`: Replicates Chakra's `<Divider>` (horizontal line)
- `components/ui/box.tsx`: Generic container with Chakra-style props (replaces `<Box>`)

**VERIFY:**

```typescript
// Example usage should work:
<Container maxW="container.lg" mt={[5, 10]}>
  <Text fontFamily="Poppins" fontWeight="light">Test</Text>
</Container>

// Each component should accept className for Tailwind
// Each component should support responsive arrays/objects like Chakra
```

**Component Requirements:**

- Support Chakra-style spacing props (`mt`, `mb`, `my`, `mx`, `p`, etc.)
- Support responsive arrays: `mt={[5, 10]}` → `mt-5 md:mt-10`
- Type-safe with TypeScript
- Use `cn()` utility for class merging
- Polymorphic where needed (`as` prop for headings)

---

#### Task 1.2: Migrate Font Loading to Next.js 15

**Agent:** `frontend-specialist`  
**Skills:** `nextjs-react-expert`, `frontend-design`  
**Priority:** P1  
**Dependencies:** Task 1.1  
**Estimated Time:** 8 minutes

**INPUT:**

- Current `_document.tsx` with Google Fonts link:
  ```html
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700&family=Roboto+Mono:wght@500&family=Russo+One&display=swap"
  />
  ```

**OUTPUT:**

- Updated `pages/_document.tsx` using Next.js 15's font optimization
- Font variables defined in `globals.css`
- Fonts loaded via `next/font/google` (recommended approach)

**VERIFY:**

```bash
# Check Network tab in DevTools:
# Expected: Fonts loaded from /_next/static/media/
# NOT from fonts.googleapis.com (Next.js optimizes them)

# Check font rendering:
# Expected: Poppins applied to text elements
# Expected: No FOUT (Flash of Unstyled Text)
```

**Implementation:**

```typescript
// In _app.tsx or separate font config:
import { Poppins, Roboto_Mono, Russo_One } from 'next/font/google';

const poppins = Poppins({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const robotoMono = Roboto_Mono({
  weight: ['500'],
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

const russoOne = Russo_One({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-russo-one',
});
```

---

#### Task 1.3: Migrate Theme Provider in \_app.tsx

**Agent:** `frontend-specialist`  
**Skills:** `nextjs-react-expert`, `frontend-design`  
**Priority:** P1  
**Dependencies:** Task 1.2  
**Estimated Time:** 6 minutes

**INPUT:**

- Current `_app.tsx` with `<ChakraProvider theme={theme}>`
- New `<ThemeProvider>` from Task 0.4

**OUTPUT:**

- Updated `pages/_app.tsx`:
  - Remove `import { ChakraProvider } from "@chakra-ui/react"`
  - Remove `import theme from "config/theme"`
  - Add `import { ThemeProvider } from "components/theme/theme-provider"`
  - Replace `<ChakraProvider>` with `<ThemeProvider>`
  - Keep `<AnimatePresence>`, `<Navbar>`, `<Footer>` unchanged (will migrate later)

**VERIFY:**

```bash
npm run dev
# Expected: App runs without Chakra errors
# Expected: Theme switches based on system preference

# In DevTools console:
document.documentElement.classList.contains('dark')
# Expected: true (if OS is in dark mode) or false (if light mode)
```

---

#### Task 1.4: Migrate Navbar Component

**Agent:** `frontend-specialist`  
**Skills:** `frontend-design`, `nextjs-react-expert`  
**Priority:** P1  
**Dependencies:** Task 1.3  
**Estimated Time:** 12 minutes

**INPUT:**

- Current `components/Layout/Navbar.tsx` with Chakra components
- Custom replacement components from Task 1.1

**OUTPUT:**

- Fully migrated `Navbar.tsx`:
  - Replace all Chakra imports with custom components or Tailwind
  - Preserve exact spacing, colors, responsive behavior
  - Maintain all existing animations (Framer Motion)
  - Update color mode toggle to use `useTheme()` hook

**VERIFY:**

```bash
npm run dev
# Navigate to: http://localhost:3000

# Manual Verification Checklist:
## Mobile (375px):
- [ ] Navbar height matches original
- [ ] Logo size and position identical
- [ ] Links/buttons spacing correct
- [ ] Color matches theme (light/dark)

## Tablet (768px):
- [ ] Layout matches original
- [ ] All elements visible and aligned

## Desktop (1440px):
- [ ] Full navbar visible
- [ ] All spacing matches original
- [ ] Hover effects work (if any)

## Theme Switching:
- [ ] Light mode colors match Chakra light mode
- [ ] Dark mode colors match Chakra dark mode
```

**Migration Map:**

- `<Box>` → `components/ui/box.tsx` or `<div className="...">`
- `<Flex>` → `<div className="flex ...">`
- `<Link>` (Chakra) → `<Link>` (Next.js) or custom component
- `useColorMode()` → `useTheme()` (custom hook)

---

#### Task 1.5: Migrate Footer Component

**Agent:** `frontend-specialist`  
**Skills:** `frontend-design`, `nextjs-react-expert`  
**Priority:** P1  
**Dependencies:** Task 1.4  
**Estimated Time:** 10 minutes

**INPUT:**

- Current `components/Layout/Footer.tsx` with Chakra components
- Custom replacement components from Task 1.1

**OUTPUT:**

- Fully migrated `Footer.tsx`:
  - Replace all Chakra imports
  - Preserve exact layout and styling
  - Maintain social icons (react-icons still works)

**VERIFY:**

```bash
npm run dev

# Manual Verification Checklist:
## Mobile (375px):
- [ ] Footer layout matches original
- [ ] Icon sizes correct
- [ ] Text alignment matches
- [ ] Spacing identical

## Tablet (768px):
- [ ] Footer expands correctly
- [ ] All links visible

## Desktop (1440px):
- [ ] Full footer visible
- [ ] All elements aligned
- [ ] Colors match theme
```

---

### **PHASE 2: PAGE MIGRATION**

#### Task 2.1: Migrate index.tsx (Home Page)

**Agent:** `frontend-specialist`  
**Skills:** `frontend-design`, `nextjs-react-expert`  
**Priority:** P2  
**Dependencies:** Task 1.5  
**Estimated Time:** 8 minutes

**INPUT:**

- Current `pages/index.tsx` with `<Container>`, `<Divider>` from Chakra
- Custom replacement components

**OUTPUT:**

- Migrated `pages/index.tsx`:
  - Replace `import { Container, Divider } from "@chakra-ui/react"` with custom components
  - Update responsive margin: `mt={["5", "10"]}` → handle via custom Container
  - Ensure `<Profile>` and `<Stack>` render (will have errors, OK for now)

**VERIFY:**

```bash
npm run dev
# Navigate to: http://localhost:3000

## Manual Verification:
- [ ] Container max-width matches original (lg breakpoint)
- [ ] Top margin: 5 on mobile, 10 on desktop
- [ ] Divider renders as horizontal line
- [ ] Spacing between sections identical

## Screenshot Comparison:
- [ ] Take screenshot at 375px, 768px, 1440px
- [ ] Compare with original (before migration)
- [ ] Zero visual differences allowed
```

---

#### Task 2.2: Migrate about.tsx Page

**Agent:** `frontend-specialist`  
**Skills:** `frontend-design`, `nextjs-react-expert`  
**Priority:** P2  
**Dependencies:** Task 2.1  
**Estimated Time:** 10 minutes

**INPUT:**

- Current `pages/about.tsx` with Chakra components

**OUTPUT:**

- Fully migrated `pages/about.tsx`
- All Chakra components replaced
- Layout and styling preserved

**VERIFY:**

```bash
npm run dev
# Navigate to: http://localhost:3000/about

## Manual Verification (all screen sizes):
- [ ] Layout identical to original
- [ ] Text rendering matches
- [ ] Colors correct in light/dark mode
- [ ] Responsive behavior preserved
```

---

#### Task 2.3: Migrate experience.tsx Page

**Agent:** `frontend-specialist`  
**Skills:** `frontend-design`, `nextjs-react-expert`  
**Priority:** P2  
**Dependencies:** Task 2.2  
**Estimated Time:** 15 minutes

**INPUT:**

- Current `pages/experience.tsx` with Chakra components
- Multiple uses of `fontFamily="Poppins"`

**OUTPUT:**

- Fully migrated `pages/experience.tsx`
- All Chakra `<Text>` replaced with custom component or Tailwind
- Font family applied via Tailwind classes: `font-poppins`

**VERIFY:**

```bash
npm run dev
# Navigate to: http://localhost:3000/experience

## Manual Verification:
- [ ] Timeline layout identical
- [ ] Font weights match: light, medium
- [ ] Spacing between entries preserved
- [ ] Dark mode colors correct
- [ ] All responsive breakpoints work
```

---

#### Task 2.4: Migrate projects.tsx Page

**Agent:** `frontend-specialist`  
**Skills:** `frontend-design`, `nextjs-react-expert`  
**Priority:** P2  
**Dependencies:** Task 2.3  
**Estimated Time:** 12 minutes

**INPUT:**

- Current `pages/projects.tsx` with Chakra components
- Uses project components (will have errors, OK)

**OUTPUT:**

- Migrated `pages/projects.tsx`
- Page-level Chakra components replaced
- Project components may still have errors (will fix in Phase 3)

**VERIFY:**

```bash
npm run dev
# Navigate to: http://localhost:3000/projects

## Manual Verification (page-level only):
- [ ] Page container correct
- [ ] Spacing matches original
- [ ] Colors correct
- [ ] (Project cards may be broken - expected)
```

---

### **PHASE 3: FEATURE COMPONENTS**

#### Task 3.1: Migrate Profile Component

**Agent:** `frontend-specialist`  
**Skills:** `frontend-design`, `nextjs-react-expert`  
**Priority:** P3  
**Dependencies:** Task 2.4  
**Estimated Time:** 10 minutes

**INPUT:**

- `components/Profile.tsx` with Chakra components
- Uses `fontFamily="Poppins"`, `fontWeight="light"`

**OUTPUT:**

- Fully migrated `Profile.tsx`
- All Chakra imports removed
- Styling replicated with Tailwind

**VERIFY:**

```bash
npm run dev
# Navigate to: http://localhost:3000

## Manual Verification:
- [ ] Profile image size/position correct
- [ ] Text styling matches (font, weight, size)
- [ ] Spacing around elements identical
- [ ] Responsive layout works
- [ ] Dark mode colors correct
```

---

#### Task 3.2: Migrate utils/ Components (Card, Link, Logo, Paragraph)

**Agent:** `frontend-specialist`  
**Skills:** `frontend-design`, `nextjs-react-expert`  
**Priority:** P3  
**Dependencies:** Task 3.1  
**Estimated Time:** 15 minutes

**INPUT:**

- `components/utils/Card.tsx`
- `components/utils/Link.tsx`
- `components/utils/Logo.tsx`
- `components/utils/Paragraph.tsx`

**OUTPUT:**

- All 4 utility components migrated
- Chakra dependencies removed
- Tailwind classes applied
- Logo CSS animations preserved (from `globals.css`)

**VERIFY:**

```bash
npm run dev

## Card Component:
- [ ] Border radius matches
- [ ] Shadow matches
- [ ] Padding identical
- [ ] Hover effects work

## Link Component:
- [ ] Color matches theme
- [ ] Underline behavior same
- [ ] Hover state correct

## Logo Component:
- [ ] Size correct
- [ ] Hover animation works (circles appear)
- [ ] Rotation animation works

## Paragraph Component:
- [ ] Font size/line height same
- [ ] Spacing preserved
```

---

#### Task 3.3: Migrate Projects/ Components

**Agent:** `frontend-specialist`  
**Skills:** `frontend-design`, `nextjs-react-expert`  
**Priority:** P3  
**Dependencies:** Task 3.2  
**Estimated Time:** 20 minutes

**INPUT:**

- `components/Projects/CoverImage.tsx`
- `components/Projects/FeaturedCards.tsx`
- `components/Projects/ProjectDescription.tsx`
- `components/Projects/varients.ts` (Framer Motion variants)
- `components/Projects/styles.module.css`

**OUTPUT:**

- All project components migrated
- Framer Motion variants preserved (no changes needed)
- CSS modules converted to Tailwind where possible
- `fontFamily="Poppins"` replaced with Tailwind classes

**VERIFY:**

```bash
npm run dev
# Navigate to: http://localhost:3000/projects

## Manual Verification:
- [ ] Project cards layout identical
- [ ] Cover images display correctly
- [ ] Hover effects work (Framer Motion)
- [ ] Typography matches (Poppins font)
- [ ] Card spacing preserved
- [ ] Dark mode colors correct
- [ ] Responsive grid works
```

---

#### Task 3.4: Migrate skills/ Components

**Agent:** `frontend-specialist`  
**Skills:** `frontend-design`, `nextjs-react-expert`  
**Priority:** P3  
**Dependencies:** Task 3.3  
**Estimated Time:** 18 minutes

**INPUT:**

- `components/skills/SkillList.tsx`
- `components/skills/SkillSetModal.tsx`
- `components/skills/Stack.tsx`
- `components/skills/TechStack.tsx`
- `components/skills/skills.module.css`

**OUTPUT:**

- All skill components migrated
- Modal component functionality preserved
- CSS modules converted to Tailwind
- Grid/flex layouts replicated exactly

**VERIFY:**

```bash
npm run dev
# Navigate to: http://localhost:3000

## Manual Verification:
- [ ] Skill grid layout matches
- [ ] Modal opens correctly (if present)
- [ ] Icon sizes preserved
- [ ] Text alignment same
- [ ] Responsive behavior identical
- [ ] Hover states work
```

---

### **PHASE 4: POLISH & VERIFICATION**

#### Task 4.1: Cross-Browser Testing

**Agent:** `frontend-specialist`  
**Skills:** `webapp-testing`, `frontend-design`  
**Priority:** P4  
**Dependencies:** Task 3.4  
**Estimated Time:** 20 minutes

**INPUT:**

- Fully migrated application
- All components functional

**OUTPUT:**

- Test report covering:
  - Chrome (latest)
  - Firefox (latest)
  - Safari (latest, macOS/iOS)
  - Edge (latest)

**VERIFY:**

```markdown
## Desktop Browsers (1440px):

Chrome:

- [ ] All pages render correctly
- [ ] Theme switching works
- [ ] Fonts load properly
- [ ] Animations smooth

Firefox:

- [ ] Same as Chrome

Safari:

- [ ] Same as Chrome
- [ ] Check for backdrop-filter issues

Edge:

- [ ] Same as Chrome

## Mobile Browsers (375px):

Safari iOS:

- [ ] Layout correct
- [ ] Touch interactions work
- [ ] Fonts render clearly

Chrome Android:

- [ ] Same as Safari iOS
```

---

#### Task 4.2: Performance Optimization

**Agent:** `frontend-specialist`  
**Skills:** `performance-profiling`, `nextjs-react-expert`  
**Priority:** P4  
**Dependencies:** Task 4.1  
**Estimated Time:** 15 minutes

**INPUT:**

- Migrated application with Tailwind

**OUTPUT:**

- Optimizations applied:
  - Unused Tailwind classes purged (should be automatic)
  - Fonts preloaded
  - Images optimized (if not already using Next.js Image)
- Lighthouse audit report

**VERIFY:**

```bash
npm run build
# Expected: Build succeeds

# Check bundle size:
du -sh .next/static
# Compare with previous build (should be smaller due to no Chakra/Emotion)

# Lighthouse audit:
python .agent/skills/performance-profiling/scripts/lighthouse_audit.py http://localhost:3000

## Expected Scores:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+
```

---

#### Task 4.3: Accessibility Audit

**Agent:** `frontend-specialist`  
**Skills:** `frontend-design`, `webapp-testing`  
**Priority:** P4  
**Dependencies:** Task 4.2  
**Estimated Time:** 12 minutes

**INPUT:**

- Fully migrated application

**OUTPUT:**

- Accessibility checks completed:
  - Color contrast verified (WCAG AA)
  - Keyboard navigation tested
  - Screen reader compatibility checked
  - Focus states visible

**VERIFY:**

```bash
# Run accessibility checker:
python .agent/skills/frontend-design/scripts/accessibility_checker.py .

## Manual Checks:
- [ ] Tab through all pages with keyboard
- [ ] All interactive elements focusable
- [ ] Focus outline visible
- [ ] Screen reader announces elements correctly (use VoiceOver/NVDA)
- [ ] Color contrast meets WCAG AA:
  - Light mode text on background: ≥4.5:1
  - Dark mode text on background: ≥4.5:1
  - Green accent (#38a169) on backgrounds: ≥3:1
```

---

#### Task 4.4: Visual Regression Testing

**Agent:** `frontend-specialist`  
**Skills:** `webapp-testing`, `frontend-design`  
**Priority:** P4 (Critical for this migration!)  
**Dependencies:** Task 4.3  
**Estimated Time:** 30 minutes

**INPUT:**

- Reference screenshots from original Chakra UI version (to be taken before migration)
- Migrated application

**OUTPUT:**

- Side-by-side comparison screenshots at:
  - 375px (iPhone SE)
  - 768px (iPad)
  - 1440px (Desktop)
- Comparison report documenting any differences
- All differences resolved

**VERIFY:**

```bash
# Take reference screenshots BEFORE migration (Task 0.1):
# (Manual process using browser DevTools or screenshot tool)

# Take comparison screenshots AFTER migration:
# Manual verification at each breakpoint

## Pages to Screenshot:
- [ ] / (home - Profile + TechStack)
- [ ] /about
- [ ] /experience
- [ ] /projects

## For Each Page at Each Breakpoint:
1. Open DevTools → Responsive Mode
2. Set width: 375px / 768px / 1440px
3. Toggle light/dark mode
4. Take screenshot
5. Compare with reference
6. Document differences (if any)
7. Fix differences until pixel-perfect

## Acceptance Criteria:
- Zero visual differences in layout
- Colors match exactly (use color picker tool)
- Font rendering identical
- Spacing matches to the pixel
```

---

#### Task 4.5: Build & Type Check Verification

**Agent:** `frontend-specialist`  
**Skills:** `clean-code`, `nextjs-react-expert`  
**Priority:** P4  
**Dependencies:** Task 4.4  
**Estimated Time:** 8 minutes

**INPUT:**

- Fully migrated and tested application

**OUTPUT:**

- Clean build output
- Zero TypeScript errors
- Zero ESLint errors

**VERIFY:**

```bash
# TypeScript check:
npx tsc --noEmit
# Expected: No errors

# Linting:
npm run lint
# Expected: No errors or warnings

# Production build:
npm run build
# Expected: Build completes successfully

# Start production server:
npm run start
# Expected: Server starts, all pages load correctly

# Dev server (double-check):
npm run dev
# Expected: No console errors or warnings
```

---

#### Task 4.6: Documentation & Cleanup

**Agent:** `frontend-specialist`  
**Skills:** `documentation-templates`, `clean-code`  
**Priority:** P4  
**Dependencies:** Task 4.5  
**Estimated Time:** 10 minutes

**INPUT:**

- Completed migration

**OUTPUT:**

- Updated `README.md` with:
  - New tech stack listed
  - Updated setup instructions (if needed)
  - Migration notes
- Deleted files:
  - `config/theme.ts` (no longer needed)
  - Any unused Chakra-related files
- Updated comments in code (if any reference Chakra)

**VERIFY:**

```bash
# Check for any remaining Chakra references:
grep -r "chakra" --include="*.tsx" --include="*.ts" .
# Expected: No results (or only in comments)

# Check for @emotion imports:
grep -r "@emotion" --include="*.tsx" --include="*.ts" .
# Expected: No results

# Verify README:
cat README.md
# Expected: Mentions Next.js 15, shadcn/ui, Tailwind CSS
```

---

## Phase X: Final Verification

### Pre-Deployment Checklist

**Run ALL verification scripts:**

```bash
# 1. Lint & Type Check
npm run lint && npx tsc --noEmit

# 2. Security Scan
python .agent/skills/vulnerability-scanner/scripts/security_scan.py .

# 3. UX Audit
python .agent/skills/frontend-design/scripts/ux_audit.py .

# 4. Accessibility Check
python .agent/skills/frontend-design/scripts/accessibility_checker.py .

# 5. Build
npm run build

# 6. Lighthouse (requires running server)
npm run start &
sleep 5
python .agent/skills/performance-profiling/scripts/lighthouse_audit.py http://localhost:3000

# 7. Playwright E2E (if tests exist)
python .agent/skills/webapp-testing/scripts/playwright_runner.py http://localhost:3000 --screenshot
```

### Manual Verification Matrix

| Page          | Mobile (375px) | Tablet (768px) | Desktop (1440px) | Light Mode | Dark Mode | Notes               |
| ------------- | -------------- | -------------- | ---------------- | ---------- | --------- | ------------------- |
| `/` (Home)    | [ ]            | [ ]            | [ ]              | [ ]        | [ ]       | Profile + TechStack |
| `/about`      | [ ]            | [ ]            | [ ]              | [ ]        | [ ]       | About content       |
| `/experience` | [ ]            | [ ]            | [ ]              | [ ]        | [ ]       | Timeline            |
| `/projects`   | [ ]            | [ ]            | [ ]              | [ ]        | [ ]       | Project cards       |

### Rule Compliance

- [ ] **No Purple/Violet Colors:** Green (`#38a169`) is the primary accent
- [ ] **Original Design Preserved:** Zero layout changes
- [ ] **Fonts Preserved:** Poppins, Roboto Mono, Russo One all load correctly
- [ ] **System Theme Works:** Light/dark mode follows OS preference
- [ ] **Animations Work:** Logo hover effects, Framer Motion transitions
- [ ] **Responsive Behavior:** All breakpoints match original

### Performance Targets

- [ ] **Bundle Size:** Smaller than Chakra version (check `.next/static` size)
- [ ] **Lighthouse Performance:** ≥90
- [ ] **First Contentful Paint:** ≤1.5s
- [ ] **Time to Interactive:** ≤3.0s
- [ ] **No Layout Shift:** CLS ≤0.1

### Migration Completion Criteria

- [ ] All 17 components migrated
- [ ] All 4 pages migrated
- [ ] Zero Chakra dependencies in `package.json`
- [ ] Zero `@chakra-ui` or `@emotion` imports in code
- [ ] Build succeeds with zero errors
- [ ] TypeScript passes with zero errors
- [ ] Visual regression test: 100% match
- [ ] All fonts render correctly
- [ ] Theme switching works
- [ ] Responsive behavior identical

---

## ✅ PHASE X COMPLETE

**To be filled after all checks pass:**

- **Lint:** ⬜ Pass
- **Security:** ⬜ No critical issues
- **UX Audit:** ⬜ Pass
- **Accessibility:** ⬜ WCAG AA compliant
- **Build:** ⬜ Success
- **Lighthouse:** ⬜ All scores ≥90
- **Visual Regression:** ⬜ 100% match
- **Date Completed:** `[YYYY-MM-DD]`
- **Verified By:** `frontend-specialist`

---

## Risk Mitigation

| Risk                                               | Likelihood | Impact | Mitigation Strategy                                                            |
| -------------------------------------------------- | ---------- | ------ | ------------------------------------------------------------------------------ |
| **Chakra component has no direct equivalent**      | Medium     | High   | Create custom wrapper using Radix UI + Tailwind that replicates behavior       |
| **Responsive props don't translate**               | Medium     | Medium | Build helper functions to convert Chakra arrays to Tailwind responsive classes |
| **Color values don't match exactly**               | Low        | High   | Use color picker to verify exact hex codes, define CSS variables               |
| **Framer Motion breaks after upgrade**             | Low        | Medium | Test animations early in Phase 1, rollback to v10 if issues                    |
| **Build fails due to Next.js 15 breaking changes** | Low        | High   | Review Next.js 15 migration guide, fix import paths if needed                  |
| **Font loading causes FOUT**                       | Low        | Low    | Use Next.js font optimization with proper preload                              |
| **Theme switching has flash**                      | Medium     | Low    | Apply theme class synchronously on mount before render                         |
| **CSS modules conflict with Tailwind**             | Low        | Low    | Gradually migrate CSS modules, keep both if needed                             |

---

## Rollback Strategy

**Since this is a fix-forward approach, rollback is NOT the primary strategy.** However, if critical issues arise:

1. **Partial Rollback (Recommended):**
   - Keep migrated components on branch
   - Revert specific problematic component to Chakra temporarily
   - Fix issue, then re-migrate

2. **Full Rollback (Emergency Only):**

   ```bash
   git checkout main
   git branch -D migration/nextjs15-shadcn
   ```

3. **Fix-Forward Checklist:**
   - Identify broken component
   - Compare with original Chakra version
   - Adjust Tailwind classes or custom component logic
   - Test immediately in all breakpoints
   - Continue migration

---

## Agent Assignment Summary

| Phase       | Primary Agent         | Supporting Skills                                            |
| ----------- | --------------------- | ------------------------------------------------------------ |
| **Phase 0** | `frontend-specialist` | `nextjs-react-expert`, `tailwind-patterns`, `clean-code`     |
| **Phase 1** | `frontend-specialist` | `frontend-design`, `nextjs-react-expert`                     |
| **Phase 2** | `frontend-specialist` | `frontend-design`, `nextjs-react-expert`                     |
| **Phase 3** | `frontend-specialist` | `frontend-design`, `nextjs-react-expert`                     |
| **Phase 4** | `frontend-specialist` | `webapp-testing`, `performance-profiling`, `frontend-design` |

**Single Agent Rationale:**

- This is a WEB project (not mobile), so `frontend-specialist` is the correct agent
- All tasks involve UI/UX migration, which is the specialist's domain
- Consistency in implementation by using a single agent

---

## Timeline Estimate

| Phase       | Tasks           | Estimated Time | Cumulative   |
| ----------- | --------------- | -------------- | ------------ |
| **Phase 0** | 5 tasks         | ~40 minutes    | 40 min       |
| **Phase 1** | 5 tasks         | ~61 minutes    | 101 min      |
| **Phase 2** | 4 tasks         | ~45 minutes    | 146 min      |
| **Phase 3** | 4 tasks         | ~63 minutes    | 209 min      |
| **Phase 4** | 6 tasks         | ~95 minutes    | 304 min      |
| **Buffer**  | Testing + Fixes | ~60 minutes    | **~6 hours** |

**Total Estimated Time:** ~6 hours (including buffer for fixes and manual verification)

**Recommended Approach:**

- Phase 0 + 1: Session 1 (2 hours)
- Phase 2 + 3: Session 2 (2 hours)
- Phase 4: Session 3 (2 hours)

---

## Notes

- **No App Router Migration:** Staying on Pages Router to minimize scope
- **Framer Motion:** Upgrading to v11 but animations should be compatible
- **CSS Modules:** Can coexist with Tailwind temporarily, migrate gradually
- **Icons:** `react-icons` works with any framework, no changes needed
- **Custom Scrollbar:** Preserved in `globals.css`, no changes needed
- **Logo Animations:** Pure CSS animations, no changes needed

---

## References

- [Next.js 15 Migration Guide](https://nextjs.org/docs/app/building-your-application/upgrading)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Chakra UI → Tailwind Migration Patterns](https://chakra-ui.com/docs/styled-system/migrate-to-tailwind)
- [usehooks-ts Documentation](https://usehooks-ts.com)

---

**END OF PLAN**
