---
name: advekt
kicker: structured argumentation
date: Feb 2026
repo: https://github.com/deankerr/advekt
stack:
  - name: 'Bun'
    note: 'one server, one port, three surfaces'
  - name: 'fastmcp'
    note: 'the MCP endpoint that makes agents first-class participants'
  - name: 'oRPC'
    note: 'one procedure layer serving MCP, RPC, and the web UI, with Zod validation at the boundary'
  - name: 'Graphology'
    note: 'the in-memory directed graph (two node types, two edge types)'
  - name: 'React + TanStack Query'
    note: 'the web frontend'
  - name: 'JSON action logs'
    note: 'event-sourced persistence with no database'
---

Design knowledge is fragile. It lives in conversations that expire and documents that drift, and when humans and AI collaborate the assumptions accumulate invisibly. advekt starts from one observation: correction is cheaper than generation, for both humans and AI. So instead of chasing consensus, a design grows through friction. It's a tree of typed claims that gets stronger by being agitated: statements, and three kinds of challenge (contradiction, assumption, question).

Two adversarial roles constrain the tree: the Architect makes canonical statements and shapes it; the Challenger can only attach challenges, which are always leaves. The tree's shape becomes the signal. Dense branches are settled, sparse ones need work, challenge-heavy ones are the frontier.

One Bun process serves three surfaces from a single oRPC procedure layer: an MCP endpoint so agents are first-class participants, an HTTP API, and a React UI. The graph is in-memory Graphology with the domain invariants wrapped around it; persistence is event-sourced without a database, each tree a JSON log of actions replayed on startup.
