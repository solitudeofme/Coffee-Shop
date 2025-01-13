("use script");

// Theme toggle button
const themeToggleBtns = document.querySelectorAll(".theme-toggle-btn");
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
const cartItemsInputs = document.querySelectorAll("input[data-input-counter]");

cartItemsInputs.forEach((inputElement) => {
  const enforceDigitLimit = (e) => {
    inputElement.value = inputElement.value.replace(/[^0-9۰-۹]/g, "");
    if (inputElement.value.length >= 3) {
      inputElement.value = inputElement.value.substring(0, 3);
    }
  };

  inputElement.addEventListener("input", enforceDigitLimit);
});

const xMarkBtns = document.querySelectorAll(".x-mark-btn");

xMarkBtns.forEach((xMarkBtn) => {
  xMarkBtn.addEventListener("click", () => {
    document.querySelector(".overlay").classList.add("hidden");
    xMarkBtn.closest(".window").classList.remove("right-0");
    xMarkBtn.closest(".window").classList.add("-right-full");
  });
});
