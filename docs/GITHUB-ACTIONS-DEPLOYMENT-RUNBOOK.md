# GitHub Actions Deployment Runbook v0.1

## Safety model

- Manual trigger only.
- Dry run is the default.
- Repository secrets hold credentials.
- The workflow excludes documentation, rollback packages and GitHub metadata.
- A validation job runs before deployment.
- A smoke test runs only after a real deployment.

## Exact target

FTP-visible server directory should map to:
`/home/gridsus/hosting-lab.gridshelp.us`

From the current FTP login, the likely value is:
`/hosting-lab.gridshelp.us/`

Verify this before the first non-dry-run execution.

## Rollback

The workflow does not yet automate rollback. Version 2 remains under `releases/v2/` and should be restored manually if a deployment fails.
