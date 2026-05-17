const revealItems = document.querySelectorAll(
  ".metric-card, .focus-list article, .timeline-item, .logo-rail, .capability-grid span, .credential-card"
);

revealItems.forEach((item) => item.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => observer.observe(item));

const topButton = document.querySelector(".top-button");

const updateTopButton = () => {
  topButton.classList.toggle("visible", window.scrollY > 520);
};

updateTopButton();
window.addEventListener("scroll", updateTopButton, { passive: true });
