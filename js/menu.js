const menuBtnRef = document.querySelector(".menu-button");
const mobileMenuRef = document.querySelector(".mobile-menu");

menuBtnRef.addEventListener("click", () => {
  const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  menuBtnRef.classList.toggle("is-open");
  mobileMenuRef.classList.toggle("is-open");

  menuBtnRef.setAttribute("aria-expanded", !expanded);
});
