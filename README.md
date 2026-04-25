# Moath Haimour — Personal Portfolio Website (Assignment 4)

A polished, fully-featured personal portfolio website built with HTML5, CSS3, and vanilla JavaScript.
Showcases real projects, skills, and education from my résumé, with live GitHub API integration,
a typing animation, a skills section, an education timeline, compound project filtering, dark/light
mode, a back-to-top button, and a mobile hamburger menu.

**🌐 Live Demo**: *(Deploy via GitHub Pages or Netlify — see Deployment below)*

---

## ✨ Features

| Feature | Details |
|---------|---------|
| **Typing Animation** | Hero subtitle cycles through developer roles automatically |
| **Skills Section** | Four categorised skill cards (Backend, Databases, Frontend, DevOps & Cloud) |
| **Education Timeline** | Visual timeline showing KFUPM degree (2022–2027) |
| **Real Projects** | 5 actual projects from résumé (Driving License, E-Commerce, Rehab Platform, SoccerPro API, Bank System) |
| **Dark / Light Mode** | Persisted in `localStorage` |
| **GitHub API** | Live repo cards fetched from `github.com/MoathEssa` |
| **Quote API** | Random quotes from `api.quotable.io` |
| **Project Filters** | Filter by category (Web / API / Tools), difficulty (Beginner / Advanced), and free-text search |
| **Project Sort** | Name A→Z/Z→A, Oldest/Newest first |
| **Visitor Greeting** | Personal greeting with XSS-safe input sanitisation |
| **Site Timer** | Elapsed time displayed in footer |
| **Visit Counter** | Per-browser visit count via `localStorage` |
| **Back to Top** | Floating button visible after 400 px scroll |
| **Hamburger Menu** | Collapsible nav for mobile (≤ 480 px) |
| **Scroll Reveal** | Cards animate into view as user scrolls |
| **Contact Form** | Client-side validation with ARIA live messages |

---

## 📁 Project Structure

```
202182130-MoathHaimour-assignment4/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── presentation/
│   ├── slides.pdf          ← add before submission
│   └── demo-video.mp4      ← add before submission
└── .gitignore
```

---

## 🚀 Running Locally

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Internet connection (for the GitHub Repos and Quote sections)
- No build tools or package managers required

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/MoathEssa/202182130-MoathHaimour-assignment4.git
   cd 202182130-MoathHaimour-assignment4
   ```

2. **Open in browser**:

   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js
   npx http-server
   ```

   Then visit `http://localhost:8000`.

   Or simply double-click `index.html` — all features work without a server except the Fetch-API sections (GitHub / Quote), which require an internet connection.

---

## 🤖 AI Integration Summary

**Tools used**: GitHub Copilot, Claude (Anthropic)

| Task | Tool | My Contribution |
|------|------|-----------------|
| Typing animation loop | Copilot suggested skeleton | Rewrote timing logic, added delete phase, cycled roles array |
| Skills card layout | Copilot suggested flexbox | Adapted CSS variables and dark-mode tokens |
| Education timeline CSS | Claude explained approach | Wrote all styles myself; adapted for dark mode |
| Hamburger menu | Claude explained toggle pattern | Implemented ARIA `aria-expanded` correctly |
| Project descriptions | Claude rephrased | Verified against résumé line by line before committing |
| XSS mitigation | ChatGPT (Assignment 3 carry-over) | `createElement` + `textContent` pattern retained throughout |

Full details in [docs/ai-usage-report.md](docs/ai-usage-report.md).

---

## ⚙️ Technical Stack

| Technology | Purpose |
|-----------|---------|
| HTML5 | Semantic markup, ARIA roles/labels |
| CSS3 | Custom properties, Grid, Flexbox, `@keyframes` |
| JavaScript ES6+ | DOM manipulation, `async/await`, Fetch API, `localStorage` |
| GitHub REST API | Live public repository cards |
| Quotable API | Random inspirational quotes |

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|-----------|--------|
| > 768 px | Desktop — multi-column grids |
| 481–768 px | Tablet — adjusted font sizes |
| ≤ 480 px | Mobile — single column, hamburger nav |

---

## 🎨 Colour Palette

| Role | Value |
|------|-------|
| Primary | `#667eea` Purple Blue |
| Secondary | `#764ba2` Purple |
| Accent | `#f093fb` Pink |
| Text | `#2d3748` Dark Gray |
| Background | `#ffffff` White |

---

## 🔒 Security

- GitHub API data rendered with `createElement` + `textContent` — no `innerHTML` on external content
- GitHub repo URLs validated to start with `https://github.com/` before being set as `href`
- Visitor name sanitised (strips `< > " ' &`) before `localStorage` storage (XSS protection)
- No secrets or credentials embedded in the codebase
- All outbound links use `rel="noopener noreferrer"`

---

## 🌐 Deployment

### GitHub Pages

1. Push to GitHub → **Settings → Pages → Branch: `main` / `root`**
2. Live at: `https://moathessa.github.io/202182130-MoathHaimour-assignment4/`

### Netlify / Vercel

Connect the repository and deploy with default settings — no build step needed.

---

## 📖 Documentation

- [Technical Documentation](docs/technical-documentation.md)
- [AI Usage Report](docs/ai-usage-report.md)

---

## 📧 Contact

- **Email**: moath.mahmoud.haimour@gmail.com
- **GitHub**: [github.com/MoathEssa](https://github.com/MoathEssa)
- **LinkedIn**: [linkedin.com/in/moath-haimour-057282401](https://www.linkedin.com/in/moath-haimour-057282401/)

---

**Assignment**: SWE Assignment 4 — Final Portfolio  
**Student**: Moath Mahmoud Haimour | KFUPM  
**Last Updated**: April 2026
