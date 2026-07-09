---
name: tetra
kicker: isomorphic inference client
date: Mar 2026 – present
repo: https://github.com/deankerr/tetra
---

Most chat UIs bind the inference stream to the React component lifecycle: switch sessions or navigate between views and the in-flight request stalls or dies, because component state owns the conversation. tetra inverts that. The runtime writes streaming snapshots into TinyBase — a reactive in-memory database — and every UI is a pure reader. The runtime has no React dependency at all.

So a generation keeps streaming as you switch sessions and move between views — the components unmount and remount, the request doesn't care. The same engine drives the browser SPA, the desktop app, and the CLI unchanged. Because the store is mergeable (CRDT), one shape serves local persistence, tab sync over BroadcastChannel, and opt-in cross-device sync through a Cloudflare Durable Object — a session in the terminal and the same session on the desktop converge on identical state.

Underneath, a session is a durable tree of messages rather than a linear transcript, so branching, regeneration, and transcript editing are derived views instead of bolted-on features. Run configuration is a shared recipe every surface reads, and tools run over the same primitives.

OpenRouter is the sole inference provider, and the intent is to lean into it fully rather than treat it as one more OpenAI-compatible endpoint. The runtime has had the attention so far; that deeper integration is next.

## Stack

- **TinyBase**: the load-bearing choice — local, durable, reactive state between runtime and UI, with synchronous reads and CRDT merge
- **tinydb**: a typed layer over it, built for the project — zod-derived tables, inferred queries, and React hooks as a mapped-type transform of the read surface
- **Bun monorepo, 10 workspaces**: UI-agnostic core, typed schemas, sync worker, and CLI as separate packages
- **AI SDK + OpenRouter**: inference and the tool-execution loop
- **React 19 / TanStack Router / Vite**, wrapped by **Tauri** for desktop
- **Cloudflare Workers + Durable Objects**: WebSocket sync with SQLite storage
- **Zod, Remeda, OXC toolchain**
