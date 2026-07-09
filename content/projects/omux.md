---
name: omux
kicker: process management
date: Jan-Mar 2026
repo: https://github.com/deankerr/omux
---

Dev servers, watchers, and builds need to outlive an AI agent's many short-lived turns, and the agent and the developer need to observe and control the same processes. Plain tmux makes that awkward. Session names are arbitrary, there's no project scoping, and a crashed process just vanishes, so an agent can't reliably find "the dev server for _this_ project" without bespoke plumbing. omux removes the friction with one idea: **the command is the session name.**

Sessions are deterministic and project-scoped, so `omux run 'bun run dev'` is safe to call repeatedly: it no-ops if the process is up, respawns it if it died, and the agent tracks nothing to find it again. The developer can `read` or `attach` to the same process without touching tmux internals. It all runs on an isolated tmux socket so it never collides with your own sessions, a crashed process stays visible with its exit status instead of disappearing, and every run streams to a clean per-project log.

## Stack

- **TypeScript on Bun**: every tmux call goes through Bun's shell API (`Bun.$`)
- **tmux**: the only external dependency; omux adds naming, scoping, and failure visibility rather than reinventing the multiplexer
- **No runtime libraries**: one source file, one test file
