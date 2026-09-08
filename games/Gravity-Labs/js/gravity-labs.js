document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       MOBILE NAVIGATION
    ========================================================= */

    const mobileMenuButton =
        document.querySelector(".mobile-menu-button");

    const navLinks =
        document.querySelector(".nav-links");

    if (mobileMenuButton && navLinks) {

        mobileMenuButton.addEventListener("click", () => {

            navLinks.classList.toggle("open");

            const isOpen =
                navLinks.classList.contains("open");

            mobileMenuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {
                navLinks.classList.remove("open");

                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );
            });

        });

    }


    /* =========================================================
       SCROLL REVEAL
    ========================================================= */

    const revealElements =
        document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(element => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("visible");
        });

    }


    /* =========================================================
       SCREENSHOT LIGHTBOX
    ========================================================= */

    const lightbox =
        document.querySelector(".lightbox");

    const lightboxImage =
        lightbox
            ? lightbox.querySelector("img")
            : null;

    const lightboxClose =
        lightbox
            ? lightbox.querySelector(".lightbox-close")
            : null;


    const screenshotButtons =
        document.querySelectorAll("[data-image]");


    if (
        lightbox &&
        lightboxImage &&
        screenshotButtons.length
    ) {

        screenshotButtons.forEach(button => {

            button.addEventListener("click", () => {

                const imagePath =
                    button.getAttribute("data-image");

                if (!imagePath) {
                    return;
                }

                lightboxImage.src = imagePath;

                lightbox.classList.add("active");

                document.body.classList.add(
                    "lightbox-open"
                );

            });

        });


        const closeLightbox = () => {

            lightbox.classList.remove("active");

            document.body.classList.remove(
                "lightbox-open"
            );

            /*
             * Clear the image after the transition.
             * This also prevents stale images from
             * hanging around.
             */

            setTimeout(() => {

                if (
                    !lightbox.classList.contains("active")
                ) {
                    lightboxImage.removeAttribute("src");
                }

            }, 250);

        };


        if (lightboxClose) {

            lightboxClose.addEventListener(
                "click",
                closeLightbox
            );

        }


        /*
         * Clicking the dark area closes the lightbox.
         */

        lightbox.addEventListener("click", event => {

            if (event.target === lightbox) {
                closeLightbox();
            }

        });


        /*
         * Escape closes the lightbox.
         */

        document.addEventListener("keydown", event => {

            if (
                event.key === "Escape" &&
                lightbox.classList.contains("active")
            ) {
                closeLightbox();
            }

        });

    }


    /* =========================================================
       SMOOTH ANCHOR SCROLLING
    ========================================================= */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener("click", event => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(targetId);

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            });

        });

});