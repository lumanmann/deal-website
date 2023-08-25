const mobileMenu = document.querySelector("#mobile-menu");
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");

openMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("w-0");
  mobileMenu.classList.add("w-full");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("w-full");
  mobileMenu.classList.add("w-0");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    mobileMenu.classList.remove("w-full");
    mobileMenu.classList.add("w-0");
  }
});
