const checkbox = document.getElementById("checkbox");

// Apply system preference on first load
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.body.classList.add("dark");
  checkbox.checked = true;
}

// Toggle dark mode when switch is clicked
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// Smooth scroll (unchanged)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById(link.getAttribute('href').substring(1))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
