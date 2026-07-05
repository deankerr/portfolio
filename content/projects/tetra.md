---
name: tetra
kicker: inference client
date: Mar 2026 – present
repo: https://github.com/deankerr/tetra
---

Most chat UIs couple the inference stream to the React lifecycle: navigating away kills the request, switching sessions disrupts generation, and component state is the source of truth. tetra inverts that. The runtime writes streaming snapshots into TinyBase — a reactive in-memory database — and the UI is a pure reader. The runtime has no React dependency; the inference adapter has no TinyBase dependency. A request started in one session keeps running when you leave it, sessions stream concurrently, and any surface — web, CLI, Tauri desktop, another tab, another device — sees the same state converge. The store is mergeable (CRDT), so one shape serves local persistence, same-origin tab sync over BroadcastChannel, and opt-in cross-device sync through a Cloudflare Durable Object.

The primitives underneath are the real subject. Sessions are durable trees of messages linked by parent, not linear transcripts — threads, fork points, and continuations are derived views over the tree, so branching, regeneration, and transcript editing fall out of the structure rather than being bolted on. Run configuration (model, system prompt, tools, provider options) is a named, persisted recipe shared by every surface, not hidden UI settings. Tools run through a credential-gated registry driven by a multi-step loop over the AI SDK — adding one is a registry entry, not new infrastructure. The UI exposes the whole system rather than simplifying it: a model picker over the live OpenRouter catalog, provider-options and prompt editors, fork controls, a usage meter, transcript export. OpenRouter is the sole inference provider; the user brings their own key. The primitives are deliberately shaped for what comes next — sub-agents spawned from the same session machinery, composable prompt fragments — designed for, not yet built.

## Stack

- **TinyBase** — the load-bearing choice: local, durable, reactive state between runtime and UI, with synchronous reads and CRDT merge semantics
- **Bun monorepo, 10 workspaces** — UI-agnostic core logic, typed store definitions, and a reusable zod-derived TinyBase `db` layer as separate packages
- **AI SDK + OpenRouter provider** — inference and the tool-execution loop
- **React 19, TanStack Router, Vite** — the web SPA; **Tauri** wraps it for desktop
- **Cloudflare Workers + Durable Objects** — WebSocket sync backend with SQLite storage
- **Zod at the boundaries, Remeda for transforms**, OXC toolchain
