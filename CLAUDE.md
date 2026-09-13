# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

This is the starter project for a Claude Code course (codewithmosh.com). It's a small React expense/finance tracker that **intentionally** ships with a bug, poor UI, and messy code — these are meant to be found and fixed as course exercises, not assumed to be accidents needing silent cleanup.

## Commands

```bash
npm install      # install dependencies
npm run dev      # start Vite dev server (http://localhost:5173)
npm run build    # production build
npm run preview  # preview the production build
npm run lint     # eslint over the whole project
```

There is no test suite configured.

## Architecture

This is a standard Vite + React 19 SPA with no router and no state management library — everything lives in a single component.

- `src/main.jsx` — entry point, mounts `<App />`.
- `src/App.jsx` — the entire application: transaction state (seeded with hardcoded sample data), the add-transaction form, income/expense/balance summary calculations, and the filterable transactions table all live in this one component. There is no decomposition into subcomponents yet.
- `src/App.css` / `src/index.css` — styling.

Key things to know when working in `App.jsx`:
- Transaction `amount` values are stored and read as **strings** (they come straight from a text `<input>`), but summary totals are computed via `reduce((sum, t) => sum + t.amount, 0)` — this causes string concatenation instead of numeric addition once amounts accumulate. This is the known intentional bug referenced above.
- `categories` is a fixed array duplicated across the add-transaction form and the filter dropdown.
- Filtering (`filterType`, `filterCategory`) is done with sequential `.filter()` calls directly in the render body, not memoized.
