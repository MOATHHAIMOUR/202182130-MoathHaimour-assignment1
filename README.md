# Personal Portfolio Website — Assignment 3

An advanced personal portfolio website built with HTML, CSS, and vanilla JavaScript, featuring GitHub API integration, multi-criteria project filtering, project sorting, a live site timer, a visit counter, and full dark/light mode state management.

**🌐 Live Demo**: [https://moathhaimour.github.io/202182130-MoathHaimour-assignment3/](https://moathhaimour.github.io/202182130-MoathHaimour-assignment3/)

## 🌟 What's New in Assignment 3

- **GitHub API Integration** — Fetches and displays live public repositories from GitHub with repo name, description, language, star count, fork count, and last-updated date. Shows a friendly error fallback if the API is unavailable.
- **Project Level Filter** — Filter the project grid by difficulty level: All Levels / Beginner / Advanced (combined with existing category and search filters).
- **Project Sort** — Sort the project grid by name (A→Z / Z→A) or date (Oldest First / Newest First) using a dropdown control. "Default" restores the original order.
- **Site Timer** — Displays how long the current visitor has been on the page, updating every second in the footer.
- **Visit Counter** — Tracks and displays the total number of visits from the same browser using `localStorage`.
- **Combined State Management** — Category filter, level filter, search query, sort order, dark/light theme, and visitor name are all managed and persisted independently.

## 📁 Project Structure

```
id-name-assignment3/
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
└── .gitignore
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- An internet connection (required for the GitHub API and Quote API)
- No build tools or dependencies required

### Running Locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/MOATHHAIMOUR/202182130-MoathHaimour-assignment3.git
   ```

2. **Open the website**:
   - Double-click `index.html`, **or** run a local server:

     ```bash
     # Python 3
     python -m http.server 8000

     # Node.js
     npx http-server
     ```

   - Then visit `http://localhost:8000`

> **Note**: The GitHub Repos section and Quote section require an internet connection. All other features (filters, sort, theme, timer, visit counter) work fully offline.

## 🤖 AI Integration Summary

I used **GitHub Copilot** and **ChatGPT** to assist with specific parts of this project:

- Asked ChatGPT how to safely render API data without `innerHTML` (XSS risk); applied `createElement` + `textContent` throughout `renderRepos()`
- Used Copilot autocomplete for sort comparator patterns, extended to four criteria
- Consulted ChatGPT to confirm the correct GitHub REST API endpoint and query parameters
- Used Copilot for CSS card layout suggestions, then adapted to the existing design system

All code was written, reviewed, tested, and understood by me. AI served as a learning aid, not a replacement for my own work.

For the complete breakdown, see [docs/ai-usage-report.md](docs/ai-usage-report.md).

## ⚙️ Technical Stack

| Technology      | Purpose                                                    |
| --------------- | ---------------------------------------------------------- |
| HTML5           | Semantic markup, ARIA roles/labels                         |
| CSS3            | Variables, Flexbox, Grid, `@keyframes` animations          |
| JavaScript ES6+ | `async/await`, Fetch API, DOM manipulation, `localStorage` |
| GitHub REST API | Live public repository listing                             |
| Quotable API    | Random inspirational quotes                                |

## 📱 Responsive Breakpoints

| Breakpoint   | Description                         |
| ------------ | ----------------------------------- |
| > 768 px     | Desktop — multi-column grids        |
| 481 – 768 px | Tablet — adjusted font sizes        |
| ≤ 480 px     | Mobile — single-column, stacked nav |

## 🎨 Colour Palette

| Role       | Value                 |
| ---------- | --------------------- |
| Primary    | `#667eea` Purple Blue |
| Secondary  | `#764ba2` Purple      |
| Accent     | `#f093fb` Pink        |
| Text       | `#2d3748` Dark Gray   |
| Background | `#ffffff` White       |

## 🔒 Security Notes

- GitHub API responses are rendered with `createElement` + `textContent` — no `innerHTML` with untrusted data
- GitHub repo URLs are validated to start with `https://github.com/` before being set as `href`
- User input (visitor name) is sanitised before `localStorage` storage to prevent stored XSS
- No credentials or secrets are embedded in the codebase

## 📖 Documentation

- [Technical Documentation](docs/technical-documentation.md)
- [AI Usage Report](docs/ai-usage-report.md)

## 🌐 Deployment

### GitHub Pages

1. Push to GitHub → Settings → Pages → select `main` branch
2. Live at: `https://moathhaimour.github.io/202182130-MoathHaimour-assignment2/`

### Netlify / Vercel

Connect your repository and deploy with default settings — no build step needed.

## 📧 Contact

- **Email**: s202182130@kfupm.edu.sa
- **LinkedIn**: [LinkedIn Profile](https://linkedin.com/in/moathhaimour)
- **GitHub**: [MOATHHAIMOUR](https://github.com/MOATHHAIMOUR)

---

**Version**: 2.0.0  
**Last Updated**: March 2026

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Theme Toggle**: User preference for dark or light mode with persistent storage
- **Smooth Scrolling**: Enhanced navigation experience with smooth scrolling to sections
- **Dynamic Greeting**: Time-based greeting message that changes throughout the day
- **Interactive Contact Form**: Functional contact form with client-side validation
- **Smooth Animations**: Scroll-reveal animations and hover effects for better user experience
- **Modern UI/UX**: Clean, professional design with gradient accents and card-based layout

## 📁 Project Structure

```
assignment-1/
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
└── .gitignore
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No additional software or dependencies required

### Installation & Setup

1. **Clone the repository** (or download the ZIP file):

   ```bash
   git clone https://github.com/MOATHHAIMOUR/202182130-MoathHaimour-assignment1.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd assignment-1
   ```

3. **Open the website**:
   - Simply open `index.html` in your web browser
   - Or use a local development server:

     ```bash
     # Using Python 3
     python -m http.server 8000

     # Using Node.js (http-server)
     npx http-server
     ```

   - Then visit `http://localhost:8000` in your browser

## 💡 Usage

### Customizing the Portfolio

1. **Update Personal Information**:
   - Edit `index.html` to replace placeholder text with your actual information
   - Update name, bio, project descriptions, and contact details

2. **Add Your Photos**:
   - Add your profile picture and project images to `assets/images/`
   - Update the image paths in `index.html`

3. **Modify Styling**:
   - Edit `css/styles.css` to change colors, fonts, or layout
   - CSS variables are defined at the top for easy customization

4. **Add More Projects**:
   - Copy a project card in `index.html` and modify the content
   - Follow the existing structure for consistency

## 🤖 AI Integration

AI tools were used for learning support while building this project. I asked questions about:

- How to implement responsive design patterns
- Understanding CSS Grid and Flexbox
- JavaScript event handling and DOM manipulation
- Form validation techniques
- Best practices for accessibility

AI provided explanations and examples that helped me learn and write the code myself.

For detailed information about AI usage, see [AI Usage Report](docs/ai-usage-report.md).

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: ≤ 480px

## ⚙️ Technical Stack

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive features and DOM manipulation
- **LocalStorage API**: Theme preference persistence

## 📖 Documentation

- [Technical Documentation](docs/technical-documentation.md) - Detailed technical specifications and code documentation
- [AI Usage Report](docs/ai-usage-report.md) - Comprehensive report on AI tool integration

## 🌐 Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select the main branch as source
4. Your site will be available at: `https://moathhaimour.github.io/202182130-MoathHaimour-assignment1/`

### Netlify / Vercel

1. Connect your GitHub repository
2. Deploy with default settings (no build command needed)
3. Your site will be live within minutes

## 🎨 Color Palette

- **Primary**: #667eea (Purple Blue)
- **Secondary**: #764ba2 (Purple)
- **Accent**: #f093fb (Pink)
- **Text**: #2d3748 (Dark Gray)
- **Background**: #ffffff (White)

## 📝 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

- Assignment requirements from SWE Course - Assignment 1
- AI assistance from GitHub Copilot and ChatGPT
- Design inspiration from modern portfolio websites
- Icons and placeholder images from respective sources

## 📧 Contact

- **Email**: s202182130@kfupm.edu.sa
- **LinkedIn**: [LinkedIn Profile](https://linkedin.com/in/moathhaimour)
- **GitHub**: [MOATHHAIMOUR](https://github.com/MOATHHAIMOUR)

---

**Note**: Remember to update all placeholder content with your actual information before deploying!

**Version**: 1.0.0  
**Last Updated**: February 2026
