# Deepcomet AI Website

The official website for Deepcomet AI — Accelerating Civilization's Future through Vertical AI Integration.

**Live URL:** [https://ai.deepcomet.space](https://ai.deepcomet.space)

## Tech Stack

- **Framework:** [Nuxt 4](https://nuxt.com/) with Vue 3 & TypeScript
- **Styling:** [TailwindCSS](https://tailwindcss.com/)
- **Deployment:** [GitHub Pages](https://pages.github.com/) via GitHub Actions
- **Custom Domain:** `ai.deepcomet.space`

## Project Structure

```
app/
├── components/         # Reusable Vue components
│   ├── AnimatedCard.vue
│   ├── CometBackground.vue
│   ├── ScrollReveal.vue
│   └── TextTypewriter.vue
├── layouts/
│   └── default.vue     # Site layout with nav & footer
├── pages/              # File-based routing
│   ├── index.vue       # Homepage
│   ├── about.vue
│   ├── projects.vue    # Ecosystem / Projects
│   ├── roadmap.vue
│   ├── contact.vue
│   ├── docs/
│   │   ├── index.vue   # Documentation hub
│   │   ├── aurelia-intro.vue
│   │   ├── skyos.vue
│   │   └── compiler.vue
│   └── blog/
│       ├── index.vue   # Blog listing
│       └── release-0-1-alpha.vue
public/
├── CNAME               # Custom domain config
└── .nojekyll           # Disable Jekyll processing
```

## Setup

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open `http://localhost:3000` in your browser.

## Build & Deploy

### Local Production Build

```bash
pnpm generate    # Static site generation
pnpm preview   # Preview the build locally
```

### Automatic Deployment

Pushing to the `main` branch triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`) which builds and deploys to GitHub Pages automatically.

## DNS Configuration

To use the custom domain `ai.deepcomet.space`, add these **A records** at your domain registrar:

| Type | Host                | Value              |
|------|---------------------|--------------------|
| A    | ai.deepcomet.space  | 185.199.108.153    |
| A    | ai.deepcomet.space  | 185.199.109.153    |
| A    | ai.deepcomet.space  | 185.199.110.153    |
| A    | ai.deepcomet.space  | 185.199.111.153    |

Or use a **CNAME** record pointing to `yourusername.github.io`.

## License

© 2026 Deepcomet AI. All rights reserved.
