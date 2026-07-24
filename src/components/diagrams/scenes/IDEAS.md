# diagram spree — brainstorm

The method: don't illustrate the project literally — find the classic CS concept
underneath its copy and diagram _that_, in the house style (currentColor grays,
one accent, surface fills, dashed strokes, small geometry, quiet loops).

Canvas: 234×143 user units (the hero scene frame). Shared vocabulary:

- **cells** — state, catalogs, storage (opacity as noise/value)
- **dashed lines + flow** — connections carrying traffic
- **travel dots** — a unit of work in flight (accent = the one we follow)
- **rings/pulses** — activity, processing
- **accent** — the thing that changed / the thing we care about

## keyword harvest (from project copy)

- **ORCA** — crawl, schedule, immutable snapshot, field-level diff, change feed,
  filter, subscribe, dispatch, memory/history, data grid, virtual scroll
- **tetra** — CRDT, merge, converge, sync, BroadcastChannel, reactive store,
  pure readers, message tree, branching, streaming snapshot, isomorphic
- **ig** — queue, Durable Object, lifecycle, projection, R2, artifacts
  accumulate, tags propagate, provenance, blue-green, classify, plumbing
- **e-suite** — artifacts, sandboxed iframe, postMessage, generation runs,
  entity graph, threads, multi-modal, collections
- **iirc** — append-only event log, SSE fan-out, plugins, commands broadcast,
  fire-and-forget, opaque context, derived state
- **iirc-lib** — normalization, wire → typed events, narrowing, transport,
  raw line underneath, dialects
- **omux** — sessions, deterministic names, respawn, no-op, multiplexer,
  isolated socket, crash visibility
- **orbstack-sandbox** — mount namespace, tmpfs overlay, privilege drop,
  seatbelt, boundary, ACL bypass
- **durian** — actors, mailboxes, serial processing, identity, registry,
  channel scoping
- **advekt** — typed claim tree, challenges as leaves, adversarial roles,
  dense/sparse branches, agitation
- **archi** — extraction, exports/imports, dependency graph, bird's-eye view

## built (see components in this folder)

1. **snapshot diff** (ORCA) — two snapshot columns, a scan pass; changed rows
   blip accent and write marks onto a diff rail. _diff / immutability_
2. **change feed** (ORCA) — an event stream hits a filter gate; most pass
   through, the matching one deflects down to a subscriber. _pub-sub dispatch_
3. **crawl cycle** (ORCA) — a crawler orbits a source on a schedule; each pass
   deposits a stratum onto a growing snapshot stack. _polling / accretion_
4. **crdt merge** (tetra) — two replicas diverge, accumulate different ops,
   then converge into one interleaved sequence. _CRDT convergence_
5. **message tree** (tetra) — a trunk forks; the active branch highlights and
   a cursor walks it, then the other branch takes over. _branching / derived views_
6. **broadcast sync** (tetra) — one write ripples out as a wavefront; every
   receiver's state cell flips as it passes. _BroadcastChannel fan-out_
7. **event log** (iirc) — an append-only tape grows behind a writer; readers
   chase at their own offsets. _log / cursors_
8. **queue & artifacts** (ig) — jobs pass through a gate one at a time and
   land as artifacts in a library grid. the job is transient; the artifact
   stays. _queue / durable output_
9. **tag propagation** (ig) — chips on a request ride the edges to each of its
   artifacts. _provenance_
10. **sandbox overlay** (orbstack-sandbox) — a boundary draws itself; the
    directories inside hollow out to empty mounts; a process dot bounces off
    the wall. _namespace / isolation_
11. **actor mailbox** (durian) — messages arrive concurrently; each actor
    consumes strictly one at a time; the second message waits. _serial processing_
12. **normalizer** (iirc-lib) — three jagged dialects enter a box; one even,
    typed pulse train exits over the faint raw line. _protocol normalization_
13. **diffusion** (ig / e-suite) — a noise field resolves step by step into a
    coherent accent form, then dissolves back. _denoising / generative_

## built, round two (the full backlog)

14. **sorting pass** (ORCA) — a pass sweeps unsorted bars and leaves them
    sorted in its wake; two bar sets swapped by complementary clip reveals.
    _classic sort / the grid orders itself_
15. **blue-green** (ig) — traffic rides the live lane, then the cutover:
    one stage drains, the other picks up. _zero-downtime deploys_
16. **hash buckets** — items rain into the hash bar and bin; two collide and
    the bucket chains an accent overflow cell. _hashing / collision_
17. **ring buffer** — writer orbits with the unread region trailing as an
    accent arc; the reader rides its tail. continuous, no reset.
    _streaming backpressure_
18. **state machine** — a token walks legal transitions with a pause at each
    state, then attempts a transition that doesn't exist: refused mid-path,
    bounced back. _lifecycle / invariants_
19. **adversarial tree** (advekt) — the claim tree draws on level by level;
    challenges attach as accent thorns at the leaves of the sparse branch.
    _agitation as signal_
20. **dependency extract** (archi) — a compiler pass sweeps the scattered
    modules and the import edges draw themselves in behind it.
    _stroke draw-on / extraction_
21. **session grid** (omux) — a slot crashes and its exit marker stays
    visible; the same run command re-lights the same slot. _determinism_
22. **artifact frame** (e-suite) — fenced code transmits into a sandboxed
    frame and renders; the error arcs back over postMessage. _isolation with
    an error channel_
23. **token stream** — variable-width tokens land line by line, the caret
    rides the frontier and blinks at idle. _LLM streaming_
24. **sliding window** — a window glides over the tape and back (ping-pong,
    no reset); inside vivid, outside decayed. _context budgets_
25. **two clocks** (tetra) — one edit on each device, sync arcs both ways,
    identical state after. _cross-device convergence_

## still unbuilt (round three fodder)

- **backpressure valve** — a fast producer, a slow consumer, and a buffer
  that visibly fills until the producer throttles. _(streams)_
- **bloom filter** — items set bits in a shared row; a lookup lights its
  bits: all present (maybe) vs one missing (definitely not). _(membership)_
- **radix trie** — keys descend a character tree, sharing prefixes; a lookup
  traces a shared path then diverges. _(routing tables)_
- **quorum** — a write fans to five replicas, three ack, commit; the
  stragglers catch up late. _(consensus)_
- **garbage sweep** — a mark pass traces reachable cells from roots, then
  the unmarked ones fade out. _(GC)_
