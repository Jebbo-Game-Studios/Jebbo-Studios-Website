/* ============================================================
   BACK TO TOP
============================================================ */

const backToTop =
  document.getElementById(
    "backToTop"
  );


function updateBackToTop() {

  if (!backToTop) {
    return;
  }

  if (window.scrollY > 600) {

    backToTop.classList.add(
      "visible"
    );

  } else {

    backToTop.classList.remove(
      "visible"
    );

  }

}


window.addEventListener(
  "scroll",
  updateBackToTop,
  { passive: true }
);


if (backToTop) {

  backToTop.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

}


updateBackToTop();