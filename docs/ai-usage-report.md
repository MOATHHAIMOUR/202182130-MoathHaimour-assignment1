# AI Usage Report

## Assignment 2 — Interactive Portfolio Features

This report documents how I used AI tools to support the development of the new interactive features added in Assignment 2. All code was written by me after using AI as a learning and reference tool.

---

## 1. Tools Used & Specific Use Cases

### GitHub Copilot

I used Copilot inline suggestions while writing code inside VS Code:

- **Project filter logic** — While typing the `applyFilters` function, Copilot suggested a `forEach`-based approach with `dataset` lookups. I reviewed the suggestion, compared it with my own approach, simplified it, and made sure it also handled the live search term correctly.
- **CSS animations** — Copilot suggested `@keyframes spin` for the loading spinner. I accepted the structure and adjusted the timing and colours to match the existing design system.
- **ARIA attributes** — Copilot suggested adding `role="tablist"` and `aria-selected` to the filter buttons. I accepted this because it improves accessibility and is correct per the WAI-ARIA spec.

Every Copilot suggestion I accepted was reviewed, tested in the browser, and either kept as-is or adapted before committing.

### ChatGPT

I used ChatGPT to ask questions and understand concepts before writing code:

- **"How does the Fetch API work with async/await and error handling?"** — I asked this to understand `try/catch` with `fetch()`. ChatGPT explained the pattern; I then wrote my own `fetchQuote` function from scratch using that understanding.
- **"How do I sanitise user input in JavaScript before saving to localStorage?"** — ChatGPT explained that stripping `<`, `>`, `"`, `'`, and `&` prevents stored XSS. I implemented `safeName = name.replace(/[<>"'&]/g, "")` accordingly.
- **"What is the difference between display:none and visibility:hidden when toggling elements via JavaScript?"** — Helped me decide to use `style.display` toggling for the quote/loading states.
- **"What is a loading spinner animation in CSS?"** — Used the explanation to write the `.spinner` keyframe animation myself.

---

## 2. What I Modified vs What AI Suggested

| Feature               | AI Input                                   | My Contribution                                                             |
| --------------------- | ------------------------------------------ | --------------------------------------------------------------------------- |
| Project filter tabs   | Copilot suggested `dataset.filter` pattern | Added category+search combining logic; wrote the empty-state message        |
| Live search           | Copilot autocompleted `includes()` check   | Extended to search both title and description; debouncing via `input` event |
| Fetch quote           | ChatGPT explained async/await pattern      | Wrote full function: loading state, error state, `finally` cleanup          |
| Personalised greeting | My own idea                                | Entire feature written by me; used Copilot for minor syntax completion only |
| CSS animations        | Copilot suggested `@keyframes spin`        | Added `slideInLeft` and adjusted `fadeInUp` delays myself                   |
| Input sanitisation    | ChatGPT explained the approach             | Implemented the regex replacement myself                                    |

---

## 3. Benefits of AI Use in This Assignment

- Quickly understood the `fetch` + `async/await` + error handling pattern without reading multiple documentation pages
- Copilot's inline suggestions sped up boilerplate writing (event listener wiring, `querySelectorAll` loops)
- ChatGPT helped me validate my own approach and discover the ARIA attribute improvements

## 4. Challenges & How I Addressed Them

- Some Copilot suggestions assumed jQuery syntax — I rewrote those using vanilla DOM APIs
- ChatGPT's first Fetch example did not handle `response.ok` — I added that check myself after noticing the gap
- Had to test every piece of AI-assisted code manually in Chrome DevTools to confirm it behaved as expected

---

## 5. Responsible Use & Understanding

I am fully able to explain every line of code in this project:

- I understand how `applyFilters` iterates over cards and combines the category and search filters
- I understand why `safeName.replace(/[<>"'&]/g, "")` prevents stored XSS in `localStorage`
- I understand the sequence of UI state changes (`quoteLoading` → `quoteText`/`quoteError`) in `fetchQuote`
- I understand how the `IntersectionObserver`-style scroll reveal works via `getBoundingClientRect().top < window.innerHeight`

AI supported my learning — it did not replace my thinking or writing.

---

## 6. Conclusion

For Assignment 2, AI tools were most useful for explaining APIs I had not used before (`fetch`, `async/await`) and for surfacing accessibility improvements I might otherwise have missed. Once I understood the concepts, I wrote the implementations myself, tested them, and adapted them to fit the existing codebase. The interactive features added in this assignment — filtering, live search, personalised greeting, and the quote widget — were all designed and implemented by me, with AI serving as a reference tool rather than an author.

---

**Date**: March 28, 2026  
**Course**: Software Engineering — Assignment 2
