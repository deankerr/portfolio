---
name: archi
kicker: codebase tooling
date: Apr 2026
repo: https://github.com/deankerr/archi
---

Getting a bird's-eye view of an unfamiliar TypeScript codebase — what exports what, how modules connect, which classes expose which methods — usually means reading files one at a time or leaning on IDE features that show one hop of the graph at a time. archi points at a `tsconfig.json` and extracts the whole project's structure from the type-checked source via the TypeScript compiler API: every file's exports (kind, type-only flag, public class methods, `extends`/`implements`), imports, and re-exports, with module specifiers categorized as builtin, external, or internal and internal ones resolved back to concrete files.

The pipeline is deliberately split: extraction produces renderer-agnostic data, and rendering is just one consumer of it. The default output is a single self-contained HTML file — the extraction embedded as JSON, Cytoscape.js and dagre handling the interactive graph and layout — shareable with no server and no build step. Or skip the graph entirely and emit raw JSON to feed something else: another renderer, an analysis script, or an agent that needs a fast structural map of a project before it starts reading code. That second output is the quiet motivation — the same "understand a codebase quickly" need that agentic development keeps surfacing.

## Stack

- **ts-morph** — the TypeScript compiler API, doing the extraction from type-checked source rather than regex or import-parsing heuristics
- **Cytoscape.js + dagre** — the interactive dependency graph and its layout, inlined into one HTML file
- **commander** — the CLI surface
- **Bun** — runtime and tooling; two runtime dependencies total
