---
name: advekt
kicker: structured argumentation
date: Feb 2026
repo: https://github.com/deankerr/advekt
---

Design knowledge is fragile — it lives in conversations that expire and documents that drift, and when humans and AI collaborate the assumptions accumulate invisibly. advekt starts from one observation: correction is cheaper than generation, for both humans and AI. So instead of chasing consensus, a design grows through friction. It's a tree of typed claims — statements, and three kinds of challenge (contradiction, assumption, question) — that gets stronger by being agitated.

Two adversarial roles constrain the tree: the Architect makes canonical statements and shapes it; the Challenger can only attach challenges, which are always leaves. The tree's shape becomes the signal — dense branches are settled, sparse ones need work, challenge-heavy ones are the frontier.

One Bun process serves three surfaces from a single oRPC procedure layer — an MCP endpoint so agents are first-class participants, an HTTP API, and a React UI. The graph is in-memory Graphology with the domain invariants wrapped around it; persistence is event-sourced without a database, each tree a JSON log of actions replayed on startup.

## Stack

- **Bun**: one server, one port, three surfaces
- **fastmcp**: the MCP endpoint that makes agents first-class participants
- **oRPC**: one procedure layer serving MCP, RPC, and the web UI, with Zod validation at the boundary
- **Graphology**: the in-memory directed graph (two node types, two edge types)
- **React + TanStack Query**: the web frontend
- **JSON action logs**: event-sourced persistence with no database
