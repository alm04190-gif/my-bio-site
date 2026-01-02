// Stagger button animation
const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn, i) => {
  setTimeout(() => {
    btn.classList.add("show");
  }, i * 160);
});

// Theme toggle with save
const toggle = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  toggle.textContent = "☀️";
}

toggle.onclick = () => {
  body.classList.toggle("light");
  const isLight = body.classList.contains("light");
  toggle.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
};
