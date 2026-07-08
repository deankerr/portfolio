---
name: ORCA
kicker: OpenRouter Capability Analysis
date: May 2025 – present
repo: https://github.com/deankerr/orca
live: https://orca.orb.town
---

OpenRouter's catalog of models, providers, and endpoints changes constantly.

ORCA crawls OpenRouter hourly, stores every result as an immutable snapshot, and diffs consecutive snapshots into a field-level change history.

The endpoints data grid is the primary surface: a dense, filterable comparison of models and endpoints across pricing, capabilities, modalities, and supported parameters, built on TanStack Table and Virtual so it stays responsive over the full catalog.

Monitor turns the diff stream into a change feed: model, endpoint, and provider activity that is otherwise invisible.

Discord alerts deliver a personalised Monitor for subscribed model-id patterns, generated and dispatched entirely server-side.

A public API exposes curated model and endpoint data as JSON.

It's built for people who read context lengths, quantization, and reasoning-token support closely and copy model slugs straight into their code. The presentation favours technical precision over simplification.

## Stack

- **Next.js 16 / React 19 on Vercel**: the frontend, in a Turborepo monorepo
- **Convex**: backend, database, and cron scheduling in one. The crawl pipeline, snapshot archive, change tracking, Discord bot, and public API all live server-side
- **TanStack Query / Table / Virtual**: the data grid stays interactive across thousands of endpoint rows
- **json-diff-ts**: field-level snapshot diffing that feeds Monitor and alerts
- **bun, Zod, Remeda, OXC toolchain**
