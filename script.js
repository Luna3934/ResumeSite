// GSAP Scroll Animations
gsap.registerPlugin(ScrollTrigger);

// Fade-in animations for home section
gsap.from(".profile-pic", { duration: 1, opacity: 0, x: -50 });
gsap.from(".home-text h1", { duration: 1, opacity: 0, x: 50 });
gsap.from(".home-text p", { duration: 1, opacity: 0, x: 50, stagger: 0.3 });

gsap.to(".skill-circle", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".skills-container",
        start: "top 80%",
    }
});

// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
