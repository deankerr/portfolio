---
name: ORCA
kicker: OpenRouter Capability Analysis
date: May 2025 - present
repo: https://github.com/deankerr/orca
live: https://orca.orb.town
stack:
  - name: 'Next.js 16 / React 19 on Vercel'
    note: 'the frontend, in a Turborepo monorepo'
  - name: 'Convex'
    note: 'backend, database, and cron scheduling in one; the crawl pipeline, snapshot archive, change tracking, Discord bot, and public API all live server-side'
  - name: 'TanStack Query / Table / Virtual'
    note: 'the data grid stays interactive across thousands of endpoint rows'
  - name: 'json-diff-ts'
    note: 'field-level snapshot diffing that feeds Monitor and alerts'
  - name: 'bun, Zod, Remeda, OXC toolchain'
---

The OpenRouter catalog only ever shows you the present. Pricing moves, endpoints appear and vanish, capabilities shift, and none of that history is recorded anywhere you can see it. ORCA gives the catalog a memory.

It crawls OpenRouter on a schedule, stores each result as an immutable snapshot, and diffs consecutive snapshots into a field-level change history. Every surface in ORCA is a view onto that one history.

The endpoints data grid is the primary one: a dense, filterable comparison across pricing, capabilities, modalities, and supported parameters, on TanStack Table and Virtual so it stays responsive over the whole catalog. Monitor replays the diff stream as a change feed: model, endpoint, and provider activity that's otherwise invisible. Discord alerts deliver a personalised Monitor for subscribed model-id patterns, generated and dispatched entirely server-side. A public API exposes the curated data as JSON.

It's built for people who read context lengths, quantization, and reasoning-token support closely and copy model slugs straight into their code.
