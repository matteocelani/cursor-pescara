# /commit

**Triggers**: `/commit`, "make a commit", "salva", "committa".

This project works on **`main`**. Keep commits small.

## Steps

### 1 — Read rules
Read [`AGENTS.md`](../../AGENTS.md).

### 2 — Inspect
```bash
git status
git diff
git diff --staged
git log -5 --oneline
```
STOP if there is nothing to commit.

### 3 — Stage relevant files
Stage only intentional project files. Do not commit secrets (`.env*`), credentials, or junk.

### 4 — Quick gate (when code changed)
```bash
pnpm lint
```
Optional: `pnpm build` if the change touches routing/layout/build config.

### 5 — Commit
Conventional Commits, English, focus on **why**:

```bash
git commit -m "$(cat <<'EOF'
type(scope): short description

Optional 1–2 lines of why.

EOF
)"
```

Types: `feat`, `fix`, `refactor`, `chore`, `style`, `docs`, `test`.

If the AI made the commit, add a `Co-Authored-By` trailer.

### 6 — Do not push
Unless the human explicitly asks, **do not** `git push`.

### 7 — Announce
Return the commit hash + subject.

## NEVER
- Force-push
- `--no-verify`
- Amend pushed commits
- Commit unrelated files
