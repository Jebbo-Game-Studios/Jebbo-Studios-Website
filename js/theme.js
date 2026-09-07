/* ============================================================
   JEBBO GAME STUDIOS
   Main site interactions
============================================================ */


/* ============================================================
   NAVBAR SCROLL EFFECT
============================================================ */

const navbar = document.querySelector(".navbar");

function updateNavbar() {

  if (!navbar) {
    return;
  }

  if (window.scrollY > 30) {

    navbar.classList.add("scrolled");

  } else {

    navbar.classList.remove("scrolled");

  }

}

window.addEventListener(
  "scroll",
  updateNavbar,
  { passive: true }
);

updateNavbar();



/* ============================================================
   MOBILE NAVIGATION
============================================================ */

const mobileMenu = document.getElementById("mobileMenu");
const mainNav = document.getElementById("mainNav");


function closeMobileMenu() {

  if (!mobileMenu || !mainNav) {
    return;
  }

  mainNav.classList.remove("open");

  mobileMenu.setAttribute(
    "aria-expanded",
    "false"
  );

  document.body.classList.remove(
    "menu-open"
  );

}


function openMobileMenu() {

  if (!mobileMenu || !mainNav) {
    return;
  }

  mainNav.classList.add("open");

  mobileMenu.setAttribute(
    "aria-expanded",
    "true"
  );

  document.body.classList.add(
    "menu-open"
  );

}


if (mobileMenu) {

  mobileMenu.addEventListener(
    "click",
    () => {

      const isOpen =
        mainNav.classList.contains("open");

      if (isOpen) {

        closeMobileMenu();

      } else {

        openMobileMenu();

      }

    }
  );

}


if (mainNav) {

  const navigationLinks =
    mainNav.querySelectorAll("a");

  navigationLinks.forEach(
    (link) => {

      link.addEventListener(
        "click",
        closeMobileMenu
      );

    }
  );

}


window.addEventListener(
  "resize",
  () => {

    if (window.innerWidth > 700) {

      closeMobileMenu();

    }

  }
);



/* ============================================================
   SCROLL REVEAL
============================================================ */

const revealElements =
  document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

  const revealObserver =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach(
          (entry) => {

            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add(
              "revealed"
            );

            observer.unobserve(
              entry.target
            );

          }
        );

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );


  revealElements.forEach(
    (element) => {

      revealObserver.observe(
        element
      );

    }
  );

} else {

  revealElements.forEach(
    (element) => {

      element.classList.add(
        "revealed"
      );

    }
  );

}



/* ============================================================
   CURRENT YEAR
============================================================ */

const currentYear =
  document.getElementById(
    "currentYear"
  );


if (currentYear) {

  currentYear.textContent =
    new Date().getFullYear();

}



/* ============================================================
   DISABLE PLACEHOLDER LINKS
============================================================ */

const placeholderLinks =
  document.querySelectorAll(
    ".social-placeholder"
  );


placeholderLinks.forEach(
  (link) => {

    link.addEventListener(
      "click",
      (event) => {

        if (link.getAttribute("href") === "#") {

          event.preventDefault();

        }

      }
    );

  }
);