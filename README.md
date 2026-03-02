# CRM-AI

An AI-powered CRM for managing personal contacts. Built with the [T3 Stack](https://create.t3.gg/).

## Tech Stack

- [Next.js 15](https://nextjs.org) — App Router, React Server Components, Turbopack
- [React 19](https://react.dev)
- [Drizzle ORM](https://orm.drizzle.team) — Type-safe PostgreSQL queries and migrations
- [Tailwind CSS v4](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org) — Strict mode

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v20+)
- [pnpm](https://pnpm.io) (v10+)
- [PostgreSQL](https://www.postgresql.org)

### Setup

```bash
# Install dependencies
pnpm install

# Configure environment variables
cp .env.example .env
# Edit .env with your DATABASE_URL

# Push the database schema
pnpm db:push

# Start the dev server
pnpm dev
```

The app will be running at [http://localhost:3000](http://localhost:3000).

## Scripts

| Command              | Description                          |
| -------------------- | ------------------------------------ |
| `pnpm dev`           | Start dev server with Turbopack      |
| `pnpm build`         | Production build                     |
| `pnpm start`         | Start production server              |
| `pnpm lint`          | Run ESLint                           |
| `pnpm typecheck`     | Run TypeScript type checking         |
| `pnpm format:write`  | Format code with Prettier            |
| `pnpm db:generate`   | Generate Drizzle migrations          |
| `pnpm db:migrate`    | Run pending migrations               |
| `pnpm db:push`       | Push schema directly to DB           |
| `pnpm db:studio`     | Open Drizzle Studio GUI              |
