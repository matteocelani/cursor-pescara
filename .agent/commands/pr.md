# /pr

**Triggers**: `/pr`, "open a PR", "pull request".

Default workflow for this repo is **commit on `main`**. Use `/pr` only if the human explicitly wants a pull request.

## Steps

### 1 — Confirm intent
Ask/confirm: branch name, base branch, and whether to push. If unclear, STOP.

### 2 — Read rules
Read [`AGENTS.md`](../../AGENTS.md).

### 3 — Ensure commits exist
```bash
git status
git log --oneline -10
```

### 4 — Push branch (only if asked)
```bash
git push -u origin HEAD
```

### 5 — Create PR (only if asked)
Use `gh pr create` with a short Summary + Test plan. English body.

### 6 — Return the PR URL

## NEVER
- Open a PR unprompted
- Force-push to `main`
- Overcomplicate with long templates
