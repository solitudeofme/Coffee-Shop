"use script";

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
