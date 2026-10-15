# LUKNA Cloud Worker PoC — rules for Claude

This is a dummy repository with no secrets and no production code.

- Only edit files under `src/` and `.lukna/`. Never edit `test/`, `.github/`, `CLAUDE.md`, or `package.json`.
- Work on the branch named in the task. Never push to `main`. Never open a pull request.
- Run the tests with `node --test --test-reporter=tap test/sum.test.js`.
- If tests fail, fix `src/` and run them again, at most 3 test runs in total.
- Before the final push, write:
  - `.lukna/test.tap`: the exact TAP output of your last test run
  - `.lukna/result.json`: `{"jobId": "<job id>", "status": "passed" | "failed", "testRuns": <n>, "changedFiles": [...], "summary": "<one sentence>"}`
- Commit with message `lukna-poc: <job id>` and push the branch once. Do not install packages. Do not access the network except git push.
- Your own report is not trusted as proof. LUKNA verifies the result independently.
