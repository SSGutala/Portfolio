---
description: Start the Next.js preview server and verify the app
---

# Preview Project

Step-by-step workflow to start the local preview server for this Next.js app.

## Prerequisites

- Dependencies installed (`npm install`)
- Working directory: project root

## Steps

1. **Start the development server**
   ```bash
   npm run dev
   ```
   Default port from `package.json`: **9002**.

   To bind all interfaces (e.g. remote preview):
   ```bash
   npm run dev -- --hostname 0.0.0.0
   ```

   Or with an explicit port (Firebase Studio / IDX style):
   ```bash
   npm run dev -- --port $PORT --hostname 0.0.0.0
   ```

2. **Open the app**
   - Local: [http://localhost:9002](http://localhost:9002)
   - Wait until the terminal shows `Ready` before opening

3. **Smoke-check**
   - Home page (`/`) loads without critical console errors
   - Project detail routes under `/projects/[slug]` resolve (e.g. `/projects/aria`)

## Stop

Stop the server with `Ctrl+C` in the terminal running `npm run dev`.
