// Toggle Menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth scroll for "Explore More" button
document.getElementById("learn-btn").addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

// Form Submit Alert
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✅ Thank you for reaching out! I’ll get back to you soon.");
});

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeToggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});
