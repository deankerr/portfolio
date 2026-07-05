---
name: omux
kicker: process management
date: Jan – Mar 2026
repo: https://github.com/deankerr/omux
---

Dev servers, watchers, and builds need to outlive the many short-lived turns of an AI agent — and both the agent and the developer need to observe and control the same processes. Plain tmux leaves friction on both sides: session names are arbitrary, there's no project scoping, and a crashed process just disappears. An agent can't reliably find "the dev server for *this* project" without bespoke plumbing. omux removes all of that with one idea: **the command is the session name.** Sessions are deterministic and project-scoped, so `omux run 'bun run dev'` is safe to call repeatedly — it no-ops if the process is already running, respawns it if it died, and the agent never tracks any state to find it again. The developer can `read` or `attach` to the same process without touching tmux internals.

The details are where the care shows. Everything runs on an isolated tmux server with a dedicated socket, so omux sessions never collide with your own tmux. The generated config sets `remain-on-exit`, so a crashed process stays visible with its exit status instead of vanishing, and a `pane-died` hook logs the status, signal, and timestamp. Every run streams its output to a per-project log file with ANSI codes stripped. The socket and paths are configurable through environment variables — which is also what lets the test suite run against a throwaway socket and temp dirs. It's a single-file CLI of about 500 lines with a 200-line test suite: small, finished, and in daily use underneath the other projects, where agents run their dev servers through it.

## Stack

- **TypeScript on Bun** — every tmux call goes through Bun's shell API (`Bun.$`)
- **tmux** — the only external dependency; omux adds naming, scoping, and failure visibility rather than reinventing the multiplexer
- **No runtime libraries** — one source file, one test file
