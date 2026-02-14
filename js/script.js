// ===== Theme Toggle Functionality =====
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem("theme") || "light";
html.setAttribute("data-theme", currentTheme);

themeToggle.addEventListener("click", () => {
  const theme = html.getAttribute("data-theme") === "light" ? "dark" : "light";
  html.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
});

// ===== Greeting Message Based on Time of Day =====
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

// Set greeting on page load
setGreeting();

// ===== Smooth Scrolling for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const navHeight = document.querySelector(".navbar").offsetHeight;
      const targetPosition = target.offsetTop - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// ===== Contact Form Handling =====
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Basic validation
  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
    showFormMessage("Please fill in all fields.", "error");
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showFormMessage("Please enter a valid email address.", "error");
    return;
  }

  // Simulate form submission
  showFormMessage(
    `Thank you, ${name}! Your message has been sent successfully.`,
    "success",
  );

  // Reset form
  contactForm.reset();

  // Hide message after 5 seconds
  setTimeout(() => {
    formMessage.style.display = "none";
  }, 5000);
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

// ===== Scroll Reveal Animation =====
function reveal() {
  const reveals = document.querySelectorAll(
    ".project-card, .about-content, .contact-content",
  );

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
}

// Initialize reveal animation styles
document
  .querySelectorAll(".project-card, .about-content, .contact-content")
  .forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "all 0.8s ease";
  });

window.addEventListener("scroll", reveal);
reveal(); // Call once on page load

// ===== Interactive Project Cards =====
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-15px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(-10px) scale(1)";
  });
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

// ===== Loading Animation =====
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 100);
});
