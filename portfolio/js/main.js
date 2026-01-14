/* =========================
   Smooth Scroll
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        if (targetId === "#" || targetId.length === 1) return;

        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        e.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth" });
    });
});

/* =========================
   Active Nav Link on Scroll
========================= */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

/* =========================
   Scroll Reveal Animation
========================= */
const revealElements = document.querySelectorAll(
    ".section, .skill-card, .project-card"
);

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("reveal");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* =========================
   Mobile Menu (Optional)
   (Add HTML button later if needed)
========================= */
// Example usage later:
// const menuBtn = document.querySelector(".menu-toggle");
// const nav = document.querySelector(".nav-links");

// menuBtn.addEventListener("click", () => {
//     nav.classList.toggle("open");
// });
