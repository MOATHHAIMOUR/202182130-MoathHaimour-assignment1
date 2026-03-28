// ===== Theme Toggle Functionality =====
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

// Load saved theme or default to 'light'
const savedTheme = localStorage.getItem("theme") || "light";
html.setAttribute("data-theme", savedTheme);

themeToggle.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

// ===== Time-based Greeting =====
function setGreeting() {
  const greetingElement = document.getElementById("greeting");
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good morning! Welcome to my portfolio.";
  } else if (hour < 18) {
    greeting = "Good afternoon! Welcome to my portfolio.";
  } else {
    greeting = "Good evening! Welcome to my portfolio.";
  }

  greetingElement.textContent = greeting;
}

setGreeting();

// ===== Personalised Visitor Greeting =====
const visitorNameInput = document.getElementById("visitorName");
const greetBtn = document.getElementById("greetBtn");
const personalGreeting = document.getElementById("personalGreeting");

// Restore saved visitor name if it exists
const savedName = localStorage.getItem("visitorName");
if (savedName) {
  visitorNameInput.value = savedName;
  showPersonalGreeting(savedName);
}

greetBtn.addEventListener("click", () => {
  const name = visitorNameInput.value.trim();
  if (!name) {
    personalGreeting.textContent = "Please enter your name first!";
    personalGreeting.style.color = "rgba(255,255,100,0.9)";
    return;
  }
  // Sanitise: strip any HTML tags to prevent XSS
  const safeName = name.replace(/[<>"'&]/g, "");
  localStorage.setItem("visitorName", safeName);
  showPersonalGreeting(safeName);
});

// Allow pressing Enter in the input field
visitorNameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") greetBtn.click();
});

function showPersonalGreeting(name) {
  const hour = new Date().getHours();
  let timeWord = hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening";
  personalGreeting.textContent = `Good ${timeWord}, ${name}! 🎉 Great to have you here.`;
  personalGreeting.style.color = "";
  // Re-trigger animation by removing and re-adding the element's animation
  personalGreeting.style.animation = "none";
  // Force reflow
  void personalGreeting.offsetWidth;
  personalGreeting.style.animation = "slideInLeft 0.5s ease";
}

// ===== Smooth Scrolling for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const navHeight = document.querySelector(".navbar").offsetHeight;
      const targetPosition = target.offsetTop - navHeight;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  });
});

// ===== Project Filter Tabs =====
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Update active button state
    filterButtons.forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");

    const filter = btn.dataset.filter;
    applyFilters(filter, document.getElementById("projectSearch").value);
  });
});

// ===== Live Project Search =====
const projectSearchInput = document.getElementById("projectSearch");

projectSearchInput.addEventListener("input", () => {
  const activeFilter =
    document.querySelector(".filter-btn.active").dataset.filter;
  applyFilters(activeFilter, projectSearchInput.value);
});

function applyFilters(category, searchTerm) {
  const term = searchTerm.trim().toLowerCase();
  let visibleCount = 0;

  projectCards.forEach((card) => {
    const matchesCategory =
      category === "all" || card.dataset.category === category;
    const title = card
      .querySelector(".project-title")
      .textContent.toLowerCase();
    const description = card
      .querySelector(".project-description")
      .textContent.toLowerCase();
    const matchesSearch =
      !term || title.includes(term) || description.includes(term);

    if (matchesCategory && matchesSearch) {
      card.classList.remove("hidden");
      visibleCount++;
    } else {
      card.classList.add("hidden");
    }
  });

  const noResults = document.getElementById("noResults");
  noResults.style.display = visibleCount === 0 ? "block" : "none";
}

// ===== Quote API (Data Fetching) =====
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const quoteLoading = document.getElementById("quoteLoading");
const quoteError = document.getElementById("quoteError");
const newQuoteBtn = document.getElementById("newQuoteBtn");

async function fetchQuote() {
  // Show loading state, hide content and error
  quoteLoading.style.display = "flex";
  quoteText.style.display = "none";
  quoteAuthor.style.display = "none";
  quoteError.style.display = "none";
  newQuoteBtn.disabled = true;
  newQuoteBtn.textContent = "Loading…";

  try {
    const response = await fetch("https://api.quotable.io/random");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    quoteText.textContent = data.content;
    quoteAuthor.textContent = `— ${data.author}`;

    quoteLoading.style.display = "none";
    quoteText.style.display = "block";
    quoteAuthor.style.display = "block";
  } catch (err) {
    quoteLoading.style.display = "none";
    quoteError.style.display = "block";
    console.error("Quote fetch failed:", err);
  } finally {
    newQuoteBtn.disabled = false;
    newQuoteBtn.textContent = "New Quote ✨";
  }
}

newQuoteBtn.addEventListener("click", fetchQuote);
// Auto-load on page ready
fetchQuote();

// ===== Contact Form Handling =====
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    showFormMessage("Please fill in all fields.", "error");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showFormMessage("Please enter a valid email address.", "error");
    return;
  }

  showFormMessage(
    `Thank you, ${name}! Your message has been sent successfully. I'll get back to you soon.`,
    "success",
  );

  contactForm.reset();

  setTimeout(() => {
    formMessage.style.display = "none";
  }, 6000);
});

function showFormMessage(message, type) {
  formMessage.textContent = message;
  formMessage.className = `form-message ${type}`;
  formMessage.style.display = "block";
}

// ===== Navbar Background Change on Scroll =====
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "var(--card-bg)";
    navbar.style.boxShadow = "var(--shadow-hover)";
  } else {
    navbar.style.boxShadow = "var(--shadow)";
  }
});

// ===== Scroll Reveal Animation for .reveal-card elements =====
function revealCards() {
  document.querySelectorAll(".reveal-card").forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealCards);
// Run once on load so visible cards appear immediately
revealCards();

// ===== Legacy reveal for non-card sections =====
function reveal() {
  const reveals = document.querySelectorAll(".about-content, .contact-content");
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - 150) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
}

document.querySelectorAll(".about-content, .contact-content").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  el.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", reveal);
reveal();

// ===== Page Load Fade-in =====
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 100);
});

// ===== Console Welcome Message =====
console.log(
  "%c👋 Welcome to My Portfolio!",
  "font-size: 20px; color: #667eea; font-weight: bold;",
);
console.log(
  "%cInterested in the code? Check out my GitHub!",
  "font-size: 14px; color: #764ba2;",
);
