// ROHANI 98 - script.js
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");
    const topBtn = document.getElementById("topBtn");
    const year = document.getElementById("year");

    // Mobile menu
    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("open");
            menuBtn.setAttribute(
                "aria-expanded",
                navLinks.classList.contains("open") ? "true" : "false"
            );
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
                menuBtn.setAttribute("aria-expanded", "false");
            });
        });
    }

    // Back to top button
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            topBtn?.classList.add("show");
        } else {
            topBtn?.classList.remove("show");
        }
    });

    topBtn?.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Automatic current year
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Download buttons that don't have a real file yet
    document.querySelectorAll("[data-coming-soon]").forEach(button => {
        button.addEventListener("click", event => {
            event.preventDefault();
            alert("این برنامه هنوز برای دانلود آماده نشده است.");
        });
    });
});
