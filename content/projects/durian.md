---
name: durian
kicker: durable agents
date: Feb 2026
repo: https://github.com/deankerr/durian
stack:
  - name: 'RivetKit'
    note: 'actors as the unit of isolation; agent, channel, and registry actor definitions'
  - name: 'OpenRouter'
    note: 'the sole inference provider. One API, any model'
  - name: 'Elysia on Bun'
    note: 'the actor server'
  - name: 'TanStack Start + React'
    note: 'the management frontend'
  - name: 'Discord.js v14'
    note: 'a gateway bot as a thin translation layer over actor RPC'
  - name: 'Turborepo'
    note: 'five workspaces, with typed env validation shared across server, web, and bot'
---

durian is built around a working theory of the durable agent: a persistent, multi-context entity, rather than the usual stateless responder where a request arrives, a loop runs, and everything evaporates. Durable meaning an identity that outlives any single session, an awareness of who wrote each message and which channel it's scoped to, and serial processing, so participants never see contradictory output from concurrent inference.

The actor model is that theory's execution substrate. Each agent and each channel is an independent RivetKit actor holding its own state, indexed by a singleton registry — so the unit of isolation is the actor, not a row in a database or a job on a queue, and persistent identity and channel scoping fall out of it. A Discord bot and a management UI sit on top of the same actor server.

A working vertical slice shipped — isolated actor state, streaming with tool calls, across the bot and the UI — but the durable core, long-term memory and identity, are still on the roadmap.
