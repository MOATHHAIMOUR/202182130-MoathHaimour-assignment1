# Technical Documentation

## Portfolio Website — Assignment 3

---

## Project Overview

An advanced personal portfolio website built with HTML5, CSS3, and vanilla JavaScript (ES6+). Assignment 3 extends the Assignment 2 baseline by adding a live GitHub API integration, compound multi-criteria project filtering (category + level + search), project sorting, a site-elapsed timer, a visit counter, and improved state management.

---

## File Structure

```
id-name-assignment3/
├── index.html                    # Main HTML file
├── css/
│   └── styles.css               # All styles, variables, animations
├── js/
│   └── script.js                # All interactive JS features
├── assets/
│   └── images/                  # Images folder
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore
```

---

## Technologies Used

| Technology      | Purpose                                                    |
| --------------- | ---------------------------------------------------------- |
| HTML5           | Semantic markup, ARIA roles/labels                         |
| CSS3            | Variables, Flexbox, Grid, `@keyframes`                     |
| JavaScript ES6+ | DOM manipulation, Fetch API, `async/await`, `localStorage` |
| GitHub REST API | Live public repository listing                             |
| Quotable API    | Public REST API for random quotes                          |

---

## New Feature Implementation (Assignment 3)

### 1. GitHub API Integration

**Location**: `#github` section in `index.html`, `js/script.js` → `fetchGitHubRepos()` / `renderRepos()`

Fetches the six most recently updated public repositories from the GitHub REST API:

```
GET https://api.github.com/users/MOATHHAIMOUR/repos?sort=updated&per_page=6&type=public
```

**State machine**:

| State   | Elements shown                                    |
| ------- | ------------------------------------------------- |
| Loading | `#githubLoading` (spinner)                        |
| Success | `#reposGrid` (article cards)                      |
| Error   | `#githubError` (friendly message + fallback link) |

**Security**: All repo data is rendered using `createElement` + `textContent` exclusively — no `innerHTML` with external content. Repository URLs are validated to start with `https://github.com/` before being assigned to `href`.

```js
// Safe rendering — textContent prevents XSS from API data
nameLink.textContent = repo.name;
desc.textContent = repo.description || "No description provided.";
```

---

### 2. Compound Project Filtering (Category + Level + Search)

**Location**: `js/script.js` → `applyFilters(category, searchTerm, level)`

`applyFilters` now accepts a third parameter (`level`) and applies three independent conditions simultaneously:

```js
function applyFilters(category, searchTerm, level = "all") {
  projectCards.forEach((card) => {
    const matchesCategory =
      category === "all" || card.dataset.category === category;
    const matchesLevel = level === "all" || card.dataset.level === level;
    const matchesSearch = !term || title.includes(term) || desc.includes(term);
    card.classList.toggle(
      "hidden",
      !(matchesCategory && matchesLevel && matchesSearch),
    );
  });
}
```

Each project card has three `data-` attributes: `data-category`, `data-level`, and `data-date`. All three filter controls call `applyFilters` with the current values of the other two controls so they compose correctly.

---

### 3. Project Sort

**Location**: `js/script.js` → `sortProjects(criterion)`, `#projectSort` select

The original DOM order is captured on page load:

```js
const originalOrder = Array.from(document.querySelectorAll(".project-card"));
```

`sortProjects` sorts a copy of the card array in memory and then re-appends each card to the grid. Re-appending a node that is already in the DOM moves it — no duplicates are created.

| Criterion   | Sort key                                 |
| ----------- | ---------------------------------------- |
| `default`   | Restores `originalOrder` snapshot        |
| `name-asc`  | `localeCompare` on `.project-title` text |
| `name-desc` | Reversed `localeCompare`                 |
| `date-asc`  | `data-date` parsed with `new Date()`     |
| `date-desc` | Reversed `data-date`                     |

---

### 4. Site Timer

**Location**: `js/script.js` — site timer block, `#siteTimer` element in footer

A `setInterval` increments a seconds counter every 1 000 ms and formats the display as `M:SS`:

```js
let secondsOnSite = 0;
setInterval(() => {
  secondsOnSite++;
  siteTimerEl.textContent = `${Math.floor(secondsOnSite / 60)}:${String(secondsOnSite % 60).padStart(2, "0")}`;
}, 1000);
```

---

### 5. Visit Counter

**Location**: `js/script.js` — visit counter block, `#visitCounter` element in footer

Uses `localStorage` to persist a running total of page visits from the same browser:

```js
const visitCount = parseInt(localStorage.getItem("visitCount") || "0") + 1;
localStorage.setItem("visitCount", String(visitCount));
visitCounterEl.textContent = `Visit #${visitCount}`;
```

---

### 6. Retained from Assignment 2

| Feature                       | Notes                                            |
| ----------------------------- | ------------------------------------------------ |
| Project category filter tabs  | Extended to accept level param in `applyFilters` |
| Live project search           | Extended to pass active level                    |
| Personalised visitor greeting | Unchanged                                        |
| Quotable API quote widget     | Unchanged                                        |
| Dark / light theme toggle     | Unchanged; persisted in `localStorage`           |
| Scroll-reveal card animations | Triggered for GitHub repo cards after fetch      |
| Contact form validation       | Unchanged                                        |

---

## State Management Summary

| State              | Mechanism                                | Persistence          |
| ------------------ | ---------------------------------------- | -------------------- |
| Theme (dark/light) | `data-theme` on `<html>`, `localStorage` | Survives page reload |
| Visitor name       | `localStorage`                           | Survives page reload |
| Visit count        | `localStorage`                           | Survives page reload |
| Category filter    | DOM `.filter-btn.active`                 | Session only         |
| Level filter       | DOM `.level-btn.active`                  | Session only         |
| Search term        | `<input>` value                          | Session only         |
| Sort order         | `<select>` value                         | Session only         |
| Site timer         | In-memory counter                        | Session only         |

---

## CSS Architecture

All styles live in a single `styles.css` file, organised in sections:

1. CSS Custom Properties (`:root` + dark theme override)
2. Reset & Base
3. Navigation
4. Hero (greeting input group)
5. Sections & Section Title
6. About
7. Projects (filter tabs, level tabs, sort control, search bar, category badges, empty state)
8. Quote Section
9. GitHub Section (repos grid, repo cards)
10. Contact Form
11. Footer (timer / visit counter meta)
12. Animations (`fadeInUp`, `spin`, `slideInLeft`)
13. Responsive Media Queries (768 px, 480 px)

---

## Security Considerations

- GitHub API responses rendered via `createElement` + `textContent` — no `innerHTML` with untrusted data
- GitHub repo `html_url` validated (`startsWith("https://github.com/")`) before use as `href`
- User-supplied visitor names sanitised (`/[<>"'&]/g`) before `localStorage` storage and display
- No secrets, API keys, or credentials in the codebase
- All external links include `rel="noopener noreferrer"`

---

## Browser Compatibility

Tested and verified on:

- Chrome 120+
- Firefox 121+
- Safari 17+
- Edge 120+

---

**Version**: 3.0.0
**Last Updated**: April 18, 2026
**Course**: Software Engineering — Assignment 3

---

## File Structure

```
assignment-2/
├── index.html                    # Main HTML file
├── css/
│   └── styles.css               # All styles, variables, animations
├── js/
│   └── script.js                # All interactive JS features
├── assets/
│   └── images/                  # Images folder
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore
```

---

## Technologies Used

| Technology      | Purpose                                                    |
| --------------- | ---------------------------------------------------------- |
| HTML5           | Semantic markup, ARIA roles/labels                         |
| CSS3            | Variables, Flexbox, Grid, `@keyframes`                     |
| JavaScript ES6+ | DOM manipulation, Fetch API, `async/await`, `localStorage` |
| Quotable API    | Public REST API for random quotes                          |

---

## New Feature Implementation (Assignment 2)

### 1. Project Filter Tabs (Dynamic Content)

**Location**: `index.html` → filter-tabs `<div>`, `js/script.js` → `applyFilters()`

Each project card has a `data-category` attribute (`web`, `api`, `tool`). Clicking a filter button calls `applyFilters(category, searchTerm)`, which loops over all `.project-card` elements and sets `card.classList.add("hidden")` or `remove("hidden")` based on whether the category matches and the search term appears in the project title or description.

```js
function applyFilters(category, searchTerm) {
  const term = searchTerm.trim().toLowerCase();
  let visibleCount = 0;
  projectCards.forEach((card) => {
    const matchesCategory = category === "all" || card.dataset.category === category;
    const title = card.querySelector(".project-title").textContent.toLowerCase();
    const matchesSearch = !term || title.includes(term) || ...;
    card.classList.toggle("hidden", !(matchesCategory && matchesSearch));
    if (matchesCategory && matchesSearch) visibleCount++;
  });
  document.getElementById("noResults").style.display = visibleCount === 0 ? "block" : "none";
}
```

The empty-state `<p id="noResults">` is shown when `visibleCount === 0`.

---

### 2. Personalised Visitor Greeting (localStorage)

**Location**: Hero section in `index.html`, `js/script.js` → visitor greeting block

Visitors type their name into the hero input and click "Say Hello". The name is:

1. Sanitised: `name.replace(/[<>"'&]/g, "")` to prevent stored XSS
2. Saved: `localStorage.setItem("visitorName", safeName)`
3. Displayed: A time-aware message — "Good morning/afternoon/evening, {name}!"

On subsequent visits, the saved name is loaded from `localStorage` and the greeting is shown automatically.

---

### 3. Quote API — Data Fetching & Error Handling

**Location**: `#quote` section in `index.html`, `js/script.js` → `fetchQuote()`

Uses `fetch("https://api.quotable.io/random")` with `async/await`.

**State machine**:

| State   | Elements shown                   |
| ------- | -------------------------------- |
| Loading | `#quoteLoading` (spinner)        |
| Success | `#quoteText`, `#quoteAuthor`     |
| Error   | `#quoteError` (friendly message) |

The `finally` block re-enables the "New Quote" button regardless of success or failure, ensuring the user is never left without a way to retry.

```js
async function fetchQuote() {
  quoteLoading.style.display = "flex";
  quoteText.style.display = "none";
  quoteError.style.display = "none";
  try {
    const res = await fetch("https://api.quotable.io/random");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    quoteText.textContent = data.content;
    quoteAuthor.textContent = `— ${data.author}`;
    quoteText.style.display = "block";
    quoteAuthor.style.display = "block";
  } catch {
    quoteError.style.display = "block";
  } finally {
    quoteLoading.style.display = "none";
    newQuoteBtn.disabled = false;
  }
}
```

---

### 4. Scroll-Reveal Animations

**Location**: `css/styles.css` → `.reveal-card` / `.reveal-card.visible`, `js/script.js` → `revealCards()`

Project cards and the quote card start invisible (`opacity: 0; transform: translateY(40px)`). On scroll, the `revealCards` function checks each card's position via `getBoundingClientRect().top < window.innerHeight - 100` and adds the `.visible` class, triggering a CSS transition to full opacity and zero translation.

---

### 5. Theme Toggle + localStorage (Assignment 1 feature — retained)

Uses CSS custom properties (variables) defined under `:root` and `[data-theme="dark"]`. The chosen theme is saved in `localStorage` and restored on next load.

---

### 6. Contact Form Validation (Assignment 1 feature — improved)

Client-side only (no backend). Validates:

- All fields non-empty
- Email format via `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

Shows a styled `.form-message.success` or `.form-message.error` element. Auto-hides after 6 seconds.

---

## CSS Architecture

All styles live in a single `styles.css` file, organised in sections:

1. CSS Custom Properties (`:root` + dark theme override)
2. Reset & Base
3. Navigation
4. Hero (including new greeting input group)
5. Sections & Section Title
6. About
7. Projects (filter tabs, search bar, category badges, empty state)
8. Quote Section
9. Contact Form
10. Footer
11. Animations (`@keyframes fadInUp`, `spin`, `slideInLeft`)
12. Responsive Media Queries (768 px, 480 px)

---

## Security Considerations

- User-supplied names are sanitised before storage and display to prevent XSS
- No `innerHTML` is used with user-controlled data; `.textContent` is used throughout
- The public Quotable API is read-only and does not receive any user data
- No credentials or secrets are used anywhere in the codebase

---

## Browser Compatibility

Tested and verified on:

- Chrome 120+
- Firefox 121+
- Safari 17+
- Edge 120+

All features use standard, widely-supported Web APIs (`fetch`, `localStorage`, CSS custom properties).

---

**Version**: 2.0.0  
**Last Updated**: March 28, 2026  
**Course**: Software Engineering — Assignment 2

---

## Project Overview

A responsive personal portfolio website built with HTML, CSS, and JavaScript.

**Features:**

- Responsive design for all devices
- Dark/light theme toggle
- Smooth scrolling navigation
- Interactive contact form
- Time-based greeting message

---

## File Structure

```
assignment-1/
├── index.html           # Main HTML file
├── css/
│   └── styles.css      # All styles and responsive design
├── js/
│   └── script.js       # Interactive features
├── assets/
│   └── images/         # Images folder
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore
```

---

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Grid, Flexbox, Variables, Media Queries
- **JavaScript (ES6)**: DOM manipulation, Event handling, LocalStorage

---

## Key Features Implementation

### 1. Theme Toggle

- Uses CSS variables for colors
- Stores preference in localStorage
- Toggles between light and dark mode

### 2. Smooth Scrolling

- JavaScript event listeners on navigation links
- Smooth scroll behavior with offset for fixed navbar

### 3. Contact Form

- Client-side validation
- Email format validation with regex
- Success/error messages

### 4. Dynamic Greeting

- Displays different messages based on time of day
- Updates on page load

### 5. Responsive Design

- Mobile-first approach
- Breakpoints: 480px (mobile), 768px (tablet)
- CSS Grid for project cards
- Flexbox for navigation and layouts

---

## Browser Compatibility

Tested and working on:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## Setup Instructions

1. Clone or download the repository
2. Open `index.html` in a web browser
3. No build process or dependencies required

---

## Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: ≤ 480px

---

## Code Organization

### HTML Structure

- Semantic elements (`<nav>`, `<section>`, `<footer>`)
- Forms with proper labels and validation
- Accessibility attributes

### CSS Organization

- CSS Variables at the top
- Organized by sections
- Mobile-first media queries

### JavaScript Features

- Theme toggle with localStorage
- Form validation
- Smooth scroll navigation
- Scroll-reveal animations
- Dynamic greeting

---

## Performance Considerations

- Minimal external dependencies
- Optimized CSS animations
- Efficient JavaScript event handling
- Lazy loading for images (fallback placeholders)

---

**Version**: 1.0.0  
**Last Updated**: February 14, 2026
