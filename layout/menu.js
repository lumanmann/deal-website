const mobileMenu = document.querySelector("#mobile-menu");
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");

openMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("w-0");
  mobileMenu.classList.add("w-screen");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("w-screen");
  mobileMenu.classList.add("w-0");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    mobileMenu.classList.remove("w-screen");
    mobileMenu.classList.add("w-0");
  }
});
