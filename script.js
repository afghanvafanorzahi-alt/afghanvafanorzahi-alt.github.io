/* =====================================================
   ROHANI 98
   Main Website JavaScript
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       ELEMENTS
    ================================================= */

    const menuBtn = document.getElementById("menuBtn");

    const nav = document.querySelector("nav");

    const navLinks = document.getElementById("navLinks");

    const topBtn = document.getElementById("topBtn");

    const year = document.getElementById("year");


    /* =================================================
       MOBILE MENU
    ================================================= */

    if (menuBtn && nav && navLinks) {

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("active");

            const isOpen = nav.classList.contains("active");

            menuBtn.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        /* Close menu after clicking a link */

        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("active");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =================================================
       BACK TO TOP BUTTON
    ================================================= */

    window.addEventListener("scroll", () => {

        if (!topBtn) {
            return;
        }


        if (window.scrollY > 400) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    });


    /* =================================================
       TOP BUTTON CLICK
    ================================================= */

    if (topBtn) {

        topBtn.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =================================================
       CURRENT YEAR
    ================================================= */

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /* =================================================
       COMING SOON BUTTONS
    ================================================= */

    document
        .querySelectorAll("[data-coming-soon]")
        .forEach(button => {

            button.addEventListener("click", () => {

                alert(
                    "این برنامه هنوز برای دانلود آماده نشده است."
                );

            });

        });


    /* =================================================
       DOWNLOAD BUTTON
    ================================================= */

    const downloadButton =
        document.querySelector(".download-btn");


    if (downloadButton) {

        downloadButton.addEventListener(
            "click",
            () => {

                console.log(
                    "دانلود Rohani شروع شد."
                );

            }
        );

    }


});