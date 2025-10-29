const shopNow = document.querySelector(".shop");
const productSec = document.getElementById("product");
const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");
const navLinks = document.querySelector(".nav__links");
const nav = document.querySelector(".nav");
const body = document.body;

// nav smoth scroll
navLinks.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    closeMobileMenu();
    // console.log("link");
  }
});

// Menu fad animation
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector(".logo");
    const cart = link.closest(".nav").querySelector(".cart");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
    cart.style.opacity = this;
  }
};
nav.addEventListener("mouseover", handleHover.bind(0.5));

nav.addEventListener("mouseout", handleHover.bind(1));

// close mobie function
const closeMobileMenu = function () {
  closeMenu.classList.add("hidden");
  openMenu.classList.remove("hidden");
  navLinks.classList.remove("active");
  body.classList.remove("menu-open");
  document.documentElement.classList.remove("menu-open");
  handleHover(1);
};
// phone open
openMenu.addEventListener("click", function () {
  openMenu.classList.add("hidden");
  closeMenu.classList.remove("hidden");
  navLinks.classList.add("active");
  body.classList.add("menu-open");
  document.documentElement.classList.add("menu-open");
  console.log("boy");
});
// phone  close
closeMenu.addEventListener("click", closeMobileMenu);
// shop now smooth scroll button
shopNow.addEventListener("click", function (e) {
  productSec.scrollIntoView({ behavior: "smooth" });
});
