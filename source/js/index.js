// This is for disclaimer button to toggle
function toggleDisclaimer() {
  var x = document.getElementById("disclaimer-references");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// This is for hamburger animation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".main-nav");
  const navLink = document.querySelectorAll(".main-nav li");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLink.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    //Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

// Smooth Scroll
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 300,
});
