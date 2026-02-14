# Technical Documentation

## Portfolio Website - Assignment 1

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
