const shopNow = document.querySelector(".shop");
const productSec = document.getElementById("product");
const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");
const navLinks = document.querySelector(".nav__links");
const nav = document.querySelector(".nav");
const emailSubBtn = document.querySelector(".btn_submit");
const email = document.getElementById("email");
const invalidEmail = document.querySelector(".invalid");
const validEmail = document.querySelector(".valid");
const nullEmail = document.querySelector(".null");

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

nav.addEventListener("mouseover", handleHover.bind(0.5));

nav.addEventListener("mouseout", handleHover.bind(1));

// close mobie function
const closeMobileMenu = function () {
  closeMenu.classList.add("hidden");
  openMenu.classList.remove("hidden");
  navLinks.classList.remove("active");

  const allLinks = nav.querySelectorAll(".nav__link");
  const logo = nav.querySelector(".logo");
  const cart = nav.querySelector(".cart");

  allLinks.forEach((link) => (link.style.opacity = 1));
  if (logo) logo.style.opacity = 1;
  if (cart) cart.style.opacity = 1;
};
// phone open
openMenu.addEventListener("click", function () {
  openMenu.classList.add("hidden");
  closeMenu.classList.remove("hidden");
  navLinks.classList.add("active");

  console.log("boy");
});
// phone  close
closeMenu.addEventListener("click", closeMobileMenu);
// shop now smooth scroll button
shopNow.addEventListener("click", function (e) {
  productSec.scrollIntoView({ behavior: "smooth" });
});

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  e.preventDefault();
  if (email.value === "") {
    invalidEmail.textContent = "Email is required";
    invalidEmail.classList.remove("hidden");
    validEmail.classList.add("hidden");
    setTimeout(() => {
      invalidEmail.classList.add("hidden");
    }, 5000);
    return;
  }
  if (!email.value.includes("@") || !email.value.includes(".com")) {
    invalidEmail.textContent = "Please enter a valid email address";
    invalidEmail.classList.remove("hidden");
    setTimeout(() => {
      invalidEmail.classList.add("hidden");
    }, 5000);
    return;
  }

  if (email.value.includes("@") && email.value.includes(".com")) {
    invalidEmail.classList.add("hidden");
    validEmail.classList.remove("hidden");
    email.value = "";
  }
  setTimeout(() => {
    validEmail.classList.add("hidden");
  }, 3000);
});
email.value = "";
