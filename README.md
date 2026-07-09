# QuiverDesk Marketing Website

Public marketing site for QuiverDesk — the universal business management platform
for service businesses (appointments, staff, billing, customers, notifications).

Built with **Next.js 14 (App Router) + Tailwind CSS + Framer Motion**, exported as
a fully static site (`output: 'export'`) so it deploys to GitHub Pages with no server.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Configuration

| Env var | Purpose | Default |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | QuiverDesk backend (register form) | `http://localhost:7080` |
| `NEXT_PUBLIC_APP_URL` | Web app (login links) | `http://localhost:4200` |
| `NEXT_PUBLIC_BASE_PATH` | Sub-path for GitHub Pages project sites | empty |

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the static
export and publishes it to GitHub Pages. Enable it once in
**Settings → Pages → Source: GitHub Actions**.

The register form calls the QuiverDesk API when reachable; on static-only hosting
without a tunnel it falls back to a "registration received" message, so the demo
never dead-ends.

## Pages

Home · Features · Industries · About · Contact · Register (5-step wizard) ·
Privacy Policy · Terms of Service · Refund Policy
