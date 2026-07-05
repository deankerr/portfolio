---
name: advekt
kicker: structured argumentation
date: Feb 2026
repo: https://github.com/deankerr/advekt
---

Design knowledge is fragile: it lives in conversations that expire, documents that drift, and heads that forget. When humans and AI collaborate on a design, decisions get re-explained, assumptions accumulate invisibly, and both sides lose track of what's settled versus what's open. advekt starts from an observation — correction is cheaper than generation, for both humans and AI — and builds a tool around that dynamic. Designs live as claim trees with a deliberately narrow vocabulary of four typed nodes: statements, contradictions, assumptions, and questions. Two adversarial roles work the tree: the Architect grows and shapes it; the Challenger agitates, attaching challenges as leaf nodes that can't have children — they exist to provoke a response, get resolved, and strengthen the tree. The tree's shape becomes a signal: dense branches are settled, sparse ones need attention, challenge-heavy ones are the design frontier.

The architecture is one Bun process serving three surfaces from a single procedure layer: an MCP endpoint so AI agents can work the tree as tools, a type-safe oRPC API, and a React frontend — one definition, three interfaces. The graph itself is an in-memory Graphology structure, and persistence is event-sourced without ceremony: trees are JSON action logs recording every mutation, replayed on startup to rebuild state. Node IDs are deterministic, history is preserved for free, and current state is always derived, never stored.

## Stack

- **Bun** — one server, one port, three surfaces
- **fastmcp** — the MCP endpoint that makes agents first-class participants
- **oRPC** — one procedure layer serving MCP, RPC, and the web UI, with Zod validation at the boundary
- **Graphology** — the in-memory directed graph (two node types, two edge types)
- **React + TanStack Query** — the web frontend
- **JSON action logs** — event-sourced persistence with no database
