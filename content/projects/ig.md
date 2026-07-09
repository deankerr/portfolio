---
name: ig
kicker: inference infrastructure
date: Jan 2026 – present
repo: https://github.com/deankerr/ig
---

ig is inference infrastructure, not an end-user product: submit a generation request, get an artifact back, through one API regardless of model or modality. The guiding bias is that artifacts are the point — the inference job is transient plumbing, and what lasts is the library of generated content that accumulates over time. Every artifact keeps the input parameters, model, seed, timing, and cost that produced it, so provenance is never lost. R2 is cheap, so ig stores everything and asks questions later.

Each request's lifecycle is owned by a Durable Object as the source of truth, progressively projected into D1 as the generation advances; finished outputs land in R2, and domain events publish to a Cloudflare Queue so consumers react without polling. Async by default, with a sync mode for fast models.

Tags attached to a request propagate onto its artifacts — source-system IDs, routing info, user labels, short-lived consumer state — the searchable projection of why an artifact exists. And when a request leaves the output dimensions to ig, a small LLM on the Workers AI binding classifies the prompt's intended orientation.

It runs in production on Cloudflare, serving web apps, a Discord bot, and CLI tools. The whole stack — three Workers, D1, R2, Durable Objects, Queues, KV, secrets, custom domains — is declared in one ~140-line Alchemy file and provisioned with a single deploy, with two named production stages forming a promotable blue-green arrangement.

## Stack

- **Cloudflare end to end**: Workers, D1, R2, Queues, Durable Objects, KV, Workers AI
- **Alchemy**: infrastructure-as-code for every resource, binding, and secret; reproducible from the repo
- **Hono + oRPC**: one API surface exposed as both REST and type-safe RPC, documented via OpenAPI
- **Drizzle over D1**: generations, artifacts, and tags as a relational schema at the edge
- **Runware**: the image-generation provider behind the orchestration layer
- **React 19 + TanStack** admin console for browsing artifacts and submitting requests
- **Turborepo + bun, Zod, OXC toolchain**
