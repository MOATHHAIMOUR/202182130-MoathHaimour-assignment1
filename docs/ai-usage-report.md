# AI Usage Report

## Assignment 4 — Final Portfolio

This report documents every use of AI tools during Assignment 4 development. All AI-generated content was reviewed, tested, and modified before being committed. The project builds on the AI usage documented in Assignments 1–3.

---

## 1. Tools Used & Use Cases

### GitHub Copilot (inline in VS Code)

| Area | What Copilot Suggested | What I Did |
|------|------------------------|------------|
| **Typing animation** | Suggested a basic `setInterval` character loop | Rewrote it as a recursive `setTimeout` loop with separate typing/deleting phases and variable delays for a natural feel |
| **Skills card layout** | Suggested a simple `flex-wrap` grid | Adapted to use existing CSS custom properties and added separate dark-mode overrides |
| **Back-to-top button** | Autocompleted `scrollY > 300` threshold check | Changed threshold to 400 px to match the hero section height and wired ARIA class toggling |
| **Hamburger menu toggle** | Suggested `classList.toggle` pattern | Added `aria-expanded` attribute management and auto-close on link click for accessibility |
| **Project descriptions** | Suggested generic marketing copy | Replaced entirely with accurate technical descriptions sourced directly from my résumé |

### Claude (Anthropic)

Used via the GitHub Copilot Chat panel and web interface for concept-level questions:

- **"What is the cleanest CSS pattern for a vertical timeline?"** — Claude explained the `::before` pseudo-element border trick. I implemented it myself and added dark-mode border colour adjustments.
- **"How do I implement a typewriter effect that also deletes text?"** — Claude outlined the two-phase approach (typing phase then deleting phase). I built the full implementation with per-character delays and role cycling.
- **"What ARIA attributes should a hamburger button have?"** — Claude explained `aria-expanded` and the `aria-controls` pattern. I applied `aria-expanded` throughout the toggle handler.
- **"How should I sanitise text before storing it in localStorage?"** — Claude confirmed the `replace(/[<>"'&]/g, "")` approach (carried forward from Assignment 3).
- **"Review this project-card HTML for accessibility issues."** — Claude pointed out missing `rel="noopener noreferrer"` on external links; I added them to all project and social links.

---

## 2. What I Modified vs What AI Suggested

| Feature | AI Input | My Final Implementation |
|---------|----------|------------------------|
| Typing animation | Copilot: basic `setInterval` | `setTimeout`-based recursive loop; variable delay on type (90 ms) vs delete (50 ms); 1800 ms pause at word end |
| Skills section | Copilot: flexbox card skeleton | Full CSS with custom properties, icon area, list styling, hover lift, dark-mode token inheritance |
| Education timeline | Claude: `::before` border approach | Complete timeline with gradient border, circular marker, date badge, and card hover shadow |
| Hamburger menu | Copilot: `classList.toggle` | ARIA-compliant with `aria-expanded`, auto-close on link click, animated span → X transition |
| Back-to-top button | Copilot: scroll listener stub | Gradient button, opacity+transform transition, 400 px threshold |
| Project cards | Claude: rephrased copy | Verified every bullet point against my résumé; rewrote descriptions in first-person technical language |
| GitHub username | Existing code used "MOATHHAIMOUR" | Corrected to "MoathEssa" matching my actual GitHub profile |
| Security (all external links) | Claude review flagged missing attribute | Added `rel="noopener noreferrer"` to every `<a target="_blank">` |

---

## 3. Benefits of AI Use in This Assignment

- **Speed**: Copilot's autocomplete significantly reduced boilerplate for event listeners and CSS rules, freeing time for more creative decisions.
- **Accessibility review**: Claude caught missing `rel` attributes and `aria-expanded` gaps before they became issues.
- **Concept clarity**: Claude's explanation of the two-phase typewriter pattern helped me avoid a common off-by-one bug (deleting one character too many).
- **Dark-mode QA**: Copilot suggested checking contrast on the timeline and skills cards; I tested and adjusted colour tokens accordingly.

## 4. Challenges & Limitations

- Copilot's first typing-animation suggestion used `setInterval` which caused the cursor to flicker when switching between typing and deleting phases — switched to `setTimeout` recursion to fix the timing.
- Claude's timeline CSS example used hard-coded pixel colours; I had to translate all colours to CSS custom properties to support dark mode.
- Some project descriptions suggested by Claude were inaccurate (fabricated bullet points) — I replaced them entirely with content taken verbatim from my résumé.
- Copilot occasionally suggested `innerHTML` for card rendering; I rejected all such suggestions and kept the `createElement` + `textContent` pattern established in Assignment 3.

## 5. Learning Outcomes

- **Typing animations** — understood the two-phase recursive approach and how to tune `setTimeout` delays for natural feel.
- **CSS timeline patterns** — learned the `::before` pseudo-element trick for rendering a vertical guide line without extra markup.
- **ARIA for interactive controls** — applied `aria-expanded` correctly to a toggle button for the first time.
- **AI limitations** — reinforced that AI-generated project descriptions must always be verified against source material; fabricated technical details are a real risk.
- **Security consistency** — practised applying `rel="noopener noreferrer"` as a systematic rule rather than case-by-case.

## 6. Responsible Use & Modifications

Every AI suggestion in this assignment was:

1. **Reviewed** — read line by line; no autocomplete accepted without understanding
2. **Tested** — verified in Chrome (DevTools) and checked in Firefox and Edge
3. **Adapted** — typing animation, timeline CSS, and hamburger menu were all substantially rewritten
4. **Verified against source** — all project descriptions cross-checked against résumé before commit
5. **Understood** — I can explain every line of code in this project

AI served as a collaborator and reviewer, not a replacement for my own design decisions or authorship.

---

**Student**: Moath Mahmoud Haimour  
**Course**: Software Engineering — Assignment 4 (Final Portfolio)  
**Date**: April 2026
