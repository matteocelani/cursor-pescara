# AGENTS.md — Cafe Cursor Pescara

Single source of truth for AI agents on this repo. Keep things simple.

Slash commands live in `.agent/commands/` (`commit.md`, `pr.md`).

---

## Project

Small **Next.js + TypeScript** site for **Cafe Cursor Pescara** (29 Aug 2026).

Homepage (`/`) = event info with visual tiles. Credits page (`/crediti`) = redeem
flow, step by step. Guide page (`/cursor`) = explainer of Cursor over 6 levels
and 25 chapters, from "what is a program" to MCP.

`/cursor` rules:

- **No references to the event, the city or the date.** It must stay reusable
  for any Cafe Cursor, any day. Event-specific copy lives on `/` and `/crediti`.
- Six levels, named for what the reader gains (`Capire cos'è`, `Come funziona`,
  `Installarlo e provarlo`, `Usarlo bene`, `Usarlo per lavoro`, `Estenderlo`).
  Never name a level for what the reader lacks.
- **Difficulty is monotonic.** Every chapter carries a `tier` (1 Super base →
  4 Avanzato) rendered as a traffic-light badge, and the tier must never
  decrease from one chapter to the next. Reordering a chapter means checking
  the whole sequence.
- Levels 1–2 assume zero computer literacy: they explain what a program is and
  what AI is before naming anything. Concrete before abstract — the glossary
  lives at level 4, not level 1. Early chapters are short; the long
  explanations belong to levels 5–6.
- Levels 2 and 3 end with explicit stop points telling the reader it's fine to
  stop there.
- Procedures: one action per step, each with what the reader should SEE, plus a
  `Se qualcosa va storto` block. Use the `Procedure` component.
- Optional depth goes in a `Disclosure` or `DeepDive`, collapsed, so a reader
  who doesn't need it scrolls past in one line.
- Plain Italian. No idioms that only make sense once you already understand,
  and no jargon left undefined on first use.
- Banned words: ovviamente, semplicemente, basta, come sai, è facile.

**Near-term direction**: keep `/crediti` as the lightweight credits helper (QR/checklist). Do not overbuild — ship one useful surface at a time.

Public repository. Do not push unless the human explicitly asks.

---

## Stack (locked)

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- shadcn/ui (radix base, `src/components/ui/`) + `lucide-react` icons
- `motion` for animation (`src/components/motion.tsx`)
- `pnpm`
- Content/copy in `src/lib/` (`event.ts` for the event, `cursor.ts` for the guide)
- UI pieces in `src/components/`
- Pages in `src/app/`

## Design system

Cursor's own palette: warm near-black `#14120b` in dark, warm off-white
`#faf9f6` in light, brand orange (`#ff7a29` dark, `#c94600` light). Tokens live
in `src/app/globals.css` — never hardcode a colour in a component.

- Headings are `font-normal` with negative tracking. No bold in prose.
- Body text is 16px (`--text-base: 1rem`) with `line-height: 1.6`, and text
  colours clear 7:1 contrast. These pages are read by non-developers.
- Rounded, not sharp: `--radius: 0.875rem`. Prefer `rounded-lg` on cards.
- Hover changes the border, not the background. Use the `card-hover` utility.
- Animation goes through `src/components/motion.tsx` (`Reveal`, `Stagger`,
  `StaggerItem`, `ReadingProgress`). Decoration that is not motion — bloom,
  glow border — stays in `globals.css`.
- **Never wrap the hero of a page in `Reveal`.** Motion renders `opacity: 0`
  into the server HTML, so a page whose first screen is animated shows blank
  if hydration fails. Above the fold stays static.
- Every motion component honours `useReducedMotion`.
- Theme switch (light / dark / system) lives in `SiteFooter`, on every page.
- Icons: `lucide-react` for generic, SVGR for brand glyphs
  (`src/assets/icons/*.svg` + barrel, imported with `?component`).

---

## Workflow (simple)

- Work **always on `main`**. No feature-branch ceremony unless the human asks.
- Prefer small, clear commits.
- English in code / commit messages. Italian is fine in conversation and user-facing copy.
- Do **not** push or open a remote PR unless the human asks.
- Do **not** over-engineer: no auth, no DB, no design system library, no monorepo.

---

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm install` | Install deps |
| `pnpm dev` | Local server |
| `pnpm build` | Production build |
| `pnpm lint` | Lint |

Before finishing a task that changes code: `pnpm lint` and/or `pnpm build` when practical.

---

## Product rules

1. Primary title on the homepage: **Cafe Cursor Pescara**.
2. Event facts and Luma URL live in `src/lib/event.ts` — update there first.
3. Prefer icon tiles / short labels over walls of text.
4. Help first-timers: laptop, free Cursor account, docs, credits on-site.
5. Credits copy must match what the organisers actually hand out. The
   non-obvious facts to keep: redeem requires being signed in **in the same
   browser**, personal accounts only (not Team), and redeeming adds credits to
   the balance but applies them to the **next invoice**.
6. Credits page stays a helper — ask before adding any backend.

---

## Code rules

- Prefer Server Components unless interactivity is needed.
- Keep files small and obvious.
- No drive-by refactors.
- No new dependencies without asking.

---

## Reading order

1. This file.
2. Files touched by the task.
3. `.agent/commands/*.md` when running `/commit` or `/pr`.
