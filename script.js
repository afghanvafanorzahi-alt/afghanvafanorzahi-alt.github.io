document.addEventListener("DOMContentLoaded", function () {

    /* ================= MOBILE MENU ================= */

    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.getElementById("navMenu");


    if (menuToggle && navMenu) {

        menuToggle.addEventListener(
            "click",
            function () {

                navMenu.classList.toggle("active");

            }
        );


        const navLinks =
            navMenu.querySelectorAll("a");


        navLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    navMenu.classList.remove("active");

                }
            );

        });

    }


    /* ================= CURRENT YEAR ================= */

    const currentYear =
        document.getElementById("currentYear");


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* ================= COMING SOON ================= */

    const comingSoonButtons =
        document.querySelectorAll(
            "[data-coming-soon]"
        );


    comingSoonButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    alert(
                        "این برنامه به‌زودی در سایت منتشر خواهد شد."
                    );

                }
            );

        }
    );


    /* ================= TOP BUTTON ================= */

    const topButton =
        document.getElementById("topButton");


    if (topButton) {

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 400) {

                    topButton.style.display =
                        "block";

                } else {

                    topButton.style.display =
                        "none";

                }

            }
        );


        topButton.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* ================= DOWNLOAD LOG ================= */

    const downloadLinks =
        document.querySelectorAll(
            'a[download]'
        );


    downloadLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    console.log(
                        "دانلود برنامه:",
                        link.getAttribute("download")
                    );

                }
            );

        }
    );

});