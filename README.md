# Micro Apps — Portfolio Site

> Landing page for Micro Apps, a collection of simple, no-subscription mobile utilities by Tom Murton.

🌐 **Live site:** [Coming soon via GitHub Pages]

## Apps Featured

| App | Description | Price |
|-----|-------------|-------|
| **AI Launcher Widget** | Quick-launch buttons for AI apps from your home screen | £0.99 |
| **Parcel Countdown** | Track deliveries with visual countdown timers | £1.49 |
| **Sound Mixer** | Mix ambient sounds for sleep and focus | £1.99 |

## Tech

- **Pure HTML/CSS/JS** — no frameworks, no build step, no dependencies
- Responsive design (mobile-first)
- Dark mode via `prefers-color-scheme`
- Accessible (semantic HTML, ARIA labels, keyboard navigation)
- Scroll-reveal animations via IntersectionObserver
- Respects `prefers-reduced-motion`
- Print styles included

## Structure

```
├── index.html      # Main landing page
├── privacy.html    # Privacy policy
├── styles.css      # All styles (light + dark)
├── app.js          # Minimal JS (scroll effects, reveals)
└── README.md
```

## Deploy to GitHub Pages

1. Create a repo on GitHub (e.g. `micro-apps-site`)
2. Push this directory:

```bash
cd /tmp/micro-apps-site
git init
git add .
git commit -m "Initial commit — Micro Apps landing page"
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/micro-apps-site.git
git push -u origin main
```

3. Go to **Settings → Pages → Source: Deploy from a branch → main / root**
4. Your site will be live at `https://YOUR_USERNAME.github.io/micro-apps-site/`

## Custom Domain

To use a custom domain:

1. Add a `CNAME` file with your domain (e.g. `apps.tommurton.com`)
2. Configure DNS with your registrar
3. Enable HTTPS in GitHub Pages settings

## Customisation

- **Colours:** Edit CSS custom properties in `:root` (in `styles.css`)
- **Content:** Edit `index.html` directly — it's all semantic and well-structured
- **App icons:** Replace emoji in `.app-icon span` with `<img>` tags for real app icons
- **Store links:** Update `.store-badge` elements with actual App Store / Google Play URLs

## License

© Tom Murton. All rights reserved.
