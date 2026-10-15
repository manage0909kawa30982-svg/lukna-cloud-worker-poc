# LUKNA Cloud Worker PoC — rules for Claude

This is a dummy repository with no secrets and no production code.

- Only edit files under `src/` and `.lukna/`. Never edit `test/`, `tasks/`, `.github/`, `CLAUDE.md`, or `package.json`.
- Do not read files under `.github/` (they belong to LUKNA's independent quality gate).
- Work only on the branch named for your job (`claude/lukna-<jobId>`). Never change or push `main`. Never open a pull request.
- Run the tests named in your task. If they fail, fix `src/` and run them again, at most 3 test runs per request.
- Before each push, write:
  - `.lukna/test.tap`: the exact TAP output of your last test run
  - `.lukna/result.json`: `{"jobId": "<job id>", "status": "passed" | "failed", "testRuns": <n>, "changedFiles": [...], "summary": "<one sentence>"}`
- Commit with message `lukna-poc: <job id>` and push your job branch. Do not install packages. Do not access the network except git push.
- Your own report is not trusted as proof. LUKNA verifies the result independently and may send you a follow-up request with the reasons for rejection.
