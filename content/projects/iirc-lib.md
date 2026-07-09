---
name: '@deankerr/iirc-lib'
kicker: IRC protocol library
date: 2026 · published to npm
repo: https://github.com/deankerr/iirc-lib
live: https://www.npmjs.com/package/@deankerr/iirc-lib
---

IRC is a 35-year-old protocol, loosely specified — every server implements it a little differently. The library's job is normalization: it turns that inconsistent wire behaviour into one coherent, typed event stream you narrow by command, without pretending the protocol is simpler than it is. The raw line is always there underneath.

You bring the transport — any `Duplex` stream, a real socket or an in-memory mock — and it speaks the protocol; it never opens the connection or hides the wire. The surface is kept deliberately small: built-in behaviour is just functions on the same event stream a consumer uses, and a session is one runtime, one transport, one connection. No reconnecting, no routing — that's policy, and it stays with the consumer.

## Stack

- **TypeScript**: transport → typed events → runtime
- **Zero runtime dependencies**: ESM only, Node ≥ 22 or Bun
- **Published on npm**: built with tsdown
- **Bun test**: 175 tests, table-driven against protocol fixtures, no network needed
