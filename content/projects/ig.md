---
name: ig
kicker: inference infrastructure
date: Jan 2026 – present
repo: https://github.com/deankerr/ig
---

Every app that generates AI content rebuilds the same plumbing: inference calls, async handling, storage, and metadata tracking.

ig centralises that behind one API: submit a request, get an artifact back with full provenance — the input parameters, model, seed, timing, and cost that produced it.

A Durable Object holds each request's lifecycle as the source of truth, progressively projecting state into D1; outputs land in R2; domain events publish to a Cloudflare Queue so consumers react without polling.

Tags propagate from a generation request onto its artifacts, carrying source-system IDs, routing info, and consumer state end to end.

When a request asks for `dimensions: "auto"`, a small LLM on the Workers AI binding classifies the prompt's intended orientation via structured output.

It runs in production on Cloudflare, serving web apps, a Discord bot, and CLI tools.

The entire stack — three Workers, D1, R2, Durable Objects, Queues, KV, secrets, custom domains, queue-consumer tuning — is declared in one ~130-line Alchemy file and provisioned with a single deploy command. State lives in Cloudflare rather than a local file, and two named production stages form a promotable blue-green arrangement.

## Stack

- **Cloudflare end to end**: Workers, D1, R2, Queues, Durable Objects, KV, Workers AI
- **Alchemy**: infrastructure-as-code for every resource, binding, and secret; reproducible from the repo
- **Hono + oRPC**: one API surface exposed as both REST and type-safe RPC, documented via OpenAPI
- **Drizzle over D1**: generations, artifacts, and tags as a relational schema at the edge
- **Runware**: the image-generation provider behind the orchestration layer
- **React 19 + TanStack** admin console for browsing artifacts and submitting requests
- **Turborepo + bun, Zod, OXC toolchain**
