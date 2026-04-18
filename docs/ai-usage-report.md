# AI Usage Report

## Assignment 3 — Advanced Functionality

This report documents how I used AI tools to support the development of the advanced features added in Assignment 3. All code was reviewed, tested, and understood before being committed.

---

## 1. Tools Used & Specific Use Cases

### GitHub Copilot

Used inline inside VS Code for code-completion assistance:

- **GitHub API integration** — While typing `fetchGitHubRepos()`, Copilot suggested the `fetch` call structure and the `if (!res.ok)` guard. I reviewed the suggestion, added URL validation (`startsWith("https://github.com/")`) to prevent open-redirect risks, and replaced the `innerHTML` template approach with safe `createElement` + `textContent` calls to avoid XSS.
- **Sort function** — Copilot autocompleted the `Array.prototype.sort` comparator pattern with `localeCompare`. I extended it to support four criteria (name-asc, name-desc, date-asc, date-desc) and added the `originalOrder` reset.
- **Level filter** — Copilot suggested a `forEach` loop for the level buttons matching the existing filter-button pattern. I accepted the structure and wired it into the existing `applyFilters` call with the third `level` parameter.
- **CSS repo cards** — Copilot suggested a flexbox card layout. I adapted the colour tokens and border-radius to match the existing design system.

### ChatGPT

Used to understand concepts before writing code:

- **"How do I safely render data from an external API without using innerHTML?"** — ChatGPT explained `createElement` + `textContent`. I applied this pattern throughout `renderRepos()` to avoid XSS from untrusted API data.
- **"How do I store and restore the original DOM order when sorting a list?"** — ChatGPT explained capturing a snapshot array on page load. I implemented `const originalOrder = Array.from(...)` and used it in the `"default"` sort branch.
- **"What is the GitHub REST API endpoint to list public repos sorted by update date?"** — Used to confirm the correct URL pattern and query parameters before writing the fetch call.
- **"How can I track how long a user has been on a page?"** — ChatGPT explained `setInterval` with a seconds counter. I implemented the timer myself using `String.padStart(2,"0")` for clean MM:SS display.

---

## 2. What I Modified vs What AI Suggested

| Feature             | AI Input                               | My Contribution                                                       |
| ------------------- | -------------------------------------- | --------------------------------------------------------------------- |
| GitHub API fetch    | Copilot suggested basic fetch skeleton | Added URL validation, `createElement` safety pattern, error state UI  |
| Repo card rendering | Copilot suggested innerHTML template   | Rewrote entirely using `createElement` + `textContent` for XSS safety |
| Project sort        | Copilot autocompleted `localeCompare`  | Added all four sort criteria + `originalOrder` reset logic            |
| Level filter        | Copilot suggested forEach pattern      | Wired into `applyFilters` with three-parameter signature              |
| Site timer          | ChatGPT explained setInterval          | Wrote the full implementation with `padStart` formatting              |
| Visit counter       | My own idea                            | Written entirely by me; AI not involved                               |
| CSS repo cards      | Copilot suggested flexbox layout       | Adapted to match existing CSS variable system and dark mode           |

---

## 3. Benefits of AI Use in This Assignment

- Quickly confirmed the correct GitHub API endpoint and query parameters
- Copilot sped up boilerplate (event listener wiring, array sorting patterns)
- ChatGPT helped identify the XSS risk in the original `innerHTML` approach before it caused a problem
- Copilot's CSS suggestions reduced time spent on card layout experimentation

## 4. Challenges & How I Addressed Them

- Copilot's first suggestion for `renderRepos` used `innerHTML` with template literals, which would have been a security risk with untrusted API content — I rewrote it using `createElement` and `textContent` throughout
- ChatGPT's GitHub API example did not include public-only filtering (`type=public`) — I added that parameter after reading the official docs
- The `originalOrder` sort-reset required capturing the node list _before_ any sorting could move nodes in the DOM — discovered this through manual testing and fixed by moving the snapshot line to the top of the module

## 5. Learning Outcomes

- Learned how to safely consume a third-party REST API (`fetch`, `async/await`, error handling, URL validation)
- Understood the XSS risk of using `innerHTML` with external data and the correct mitigation
- Practiced multi-criteria sort logic with `Array.prototype.sort` and `localeCompare`
- Gained experience managing compound filter state (category + level + search term) in a single function

## 6. Responsible Use & Modifications

Every AI suggestion was:

1. **Reviewed** — read line by line before acceptance
2. **Tested** — verified in Chrome DevTools and checked in Firefox
3. **Adapted** — the `innerHTML` render approach was completely rewritten; sort criteria were extended beyond the AI suggestion
4. **Understood** — I can explain every line of code in this project

AI served as a learning reference and productivity tool, not as a substitute for my own understanding or authorship.

---

**Date**: April 18, 2026
**Course**: Software Engineering — Assignment 3
