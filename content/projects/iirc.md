---
name: iirc
kicker: plugin-driven event streaming
date: Jan 2026 - present
repo: https://github.com/deankerr/iirc
stack:
  - name: 'Bun + Hono + oRPC'
    note: 'typed server, shared endpoint contracts, SSE publisher'
  - name: 'SQLite via Drizzle'
    note: 'the persistent event log'
  - name: 'SolidJS + Tailwind'
    note: 'fine-grained web client, derived state over synced state'
  - name: 'Turborepo, TypeScript, Zod, OXC toolchain'
---

The server does two things: stream a persistent event log down to clients, and broadcast commands up to plugins. Everything protocol-specific (connections, state, how a message renders) is plugin-defined, so a new protocol is another plugin rather than a server change. IRC is the one implemented today; the server assumes nothing about it.

Events flow down: a plugin emits, the server persists to SQLite and pushes to every client over SSE. Commands flow up: the client sends one, the server broadcasts it to all plugins, and each self-selects on an opaque context string like `irc:localhost/6697:#dev`. Commands are fire-and-forget; the event stream is the sole source of truth.

That opacity is the boundary. Reconnection, buffer routing, self-echo: everything IRC-specific lives in the plugin, one layer above the iirc-lib protocol library. The SolidJS web client renders it all in a multi-buffer layout, deriving view state rather than syncing it.
