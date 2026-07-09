---
name: archi
kicker: codebase tooling
date: Apr 2026
repo: https://github.com/deankerr/archi
---

Getting a bird's-eye view of an unfamiliar TypeScript codebase (what exports what, how modules connect) usually means reading files one at a time or leaning on IDE features that show one hop at a time. archi points at a `tsconfig.json` and extracts the whole project's structure from the type-checked source via the TypeScript compiler API: every file's exports, imports, and re-exports, resolved back to concrete files.

Extraction and rendering are deliberately decoupled: the extraction is renderer-agnostic, so the graph is just one thing the data could drive. The default output is one HTML file, the structure embedded as JSON with an interactive dependency graph on top, shareable with no server and no build step. It's an early exploration and dormant. The extraction works; the graph layout is still rough.

## Stack

- **ts-morph**: the TypeScript compiler API, doing the extraction from type-checked source rather than regex or import-parsing heuristics
- **Cytoscape.js + dagre**: the interactive dependency graph and its layout, embedded in one HTML file (the libraries load from a CDN)
- **commander**: the CLI surface
- **Bun**: runtime and tooling; two runtime dependencies total
