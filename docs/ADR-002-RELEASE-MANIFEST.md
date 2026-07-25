# Architecture Decision Record — ADR-002

## Decision

Use a public `release-manifest.json` as the deployment contract for static GridzHelp sites.

## Context

Version 2 displayed release metadata directly in HTML. That was sufficient for a visual proof but would require editing multiple files for each deployment and could drift from the actual release package.

## Consequences

- The dashboard reads one canonical machine-readable release record.
- Automation can validate the same manifest before deployment.
- Future CoreFlow integrations can consume the same schema.
- The public manifest must never contain credentials, customer private data, internal secrets, or privileged infrastructure details.
