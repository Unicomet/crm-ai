# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CRM-AI is a T3 Stack application (create-t3-app v7.40.0) using Next.js 15 App Router, React 19, PostgreSQL with Drizzle ORM, Tailwind CSS v4, and TypeScript in strict mode. Package manager is **pnpm**.

## Commands

```bash
pnpm dev              # Start dev server with Turbopack
pnpm build            # Production build
pnpm lint             # ESLint check
pnpm lint:fix         # Auto-fix lint issues
pnpm typecheck        # TypeScript type checking (tsc --noEmit)
pnpm format:check     # Prettier check
pnpm format:write     # Auto-format with Prettier

# Database (Drizzle ORM + PostgreSQL)
pnpm db:generate      # Generate migrations from schema changes
pnpm db:migrate       # Run pending migrations
pnpm db:push          # Push schema directly to DB (dev convenience)
pnpm db:studio        # Open Drizzle Studio GUI
```

## Architecture

- **`src/app/`** — Next.js App Router pages and layouts
- **`src/server/db/`** — Database layer
  - `schema.ts` — Drizzle table definitions; all tables use `createTable()` helper which prefixes names with `crm-ai_`
  - `index.ts` — Database connection (singleton in dev to survive HMR)
- **`src/env.js`** — Zod-validated environment variables via `@t3-oss/env-nextjs`; imported at build time by `next.config.js`
- **`src/styles/globals.css`** — Global styles with Tailwind CSS v4 (`@import "tailwindcss"` syntax)

## Key Conventions

- **Path alias:** `~/` maps to `src/` (e.g., `import { db } from "~/server/db"`)
- **ESM module:** Project uses `"type": "module"` in package.json
- **Drizzle ESLint rules:** Deletes and updates must include WHERE clauses (enforced by `drizzle/enforce-delete-with-where` and `drizzle/enforce-update-with-where`)
- **Unused variables:** Prefix with `_` to suppress warnings
- **Database URL:** Configured via `DATABASE_URL` env var (see `.env.example`)
