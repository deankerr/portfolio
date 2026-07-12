# diagram standards

The rules that keep the set feeling like one hand drew it. Adopted after the
spree; new and rebuilt diagrams follow this, older scenes migrate as they're
touched.

## canvas

- `viewBox="0 0 240 144"` — always zero-origin, never offset minX/minY.
- 5:3 aspect. The center is exactly **(120, 72)**.
- **12-unit grid.** Margins 12 (content box 12..228 × 12..132). Place rows,
  columns, and key nodes on multiples of 12; half-steps (6) for fine detail.
- Useful rhythms: 4 rows at y = 14/50/86/122 (step 36); 3 rows at
  y = 24/72/120 (step 48); 10-column matrix at x = 30 + 20c.
- The hero reel adds its progress ticks *inside* the same canvas (bottom
  margin band), not by growing the viewBox.

## ink

- Structure: `currentColor` at 0.15–0.55 opacity. The followed thing:
  `var(--accent)`. Node/box fills: `var(--surface)`.
- Stroke widths 1 / 1.25 / 1.5. Cells 7–9 units, rx 1.5. Nodes r 2.5–5.5.
- Dashed strokes are for connections and flows; structural edges (trees,
  containment) are solid at low opacity.

## animation

- One **master loop** per scene, a whole number of seconds (6–10s).
- Sub-loops (dash flows, pulses, orbits) must **divide the master evenly**,
  so every loop boundary lands in the same phase. e.g. master 9s → pulses at
  1.5s/3s, flows at 1.8s; master 7s → flow 1.4s.
- Dash-flow offsets must be an integer multiple of the dash period
  (`3 5` → offset -8, `3 6` → -9) or the loop visibly jumps.
- **Persistent elements** (anything that stays visible until the scene
  resets) get their own explicit keyframes sharing a common fade window
  (~90–96%). Never stagger them with `animation-delay` — the delay shifts
  the fade too, and the element ghosts across the loop boundary.
- `animation-delay` is fine for **transient travelers** (dots that fully
  appear and vanish mid-loop) and for infinite phase-offset twins
  (ring-buffer cursors, flicker groups).
- Write the **full animation shorthand with the keyframe name** — a nameless
  `animation: 7s linear infinite` base rule gets minified to
  `animation: none` and silently kills everything.
- Prefix keyframe names per component (`adv-`, `cm-`, …); Astro does not
  scope them.

## reduced motion

- All animation lives inside `@media (prefers-reduced-motion: no-preference)`.
- The base markup must read as a complete static diagram: structure and
  outcome visible, transient actors (travelers, sweeps) hidden via markup
  `opacity="0"`.
