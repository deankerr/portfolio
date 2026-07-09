---
name: durian
kicker: actor-based agents
date: Feb 2026
repo: https://github.com/deankerr/durian
---

Most agent systems run a loop and evaporate: a request arrives, inference streams back, nothing persists. durian is an exploration of a different execution model, running multiple agents that each keep their own state, stream output, and call tools, without a central coordinator in the middle.

The actor model is the substrate. Each agent and each channel is an independent RivetKit actor holding its own state, indexed by a singleton registry, so the unit of isolation is the actor, not a row in a database or a job on a queue. A Discord bot and a management UI sit on top of the same actor server. There are no state migrations by design: a schema change wipes and restarts, which keeps an experimental codebase free of migration cruft.

A working vertical slice shipped (isolated actor state, streaming with tool calls, across a Discord bot and a web UI) before it went dormant, leaving the question it was built to probe: actors or queues for stateful, streaming, tool-using agents?

## Stack

- **RivetKit**: actors as the unit of isolation; agent, channel, and registry actor definitions
- **OpenRouter**: the sole inference provider. One API, any model
- **Elysia on Bun**: the actor server
- **TanStack Start + React**: the management frontend
- **Discord.js v14**: a gateway bot as a thin translation layer over actor RPC
- **Turborepo**: five workspaces, with typed env validation shared across server, web, and bot
