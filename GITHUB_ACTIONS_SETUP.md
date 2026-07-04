# GitHub Actions and Vercel Deployment

This repo is configured for this flow:

1. Create a branch from `main`.
2. Push your changes to that branch.
3. Open a pull request into `main`.
4. GitHub Actions runs lint and build checks (`pr-checks.yml`).
5. Merge the pull request.
6. Vercel automatically deploys `main` to production (the Vercel project is connected to this GitHub repo, so every push to `main` triggers a production deployment — no GitHub Action or secrets needed).

## Recommended GitHub Branch Protection

In GitHub:

`Settings` -> `Branches` -> `Add branch ruleset` or `Add branch protection rule`

Recommended settings for `main`:

- Require a pull request before merging
- Require status checks to pass before merging
- Select the `Lint and build` status check
- Require branches to be up to date before merging
- Block force pushes

## Deploying via GitHub Actions instead (optional)

If you ever want GitHub Actions to own production deployments (instead of Vercel's Git integration), restore a workflow that runs `vercel pull` / `vercel build` / `vercel deploy` with these repository secrets:

- `VERCEL_TOKEN` (create in Vercel -> Account Settings -> Tokens)
- `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` (from Vercel project settings, or `.vercel/project.json` after running `vercel link` locally — do not commit the `.vercel` folder)

Then disable automatic Git deployments in the Vercel project Git settings so the two paths don't both deploy.
