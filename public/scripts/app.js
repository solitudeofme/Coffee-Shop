("use script");

// Theme toggle button
const themeToggleBtn = document.getElementById("theme-toggle-btn");
themeToggleBtn.addEventListener("click", () => {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
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
const inputElements = document.querySelectorAll("input[data-input-counter]");

inputElements.forEach((inputElement) => {
  // Function to enforce the digit limit
  const enforceDigitLimit = (e) => {
    // Allow backspace, delete, tab, escape, enter, and navigation keys for keydown event
    if (
      e.type === "keydown" &&
      (e.key === "Backspace" ||
        e.key === "Delete" ||
        e.key === "Tab" ||
        e.key === "Escape" ||
        e.key === "Enter" ||
        (e.key >= "ArrowLeft" && e.key <= "ArrowDown"))
    ) {
      return;
    }

    // Check the length of the value
    if (inputElement.value.length >= 3) {
      e.preventDefault();
      inputElement.value = inputElement.value.substring(0, 3);
    }
  };

  // Event listeners for keydown, paste, and input events
  inputElement.addEventListener("keydown", enforceDigitLimit);
  inputElement.addEventListener("paste", (e) => {
    setTimeout(() => enforceDigitLimit(e), 0);
  });
  inputElement.addEventListener("input", enforceDigitLimit);
});
