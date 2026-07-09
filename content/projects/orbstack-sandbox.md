---
name: orbstack-sandbox
kicker: agent sandboxing
date: Feb 2026
repo: https://github.com/deankerr/orbstack-sandbox
---

OrbStack runs lightweight Linux VMs on macOS, but it mounts the host filesystem into every VM with full read/write access — home directories, SSH keys, and credentials, exposed to any process inside. Fine for trusted use, and dangerous the moment a coding agent is running unattended in a skip-permissions mode.

orbstack-sandbox closes the gap with two shell scripts: one provisions an Ubuntu VM with a full dev toolchain, the other creates a sandboxed user for whom the macOS mount points appear as empty tmpfs directories, with no sudo inside. The trick is the login shell — not a shell, but a wrapper that builds a private mount namespace with `unshare --mount`, overlays the host paths with empty tmpfs, then drops to the unprivileged user with `setpriv` before handing over to the real shell. The admin user keeps full access to everything, including the sandbox homes, through POSIX ACLs rather than privilege escalation.

It's framed as a seatbelt, not a jail — it guards against accidental host damage and credential access from a well-meaning agent, not a determined attacker.

## Stack

- **POSIX shell**: two scripts, ~225 lines, no application code or dependencies
- **OrbStack**: driven entirely through the `orb` CLI
- **Linux primitives**: `unshare` mount namespaces, tmpfs overlays, `setpriv` privilege dropping, POSIX ACLs
