# GridzHelp Hosting Lab — Sprint 2 / Version 3

This release moves the project from a manually maintained dashboard toward a repeatable deployment system.

## What changed

- `release-manifest.json` is now the machine-readable release record.
- The dashboard loads its version, environment, branch, repository, SSL and target metadata from that manifest.
- `.github/workflows/deploy.yml` stages a controlled GitHub Actions FTP/FTPS deployment.
- Deployment is manual-trigger only and defaults to **dry run**.
- Version 2 is preserved under `releases/v2/`.

## Required GitHub repository secrets

Create these under **Settings → Secrets and variables → Actions**:

- `FTP_SERVER`
- `FTP_USERNAME`
- `FTP_PASSWORD`
- `FTP_PROTOCOL` — normally `ftps` if the host supports it
- `FTP_PORT`
- `FTP_SERVER_DIR` — the FTP-visible destination, likely `/hosting-lab.gridshelp.us/`

Do not commit credential values.

## First workflow execution

1. Commit this release to `main`.
2. Add the repository secrets.
3. Open **Actions → Hosting Lab Deploy → Run workflow**.
4. Leave `dry_run` set to `true`.
5. Review the proposed synchronization.
6. Only after the dry run is correct, rerun with `dry_run=false`.

The workflow uses `SamKirkland/FTP-Deploy-Action@v4.4.0` and `actions/checkout@v6`.
