const toggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Initial setup
if (prefersDark) {
  document.body.classList.add('dark');
  themeIcon.src = 'assets/sun.svg';
} else {
  themeIcon.src = 'assets/moon.svg';
}

// Toggle theme on click
toggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  themeIcon.src = isDark ? 'assets/sun.svg' : 'assets/moon.svg';
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById(link.getAttribute('href').substring(1))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
