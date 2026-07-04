# GitHub Actions and Vercel Deployment

This repo is configured for this flow:

1. Create a branch from `main`.
2. Push your changes to that branch.
3. Open a pull request into `main`.
4. GitHub Actions runs lint and build checks.
5. Merge the pull request.
6. GitHub Actions deploys `main` to Vercel production.

## Required GitHub Secrets

Add these in GitHub:

`Settings` -> `Secrets and variables` -> `Actions` -> `New repository secret`

Required secrets:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

You can create `VERCEL_TOKEN` from:

`Vercel` -> `Account Settings` -> `Tokens`

You can get `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` from Vercel project settings, or by running `vercel link` locally and reading `.vercel/project.json`. Do not commit the `.vercel` folder.

## Recommended GitHub Branch Protection

In GitHub:

`Settings` -> `Branches` -> `Add branch ruleset` or `Add branch protection rule`

Recommended settings for `main`:

- Require a pull request before merging
- Require status checks to pass before merging
- Select the `Lint and build` status check
- Require branches to be up to date before merging
- Block force pushes

## Vercel Auto Deployment Note

If the Vercel project is already connected directly to GitHub, Vercel may also deploy automatically on pushes to `main`. To make GitHub Actions the only production deployment path, disable automatic Git deployments in the Vercel project Git settings.
