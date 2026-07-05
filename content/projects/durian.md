---
name: durian
kicker: durable agents
date: Feb 2026
repo: https://github.com/deankerr/durian
---

Most agent systems are stateless responders — a request arrives, a loop runs, everything evaporates. durian is built around a working theory of the **durable agent**: a persistent, multi-context entity. Durable means identity that outlives any single session — the agent exists even with no active channel to talk through, and can see channel history it wasn't awake for. It means social awareness: knowing _who_ wrote each message rather than a bare `role: user`, and where each message is scoped, across channels whose membership changes over time. It means no privileged transport. And it means serial processing with async behaviour: messages arrive in batches from different authors and channels — some not addressed to the agent at all — and are processed one at a time, so participants never see contradictory output from concurrent inference; a reply isn't owed immediately, either — the agent can run tasks first, or answer at start and again at completion.

The actor model is that theory's execution substrate. Each agent and each channel is an independent RivetKit actor holding its own state, streaming responses, and calling tools (Jina web search and page reading) — isolated stateful actors map directly onto persistent identity, channel scoping, and serialized processing, with no queue or orchestrating loop in the middle. A full vertical slice worked end-to-end across a five-workspace Bun monorepo: an Elysia + RivetKit actor server, a TanStack Start management UI, and a Discord.js gateway bot — web first, deliberately, because Discord's interaction model (3-second tokens, no real streaming) would have shaped the agent in ways that don't generalise. What shipped is the substrate for durability — isolated state, transport-agnostic channels, streaming with tool calls on both surfaces. The durable core itself, long-term memory and identity, was still on the roadmap when the project went dormant; the question it leaves open — actors versus queues for stateful, streaming, tool-using agents — is one the agent-infrastructure space keeps circling back to.

## Stack

- **RivetKit** — actors as the unit of isolation; agent, channel, and registry actor definitions
- **OpenRouter** — the sole inference provider: one API, any model
- **Elysia on Bun** — the actor server
- **TanStack Start + React** — the management frontend
- **Discord.js v14** — a gateway bot as a thin translation layer over actor RPC
- **Turborepo** — five workspaces, with typed env validation shared across server, web, and bot
