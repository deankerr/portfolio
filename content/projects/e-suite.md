---
name: e-suite
kicker: origin · 2024
date: Oct 2024 - Mar 2025
repo: https://github.com/deankerr/e-suite
stack:
  - name: 'Next.js + React on Vercel'
    note: 'the frontend, in a Turborepo monorepo'
  - name: 'Convex'
    note: 'backend, database, file storage, and scheduling; convex-ents for entity edges and scheduled deletion'
  - name: 'fal.ai'
    note: 'image generation; LLM/TTS providers for text and speech'
  - name: 'Radix UI + Tailwind'
    note: 'the component layer; Jotai for artifact state'
  - name: 'Sandboxed iframe + postMessage'
    note: "the artifact renderer's isolation and error channel"
---

A multi-modal AI content platform from late 2024: threaded conversations where any message can trigger a generation run. Text and speech flow through LLM and TTS providers, images through fal.ai; outputs are tracked, organised into collections, and produced through reusable patterns that parameterise a run. The concerns the later projects are built on first took shape here: inference orchestration, artifact tracking, reusable run configuration.

My early, self-hosted take on LLM artifacts, begun November 2024, roughly five months after Anthropic popularised the concept: the renderer itself, not a consumer of someone else's API. When a model returns a fenced HTML, SVG, or Mermaid block, the UI can open it as a live artifact instead of printing the source.

HTML renders in a sandboxed iframe (`allow-scripts` only, a CSP, no referrer), and errors thrown inside the frame are caught there and surfaced back to the host over postMessage. Extraction is automatic: any code block gets a save-as-artifact affordance, with the HTML `<title>` pulled out for naming.

The backend is Convex-native throughout: mutations, queries, actions, crons. Entities are modelled as a graph of edges and indexes, and images live in Convex file storage with blur placeholders. It's parked now, frozen part-way through a UI migration; what it proves is where the ideas started, not current polish.
