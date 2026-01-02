
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click",()=>{
  document.body.classList.toggle("light");
  toggle.innerHTML = document.body.classList.contains("light")
    ? '<i class="fas fa-moon"></i>'
    : '<i class="fas fa-sun"></i>';
});
