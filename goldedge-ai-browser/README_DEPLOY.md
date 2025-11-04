
# GoldEdge AI Browser - Deployment Guide

## GitHub Setup
1. Push this repo to GitHub under username: Josephwere
2. Push first version tag:
   git add .
   git commit -m "Initial auto-update setup"
   git tag v1.0.0
   git push origin main --tags

GitHub Actions will build & publish your installers automatically.

## Vercel Deployment
1. Connect this repo to Vercel.
2. Deploy the site (it will serve /pages/index.html).
3. Users can download latest version from the landing page.

## Notes
- Maintainer Email: goldedgelabs@gmail.com
- Electron auto-updater fetches updates from GitHub Releases automatically.
