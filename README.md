# Personal Portfolio Website — Assignment 2

An improved version of my personal portfolio website, now featuring interactive filtering, live search, a public API integration, animated transitions, and enhanced user feedback — built with plain HTML, CSS, and JavaScript.

**🌐 Live Demo**: [https://moathhaimour.github.io/202182130-MoathHaimour-assignment1/](https://moathhaimour.github.io/202182130-MoathHaimour-assignment1/)

## 🌟 What's New in Assignment 2

- **Project Filter Tabs** — click All / Web / API / Tool to instantly filter the projects grid
- **Live Project Search** — type to filter projects in real time; shows a friendly empty-state message when nothing matches
- **Personalised Greeting** — visitors can type their name and receive a custom time-aware greeting, which is remembered across page visits using `localStorage`
- **Daily Inspiration** — fetches a random quote from the [Quotable API](https://api.quotable.io) with a loading spinner, error fallback, and a "New Quote" button
- **Scroll-reveal Animations** — cards fade and slide in as the user scrolls down the page
- **CSS-only Transitions** — category badge colour coding, hover lift effects, and smooth button transitions
- **Improved Form Feedback** — extended confirmation message and clearer error states

## 📁 Project Structure

```
assignment-2/
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
- No build tools or dependencies required

### Running Locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/MOATHHAIMOUR/202182130-MoathHaimour-assignment2.git
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

> **Note**: The Quote API requires an internet connection. All other features work fully offline.

## 🤖 AI Integration Summary

I used GitHub Copilot and ChatGPT to assist with specific parts of this project:

- Asked ChatGPT to explain the Fetch API and `async/await` error handling patterns, then wrote the quote-fetching logic myself
- Used Copilot autocomplete suggestions while writing the filter and search functions; reviewed, adapted, and tested every suggestion before keeping it
- Consulted ChatGPT for CSS animation syntax (keyframes, `transform` transitions) as a reference while authoring the styles

All code was written, understood, and tested by me. AI tools served as a learning aid and reference — not a replacement for my own work.

For the complete AI usage breakdown, see [docs/ai-usage-report.md](docs/ai-usage-report.md).

## ⚙️ Technical Stack

- **HTML5** — Semantic markup, ARIA roles and labels for accessibility
- **CSS3** — CSS variables, Flexbox, Grid, `@keyframes` animations
- **JavaScript (ES6+)** — `async/await`, Fetch API, DOM manipulation, `localStorage`
- **Quotable API** — Public REST API for random inspirational quotes

## 📱 Responsive Breakpoints

| Breakpoint   | Description                         |
| ------------ | ----------------------------------- |
| > 768 px     | Desktop — multi-column grid         |
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
