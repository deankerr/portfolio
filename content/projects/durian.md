---
name: durian
kicker: durable agents
date: Feb 2026
repo: https://github.com/deankerr/durian
---

Most agent systems are stateless responders: a request arrives, a loop runs, everything evaporates.

durian is built around a working theory of the **durable agent**, a persistent, multi-context entity. Durable means three things: an identity that outlives any single session and can see channel history it wasn't awake for; an awareness of _who_ wrote each message and where it's scoped, across channels whose membership changes; and serial processing, so that messages arriving in batches from different authors are handled one at a time and participants never see contradictory output from concurrent inference.

The actor model is that theory's execution substrate. Each agent and each channel is an independent RivetKit actor holding its own state, so persistent identity, channel scoping, and serialised processing fall out with no queue in the middle.

A full vertical slice shipped: isolated state, transport-agnostic channels, streaming with tool calls across a Discord bot and a management UI. The durable core (long-term memory and identity) was still on the roadmap when the project went dormant, leaving open a question the space keeps circling: actors or queues for stateful, streaming, tool-using agents?

## Stack

- **RivetKit**: actors as the unit of isolation; agent, channel, and registry actor definitions
- **OpenRouter**: the sole inference provider. One API, any model
- **Elysia on Bun**: the actor server
- **TanStack Start + React**: the management frontend
- **Discord.js v14**: a gateway bot as a thin translation layer over actor RPC
- **Turborepo**: five workspaces, with typed env validation shared across server, web, and bot
