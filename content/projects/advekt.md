---
name: advekt
kicker: structured argumentation
date: Feb 2026
repo: https://github.com/deankerr/advekt
---

Design knowledge is fragile: it lives in conversations that expire, documents that drift, and heads that forget.

When humans and AI collaborate on a design, decisions get re-explained, assumptions accumulate invisibly, and both sides lose track of what's settled versus what's open.

advekt starts from the observation that correction is cheaper than generation — for both humans and AI — and builds a tool around that dynamic.

Designs live as claim trees built from four typed nodes: statements, contradictions, assumptions, and questions.

Two adversarial roles work the tree: the Architect grows and shapes it; the Challenger agitates, attaching challenges as leaf nodes that can't have children.

The tree's shape becomes a signal: dense branches are settled, sparse ones need attention, challenge-heavy ones are the design frontier.

One Bun process serves three surfaces from a single procedure layer: an MCP endpoint so agents can work the tree as tools, an oRPC API, and a React frontend.

The graph is an in-memory Graphology structure, and persistence is event-sourced without ceremony: trees are JSON action logs replayed on startup to rebuild state.

## Stack

- **Bun**: one server, one port, three surfaces
- **fastmcp**: the MCP endpoint that makes agents first-class participants
- **oRPC**: one procedure layer serving MCP, RPC, and the web UI, with Zod validation at the boundary
- **Graphology**: the in-memory directed graph (two node types, two edge types)
- **React + TanStack Query**: the web frontend
- **JSON action logs**: event-sourced persistence with no database
