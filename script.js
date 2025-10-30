window.addEventListener("DOMContentLoaded", () => {
  // Prouct data
  const products = [
    {
      id: 1,
      name: "MELLO DREAM 725i",
      price: 50,
      image: "./img/cart-img/cart1.png",
      description:
        "Experience crystal-clear sound with deep bass and noise cancellation—perfect for music, calls, and gaming.",
    },
    {
      id: 2,
      name: "XELLO WH-1000XM6",
      price: 20,
      image: "./img/cart-img/cart2.png",
      description:
        "Long-lasting comfort and battery life—stay connected all day without missing a beat.",
    },
  ];

  const shopNow = document.querySelector(".shop");
  const productSec = document.getElementById("product");
  const productDisplay = document.querySelector(".product_display");

  const switchbtn = document.querySelectorAll(".switch_img");
  const openMenu = document.getElementById("open");
  const closeMenu = document.getElementById("close");
  const navLinks = document.querySelector(".nav__links");
  const nav = document.querySelector(".nav");
  const emailSubBtn = document.querySelector(".btn_submit");
  const email = document.getElementById("email");

  const emailMsg = document.querySelector(".email_msg");

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

  // Email message function
  const emailMessage = function (color) {
    emailMsg.classList.remove("hidden");
    emailMsg.style.color = color;
    emailMessage("#ef4444");

    setTimeout(() => {
      emailMsg.classList.add("hidden");
    }, 5000);
  };

  // form email validator
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    e.preventDefault();
    if (email.value === "") {
      emailMsg.textContent = "Email is required";
      emailMessage("#ef4444");
      return;
    }
    if (!email.value.includes("@") || !email.value.includes(".com")) {
      emailMsg.textContent = "Please enter a valid email address";
      emailMessage("#ef4444");

      return;
    }

    if (email.value.includes("@") && email.value.includes(".com")) {
      email.value = "";
      emailMsg.textContent = "Thank you for subscribing!";
      emailMessage("#ee6e47");
    }
  });

  // cart display function

  const showProduct = function (i) {
    const item = products[i];
    productDisplay.innerHTML = `
    <div class="product_display">
      <!-- cart img-->
      <div class="" >
        <img src=${item.image} alt="" class="cart_img" />
      </div>
      
      <!-- cart description -->
      <div class="cart_des">
        <div>
          <!-- description header -->
          <h2>${item.name}</h2>
          <!-- description -->
          <p>${item.description}</p>
        </div>

        <!-- price -->
        <span class="cart_price">$${item.price}</span>
        
        <div>
          <button class="btn_cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000"
                fill-rule="evenodd"
                d="M8.418 3.25c.28-.59.884-1 1.582-1h4c.698 0 1.301.41 1.582 1c.683.006 1.216.037 1.692.223a3.25 3.25 0 0 1 1.426 1.09c.367.494.54 1.127.776 1.998l.742 2.722l.28.841l.024.03c.901 1.154.472 2.87-.386 6.301c-.546 2.183-.818 3.274-1.632 3.91c-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635c-.814-.636-1.087-1.727-1.632-3.91c-.858-3.431-1.287-5.147-.386-6.301l.024-.03l.28-.841l.742-2.722c.237-.871.41-1.505.776-1.999a3.25 3.25 0 0 1 1.426-1.089c.476-.186 1.008-.217 1.692-.222m.002 1.502c-.662.007-.928.032-1.148.118a1.75 1.75 0 0 0-.768.587c-.176.237-.28.568-.57 1.635l-.57 2.089C6.384 9 7.778 9 9.684 9h4.631c1.907 0 3.3 0 4.32.18l-.569-2.089c-.29-1.067-.394-1.398-.57-1.635a1.75 1.75 0 0 0-.768-.587c-.22-.086-.486-.111-1.148-.118A1.75 1.75 0 0 1 14 5.75h-4a1.75 1.75 0 0 1-1.58-.998"
                clip-rule="evenodd"
              />
            </svg>
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  `;
  };
  // cart display default
  showProduct(0);
  // cart display button

  switchbtn.forEach((btn, i) => {
    btn.dataset.index = i;
    if (i === 0) btn.classList.add("cart_active");
    btn.addEventListener("click", function () {
      switchbtn.forEach((b) => b.classList.remove("cart_active"));
      this.classList.add("cart_active");
      const index = parseInt(this.dataset.index);
      showProduct(index);
    });
  });
});

let currentIndex = 0;
let cart = [];
