# Technical Documentation

## Portfolio Website — Assignment 4 (Final)

---

## Project Overview

A polished, production-quality personal portfolio website built with HTML5, CSS3, and vanilla JavaScript (ES6+). Assignment 4 is the final evolution of the portfolio, adding a typing animation, a categorised skills section, an education timeline, hamburger mobile nav, a back-to-top button, and replacing all placeholder projects with real résumé content.

---

## File Structure

```
202182130-MoathHaimour-assignment4/
├── index.html                    # Main HTML (semantic markup + ARIA)
├── css/
│   └── styles.css               # All styles, variables, animations
├── js/
│   └── script.js                # All interactive JS features
├── assets/
│   └── images/                  # Images and static assets
├── docs/
│   ├── ai-usage-report.md       # AI tool usage log
│   └── technical-documentation.md
├── presentation/
│   ├── slides.pdf               # Presentation slides
│   └── demo-video.mp4           # Video walkthrough
└── .gitignore
```

---

## Technologies Used

| Technology | Purpose |
|-----------|---------|
| HTML5 | Semantic markup, ARIA roles/labels |
| CSS3 | Custom properties, Flexbox, Grid, `@keyframes` |
| JavaScript ES6+ | DOM manipulation, Fetch API, `async/await`, `localStorage` |
| GitHub REST API | Live public repository listing |
| Quotable API | Random inspirational quotes |

---

## New Features (Assignment 4)

### 1. Typing Animation

**Location**: `#hero` section in `index.html`, `js/script.js` → `typeLoop()`

A recursive `setTimeout`-based typing animation cycles through an array of developer roles:

```js
const roles = [
  "Full Stack Developer",
  "Backend Engineer",
  "ASP.NET Core Specialist",
  "React Developer",
  "Azure & DevOps Enthusiast",
];

function typeLoop() {
  const current = roles[roleIndex];
  if (isDeleting) {
    typedEl.textContent = current.slice(0, --charIndex);
  } else {
    typedEl.textContent = current.slice(0, ++charIndex);
  }
  // variable delay for natural feel
  let delay = isDeleting ? 50 : 90;
  if (!isDeleting && charIndex === current.length) { delay = 1800; isDeleting = true; }
  else if (isDeleting && charIndex === 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; delay = 300; }
  setTimeout(typeLoop, delay);
}
```

A CSS `blink` keyframe animates the cursor character (`|`).

---

### 2. Skills Section

**Location**: `#skills` section in `index.html`, `css/styles.css` → `.skills-section`, `.skills-grid`, `.skills-card`

Four categorised skill cards (Backend, Databases, Frontend, DevOps & Cloud) laid out with CSS Grid (`repeat(auto-fit, minmax(230px, 1fr))`). Cards lift on hover using `translateY(-6px)` and `box-shadow`.

---

### 3. Education Timeline

**Location**: `#education` section in `index.html`, `css/styles.css` → `.timeline`, `.timeline-item`

A vertical timeline rendered using a `::before` pseudo-element on `.timeline` as the guide rail (3 px wide, gradient background). Each `.timeline-item` contains a circular `.timeline-marker` and a `.timeline-content` card.

```css
.timeline::before {
  content: "";
  position: absolute;
  left: 20px;
  width: 3px;
  background: linear-gradient(180deg, var(--primary-color), var(--secondary-color));
}
```

No additional markup required — pure CSS.

---

### 4. Mobile Hamburger Menu

**Location**: `#hamburger` button in `index.html`, `js/script.js` → hamburger block, `css/styles.css` → `.hamburger`

Visible only at ≤ 480 px. Three `<span>` bars animate into an × when `.active` is applied via CSS transform. The nav list gains the `.open` class to display as a vertical column.

ARIA compliance:
- `aria-expanded` is toggled on every open/close
- Clicking any nav link auto-closes the menu

---

### 5. Back-to-Top Button

**Location**: `#backToTop` in `index.html`, `js/script.js` → back-to-top block, `css/styles.css` → `.back-to-top`

A fixed, circular gradient button in the bottom-right corner. It becomes visible (opacity 1, `translateY(0)`) after the user scrolls past 400 px and smoothly hides when scrolling back up. Click invokes `window.scrollTo({ top: 0, behavior: "smooth" })`.

---

### 6. Real Project Cards

All four placeholder projects have been replaced with five real projects from the developer's résumé:

| # | Project | Category | Level |
|---|---------|----------|-------|
| 1 | Driving License Management System | Web + Desktop | Advanced |
| 2 | E-Commerce Platform | Web | Advanced |
| 3 | Family Rehabilitation Center Platform | Web | Advanced |
| 4 | SoccerPro Tournament Management API | API | Advanced |
| 5 | Bank System (Console Application) | Tool | Beginner |

---

## Carried-Over Features (Assignments 1–3)

### Dark / Light Mode

CSS custom properties on `:root` and `[data-theme="dark"]`. Theme persisted via `localStorage`.

### Project Filtering (Category + Level + Search)

```js
function applyFilters(category, searchTerm, level = "all") {
  projectCards.forEach((card) => {
    const matchesCategory = category === "all" || card.dataset.category === category;
    const matchesLevel    = level === "all" || card.dataset.level === level;
    const matchesSearch   = !term || title.includes(term) || desc.includes(term);
    card.classList.toggle("hidden", !(matchesCategory && matchesLevel && matchesSearch));
  });
}
```

### Project Sort

Original DOM order is captured on load. `sortProjects(criterion)` sorts a copy in memory then re-appends nodes to the grid. Supports: `default`, `name-asc`, `name-desc`, `date-asc`, `date-desc`.

### GitHub API

`GET https://api.github.com/users/MoathEssa/repos?sort=updated&per_page=6&type=public`

Rendered exclusively with `createElement` + `textContent`. Repo URLs validated to start with `https://github.com/`.

### Quote API

`GET https://api.quotable.io/random`

Loading / success / error state machine with spinner, blockquote reveal, and retry button.

### Site Timer & Visit Counter

- Timer: `setInterval` every 1 000 ms, formatted as `M:SS`
- Counter: `localStorage.visitCount` incremented on each page load

---

## Security

| Risk | Mitigation |
|------|-----------|
| XSS via API data | `createElement` + `textContent` throughout `renderRepos()` |
| Open-redirect via API URL | `repo.html_url.startsWith("https://github.com/")` validation |
| Stored XSS via localStorage | Visitor name sanitised: `replace(/[<>"'&]/g, "")` |
| Tab-nabbing | All `<a target="_blank">` carry `rel="noopener noreferrer"` |

---

## Responsive Design

| Breakpoint | Changes |
|-----------|---------|
| > 768 px | Multi-column grids, side-by-side about/contact layouts |
| 481–768 px | Single-column project grid, smaller fonts |
| ≤ 480 px | Hamburger nav, stacked hero input, single-column skills |

---

## Performance

- No external CSS frameworks — single stylesheet (~110 KB unminified)
- No JavaScript libraries — single script file (~12 KB unminified)
- SVG data-URI placeholders instead of image files (avoids extra HTTP requests)
- Scroll animations use `getBoundingClientRect()` with `IntersectionObserver`-compatible logic (no layout thrashing)

---

**Student**: Moath Mahmoud Haimour  
**Course**: Software Engineering — Assignment 4 (Final Portfolio)  
**Date**: April 2026
