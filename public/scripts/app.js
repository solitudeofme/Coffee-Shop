("use script");

// ============== functions ==============

const applyNavCart = (menu, side, func) => {
  if (func === "close") {
    overlay.classList.remove("overlay--visible");
    menu.classList.remove(`${side}-0`);
    menu.classList.add(`-${side}-64`);
  } else if (func === "open") {
    overlay.classList.add("overlay--visible");
    menu.classList.remove(`-${side}-64`);
    menu.classList.add(`${side}-0`);
  }
};
// Theme toggle button
const navCloseBtn = document.querySelector(".nav-close-btn");
const navOpenBtn = document.querySelector(".nav-open-btn");
const cartCloseBtn = document.querySelector(".cart-close-btn");
const cartOpenBtn = document.querySelector(".cart-open-btn");
const overlay = document.querySelector(".overlay");
const navMenu = document.querySelector(".nav-menu");
const cartMenu = document.querySelector(".cart-menu");
const shopTitle = document.querySelector(".shop-title");
const themeToggleBtns = document.querySelectorAll(".theme-toggle-btn");
const cartItemsInputs = document.querySelectorAll("input[data-input-counter]");
const shopSubMenu = document.getElementById("shop-sub-menu");
const shopSubMenuBtn = document.getElementById("shop-sub-menu-btn");

themeToggleBtns.forEach((themeToggleBtns) => {
  themeToggleBtns.addEventListener("click", () => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});

// number of items in the cart
document.addEventListener("click", (e) => {
  if (e.target.closest("button[data-input-counter-decrement]")) {
    const cartItemsInput = e.target
      .closest("form")
      .querySelector("input[ data-input-counter]");
    if (cartItemsInput.value) {
      cartItemsInput.value = PersianTools.digitsEnToFa(
        Math.max(1, Number(PersianTools.digitsFaToEn(cartItemsInput.value)) - 1)
      );
    }
  } else if (e.target.closest("button[data-input-counter-increment]")) {
    const cartItemsInput = e.target
      .closest("form")
      .querySelector("input[ data-input-counter]");

    cartItemsInput.value = PersianTools.digitsEnToFa(
      Math.min(999, Number(PersianTools.digitsFaToEn(cartItemsInput.value)) + 1)
    );
  }
});

cartItemsInputs.forEach((inputElement) => {
  const enforceDigitLimit = (e) => {
    inputElement.value = inputElement.value.replace(/[^0-9۰-۹]/g, "");
    if (inputElement.value.length >= 3) {
      inputElement.value = inputElement.value.substring(0, 3);
    }
  };

  inputElement.addEventListener("input", enforceDigitLimit);
});

navOpenBtn.addEventListener("click", () => {
  applyNavCart(navMenu, "right", "open");
});
cartOpenBtn.addEventListener("click", () => {
  applyNavCart(cartMenu, "left", "open");
});
navCloseBtn.addEventListener("click", () => {
  applyNavCart(navMenu, "right", "close");
});
overlay.addEventListener("click", () => {
  applyNavCart(navMenu, "right", "close");
  applyNavCart(cartMenu, "left", "close");
});
document.addEventListener("click", (e) => {
  if (e.target.closest(".cart-close-btn")) {
    applyNavCart(cartMenu, "left", "close");
  }
});

shopSubMenuBtn.addEventListener("click", () => {
  shopTitle.classList.toggle("text-orange-300");
  shopSubMenu.classList.toggle("hidden");
  shopSubMenu.classList.toggle("flex");
});
