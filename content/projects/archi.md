---
name: archi
kicker: codebase tooling
date: Apr 2026
repo: https://github.com/deankerr/archi
---

Getting a bird's-eye view of an unfamiliar TypeScript codebase (what exports what, how modules connect) usually means reading files one at a time or leaning on IDE features that show one hop of the graph at a time.

archi points at a `tsconfig.json` and extracts the whole project's structure from the type-checked source via the TypeScript compiler API: every file's exports, imports, and re-exports, resolved back to concrete files.

The output is a single self-contained HTML file, the extraction embedded as JSON with an interactive dependency graph rendered on top of it — shareable with no server and no build step.

The motivation is the same "understand a codebase quickly" need that agentic development keeps surfacing.

## Stack

- **ts-morph**: the TypeScript compiler API, doing the extraction from type-checked source rather than regex or import-parsing heuristics
- **Cytoscape.js + dagre**: the interactive dependency graph and its layout, inlined into one HTML file
- **commander**: the CLI surface
- **Bun**: runtime and tooling; two runtime dependencies total
