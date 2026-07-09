---
name: '@deankerr/iirc-lib'
kicker: IRC protocol library
date: 2026 · published to npm
repo: https://github.com/deankerr/iirc-lib
live: https://www.npmjs.com/package/@deankerr/iirc-lib
stack:
  - name: 'TypeScript'
    note: 'transport → typed events → runtime'
  - name: 'Zero runtime dependencies'
    note: 'ESM only, Node ≥ 22 or Bun'
  - name: 'Published on npm'
    note: 'built with tsdown'
  - name: 'Bun test'
    note: '175 tests, table-driven against protocol fixtures, no network needed'
---

IRC is a 35-year-old protocol, loosely specified; every server implements it a little differently. The library's job is normalization: it turns that inconsistent wire behaviour into one coherent, typed event stream you narrow by command, without pretending the protocol is simpler than it is. The raw line is always there underneath.

You bring the transport (any `Duplex` stream, a real socket or an in-memory mock) and it speaks the protocol; it never opens the connection or hides the wire. The surface is kept deliberately small: built-in behaviour is just functions on the same event stream a consumer uses, and a session is one runtime, one transport, one connection. No reconnecting, no routing. That's policy, and it stays with the consumer.
