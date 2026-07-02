# dd-test-nextjs

Fixture pnpm monorepo for testing [Direct Designer](https://github.com/SandBlock/direct-designer).
Mirrors the layout of a real monorepo (workspace package + Next.js app,
tiered CSS-variable design tokens) at a much smaller scale.

```
pnpm-workspace.yaml
packages/react-component-library/   '@dd/rcl' — marked designApp.includeInFigma
  src/components/                   Button, Badge, Card, Hero, PricingTier
  src/styles/                       tiered tokens: primitives, themes/, semantic, device, custom
  src/utils/themes.ts               themeNames (base, sunrise, ocean)
apps/app/classic/                   '@dd/classic' — Next.js (app router) consumer
```

Contains:

- 4 pages: `/`, `/about`, `/blog/[slug]` (dynamic), `/pricing` (route group)
- 5 presentational components with typed props: Button, Badge, Card, Hero, PricingTier,
  imported from `@dd/rcl` via the root `tsconfig.json` path alias
- 3 real brand themes (`base`, `sunrise`, `ocean`) — not light/dark — switching
  `data-theme` rebrands action/surface/heading colors across violet/amber/teal
  primitive scales
- Components consume tokens via inline styles with CSS variable + hex fallbacks
  (no Tailwind classes, no compile step required), so Direct Designer's esbuild
  preview pipeline can render them standalone
