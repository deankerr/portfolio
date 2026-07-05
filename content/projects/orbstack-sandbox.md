---
name: orbstack-sandbox
kicker: agent sandboxing
date: Feb 2026
repo: https://github.com/deankerr/orbstack-sandbox
---

OrbStack runs lightweight Linux VMs on macOS, but it mounts the host filesystem into every VM with full read/write access — home directories, SSH keys, and credentials are exposed to any process inside. That's fine for trusted use and dangerous the moment a coding agent is running unattended in a skip-permissions mode. orbstack-sandbox closes the gap with two shell scripts: one provisions an Ubuntu VM with a full dev toolchain, the other creates a sandboxed user for whom the macOS mount points appear as empty tmpfs directories, with no sudo inside — while the admin user keeps full access to everything, including the sandbox home directories, through POSIX ACLs rather than privilege escalation.

The mechanism is the interesting part. The sandboxed user's login shell isn't zsh — it's a wrapper that builds a private mount namespace with `unshare --mount`, overlays the host paths with empty tmpfs mounts, then drops to the unprivileged user with `setpriv` before handing over to the real shell. The subtle work is making that wrapper behave like a genuine shell: `unshare` and `setpriv` lose environment and quoting, so it re-exports `HOME`, points `SHELL` at the real zsh, and special-cases `-c` invocation to preserve word boundaries for tools that spawn `$SHELL -c`. It's framed honestly as a seatbelt, not a jail: it guards against accidental host damage and credential access from a well-meaning agent, not a determined attacker.

## Stack

- **POSIX shell** — two scripts, ~225 lines, no application code or dependencies
- **OrbStack** — driven entirely through the `orb` CLI
- **Linux primitives** — `unshare` mount namespaces, tmpfs overlays, `setpriv` privilege dropping, POSIX ACLs
