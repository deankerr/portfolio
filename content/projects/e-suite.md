---
name: e-suite
kicker: origin · 2024
date: Oct 2024 – Mar 2025
repo: https://github.com/deankerr/e-suite
---

e-suite is the origin point: a multi-modal AI content platform built through late 2024, where the later projects' concerns (inference orchestration, artifact tracking, reusable run configuration) first took shape.

Conversations are threaded, and any message can trigger a generation run: text and speech through LLM and TTS providers, images through fal.ai. Outputs are tracked, organised into collections, and produced through reusable patterns that parameterise a run.

The backend is Convex-native throughout, with mutations, queries, actions, and crons, entities modelled as a graph of edges and indexes, and images in Convex file storage with blur placeholders.

The part that holds up best is an early, self-hosted take on LLM artifacts, built about five months after Anthropic popularised the concept — the renderer itself, not a consumer of someone else's API.

When a model returns a fenced HTML, SVG, or Mermaid block, the UI offers to open it as a live artifact instead of printing source.

HTML renders in a sandboxed iframe with a CSP and script isolation.

## Stack

- **Next.js + React on Vercel**: the frontend, in a Turborepo monorepo
- **Convex**: backend, database, file storage, and scheduling; `convex-ents` for entity edges and scheduled deletion
- **fal.ai**: image generation; LLM/TTS providers for text and speech
- **Radix UI + Tailwind**: the component layer; **Jotai** for artifact state
- **Sandboxed iframe + postMessage**: the artifact renderer's isolation and error channel
