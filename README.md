# dd-test-nextjs

Fixture Next.js (app router) project for testing [Direct Designer](https://github.com/SandBlock/direct-designer).

Contains:

- 4 pages: `/`, `/about`, `/blog/[slug]` (dynamic), `/pricing` (route group)
- 5 presentational components with typed props: Button, Badge, Card, Hero, PricingTier
- `@/*` tsconfig path alias, exercising Direct Designer's alias rewriting
