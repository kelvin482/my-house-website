// script.js

// Placeholder for future JavaScript functionality
// Example: highlight current page in navigation, handle form validation, etc.

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-links a");
    const currentPath = window.location.pathname.split("/").pop();
  
    links.forEach(link => {
      if (link.getAttribute("href") === currentPath) {
        link.style.color = "#60a5fa";
      }
    });
  });
  