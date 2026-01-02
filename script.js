// সব reveal class এলিমেন্ট ধরছি
const reveals = document.querySelectorAll(".reveal");

// Scroll হলে এই ফাংশন কাজ করবে
function revealOnScroll() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 80;

    // এলিমেন্ট স্ক্রিনে এলে active হবে
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

// Scroll এবং page load এ trigger
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);