---
name: omux
kicker: process management
date: Jan–Mar 2026
repo: https://github.com/deankerr/omux
---

Dev servers, watchers, and builds need to outlive the many short-lived turns of an AI agent, and both the agent and the developer need to observe and control the same processes.

Plain tmux leaves friction on both sides: session names are arbitrary, there's no project scoping, and a crashed process just disappears, so an agent can't reliably find "the dev server for _this_ project" without bespoke plumbing.

omux removes all of that with one idea: **the command is the session name.**

Sessions are deterministic and project-scoped, so `omux run 'bun run dev'` is safe to call repeatedly: it no-ops if the process is running, respawns it if it died, and the agent tracks no state to find it again.

The developer can `read` or `attach` to the same process without touching tmux internals.

Everything runs on an isolated tmux server, so omux sessions never collide with your own tmux.

A crashed process stays visible with its exit status instead of vanishing, and every run streams to a per-project log file with ANSI codes stripped.

## Stack

- **TypeScript on Bun**: every tmux call goes through Bun's shell API (`Bun.$`)
- **tmux**: the only external dependency; omux adds naming, scoping, and failure visibility rather than reinventing the multiplexer
- **No runtime libraries**: one source file, one test file
