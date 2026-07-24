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
    note: 'backend, database, and cron scheduling in one; the crawl pipeline, change tracking, Discord bot, and public API all live server-side'
  - name: 'TanStack Query / Table / Virtual'
    note: 'the data grid stays interactive across thousands of endpoint rows'
  - name: 'json-diff-ts'
    note: 'field-level change detection that feeds Monitor and alerts'
  - name: 'bun, Zod, Remeda, OXC toolchain'
---

On OpenRouter, what you actually call is a provider endpoint, and the same model is often served by half a dozen providers at different prices, quantizations, context lengths, and feature support. Across a catalog this large, those differences can matter more than the model itself.

The data grid puts every endpoint side by side: a dense, filterable comparison across pricing, capabilities, modalities, and supported parameters, on TanStack Table and Virtual so it stays responsive over the whole catalog. There's deliberately no by-model lookup — the endpoint is the unit that matters.

Monitor adds the dimension the catalog never shows: time. Endpoints appearing and vanishing, prices moving, and capabilities like tool use or structured outputs switching on and off — activity that's otherwise invisible.

Discord alerts deliver a personalised Monitor for subscribed model-id patterns, generated and dispatched entirely server-side. A public API exposes the curated data as JSON.
