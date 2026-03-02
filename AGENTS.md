# Repository Guidelines

## Project Structure & Module Organization
- Core app code lives in `src/`.
- Routes and layouts use Next.js App Router under `src/app/` (for example, `src/app/dashboard/page.tsx`, `src/app/layout.tsx`).
- Reusable UI components live in `src/components/`.
- Global styles are in `src/styles/globals.css`.
- Database code is in `src/server/db/` (`schema.ts` and DB client setup).
- Static assets are stored in `public/`.
- Root config files (`next.config.js`, `eslint.config.js`, `drizzle.config.ts`, `tsconfig.json`) define build and tooling behavior.

## Build, Test, and Development Commands
- `pnpm dev`: Start local development server (Turbopack) at `http://localhost:3000`.
- `pnpm build`: Create production build.
- `pnpm start`: Run the production server.
- `pnpm lint`: Run ESLint checks.
- `pnpm typecheck`: Run TypeScript checks (`tsc --noEmit`).
- `pnpm check`: Run lint + typecheck together.
- `pnpm format:write` / `pnpm format:check`: Format or verify formatting with Prettier.
- `pnpm db:push`, `pnpm db:migrate`, `pnpm db:generate`, `pnpm db:studio`: Manage Drizzle/Postgres schema lifecycle.

## Coding Style & Naming Conventions
- Language: TypeScript (`strict` mode enabled).
- Formatting: Prettier + `prettier-plugin-tailwindcss`; run before opening PRs.
- Linting: ESLint (Next.js config).
- Indentation: follow Prettier defaults (2 spaces).
- Naming:
  - Components: `PascalCase` (e.g., `ThemeToggle`).
  - Files: kebab-case or route-convention names (`page.tsx`, `layout.tsx`, `theme-toggle.tsx`).
  - Variables/functions: `camelCase`.

## Testing Guidelines
- No dedicated unit/integration test framework is currently configured.
- Minimum quality gate for changes: `pnpm check` and targeted manual QA in the affected routes.
- If adding tests, colocate as `*.test.ts`/`*.test.tsx` near source files and document the command in `package.json`.

## Commit & Pull Request Guidelines
- Current history uses short, imperative commit titles (e.g., `Update README`, `Clean homepage`). Keep subject lines concise and action-oriented.
- PRs should include:
  - Clear summary of what changed and why.
  - Linked issue/task when available.
  - Screenshots/GIFs for UI changes (dashboard/sidebar/theme updates).
  - Notes on DB or env changes (`.env`, migrations, schema updates).
