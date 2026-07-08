---
name: tetra
kicker: isomorphic inference client
date: Mar 2026 – present
repo: https://github.com/deankerr/tetra
---

tetra is built around an isomorphic inference engine: the same streaming runtime runs unchanged in the browser SPA and the CLI.

Chat UIs don't usually split this way — the framework is the source of truth, component state owns the conversation, and the inference stream is bound to the component lifecycle, so the engine can never leave React.

tetra pulls it out. The runtime writes streaming snapshots into TinyBase, a reactive in-memory database, and every UI reads the same store — the runtime has no React dependency.

The typed surface over the store is tinydb, built for the project: zod schemas define the tables, values, and indexes — object and array cells included — and a `db` handle is derived from them, with query methods inferred from the index declarations. The React hooks are a mapped-type transform of the same read surface: derived, not restated.

Because the store is mergeable (CRDT), a single shape serves local persistence, tab sync over BroadcastChannel, and opt-in cross-device sync through a Cloudflare Durable Object. A session in the desktop app and the same session in the terminal converge on identical state.

Underneath, sessions are durable trees of messages, so branching, regeneration, and transcript editing fall out as derived views rather than bolted-on features. Run configuration is a named recipe shared by every surface, and tools are entries in a credential-gated registry.

OpenRouter is the sole inference provider, and the aim is to lean into it fully — embracing its features rather than treating it as one more OpenAI-compatible endpoint, the way most clients do. The engine has had the attention so far; that deeper integration is what's next.

## Stack

- **TinyBase**: the load-bearing choice. Local, durable, reactive state between runtime and UI, with synchronous reads and CRDT merge semantics
- **Bun monorepo, 10 workspaces**: UI-agnostic core logic, typed store definitions, and tinydb as separate packages
- **AI SDK + OpenRouter provider**: inference and the tool-execution loop
- **React 19, TanStack Router, Vite**: the web SPA; **Tauri** wraps it for desktop
- **Cloudflare Workers + Durable Objects**: WebSocket sync backend with SQLite storage
- **Zod, Remeda, OXC toolchain**
