---
name: ig
kicker: inference infrastructure
date: Jan 2026 - present
repo: https://github.com/deankerr/ig
stack:
  - name: 'Cloudflare end to end'
    note: 'Workers, D1, R2, Queues, Durable Objects, KV, Workers AI'
  - name: 'Alchemy'
    note: 'infrastructure-as-code for every resource, binding, and secret; reproducible from the repo'
  - name: 'Hono + oRPC'
    note: 'one API surface exposed as both REST and type-safe RPC, documented via OpenAPI'
  - name: 'Drizzle over D1'
    note: 'generations, artifacts, and tags as a relational schema at the edge'
  - name: 'Runware'
    note: 'the image-generation provider behind the orchestration layer'
  - name: 'React 19 + TanStack'
    note: 'admin console for browsing artifacts and submitting requests'
  - name: 'Turborepo + bun, Zod, OXC toolchain'
---

ig is inference infrastructure, not an end-user product: submit a generation request, get an artifact back, through one API regardless of model or modality. Every artifact keeps the input parameters, model, seed, timing, and cost that produced it, so provenance is never lost. R2 is cheap, so ig stores everything and asks questions later.

Each request's lifecycle is owned by a Durable Object as the source of truth, progressively projected into D1 as the generation advances; finished outputs land in R2, and domain events publish to a Cloudflare Queue so consumers react without polling. Async by default, with a sync mode for fast models.

When a request leaves the output dimensions to ig, a small LLM on the Workers AI binding classifies the prompt's intended orientation.

It runs in production on Cloudflare, serving web apps, a Discord bot, and CLI tools. The whole stack (three Workers, D1, R2, Durable Objects, Queues, KV, secrets, custom domains) is declared in one ~140-line Alchemy file and provisioned with a single deploy, with two named production stages forming a promotable blue-green arrangement.
