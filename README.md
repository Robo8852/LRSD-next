# LRSD Next.js

Migrated from the Vite + React prototype in `../LRSD-mock-prime-main/`.

## Stack
- Next.js 15 (App Router) • TypeScript • Tailwind CSS v4
- `motion`, `lucide-react`, `clsx`, `tailwind-merge`
- Jest (via `next/jest`) + @testing-library/react for fidelity tests

## Scripts
- `npm run dev` — start dev server at http://localhost:3000
- `npm run build` — production build
- `npm test` — run fidelity test suite
- `npm run lint` — ESLint

## Deploy
Target: Vercel. No extra env vars required.
