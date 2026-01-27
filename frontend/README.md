# BGCE-Stream Frontend

A visually striking audio streaming and voice chat platform built with **Next.js**, **React**, **Shadcn UI**, and **Tailwind CSS**.

## Features

- **Stream Room** — One broadcaster, unlimited listeners.
  - Status indicators and live chat for all participants.
- **Voice Chat Room** — Peer-to-peer style voice communication.
  - Grid layout with speaking animations and per-participant controls.
- **Modern UI** — Responsive layout with dark/light mode via `next-themes`.
- **Visuals** — Glassmorphism, smooth animations, and gradients.

## Tech Stack

| Layer     | Stack                                      |
|----------|---------------------------------------------|
| Framework| Next.js (App Router)                       |
| UI       | React 19, TypeScript                       |
| Styling  | Tailwind CSS, tailwindcss-animate          |
| Components| Shadcn UI (Radix Primitives)               |
| Icons    | Lucide React                               |

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Environment (optional)

For local config (e.g. API base URL), copy the example and set values in `.env.local`:

```bash
cp .env.example .env.local
```

Only use `NEXT_PUBLIC_*` for values that are safe to expose in the browser. See `.env.example` for notes.

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Build and run production

```bash
npm run build
npm run preview
```

## Scripts

| Script   | Description                    |
|----------|--------------------------------|
| `npm run dev`    | Start Next.js dev server      |
| `npm run build`  | Build for production          |
| `npm run preview`| Run production build locally  |
| `npm run lint`   | Run ESLint                    |

## Project structure

- `src/app/` — Next.js App Router pages and layouts
- `src/components/` — Reusable UI and room components
- `src/hooks/` — React hooks (e.g. mock room state)
- `src/lib/` — Utilities and shared logic

## Contributing

Pull requests are welcome. For larger changes, open an issue first to align on approach.

## License

[MIT](https://choosealicense.com/licenses/mit/)
