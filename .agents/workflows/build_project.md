---
description: Install dependencies, typecheck, and build the Next.js project
---

# Build Project

Step-by-step workflow to install dependencies, typecheck, and build this Next.js app (Firebase Studio → Antigravity export).

## Prerequisites

- Node.js >= 20 (`node --version`)
- Working directory: project root (contains `package.json` and `next.config.ts`)

## Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Typecheck**
   ```bash
   npm run typecheck
   ```
   Fallback if the script is missing:
   ```bash
   npx -y tsc --noEmit
   ```

3. **Production build**
   ```bash
   npm run build
   ```

## Verification

- `npm run typecheck` exits 0 with no TypeScript errors
- `npm run build` completes successfully and lists generated routes
