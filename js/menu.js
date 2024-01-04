const menuBtnRef = document.querySelector(".menu-button");

menuBtnRef.addEventListener("click", () => {
  const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  console.log(expanded);
  menuBtnRef.classList.toggle("is-open");

  menuBtnRef.setAttribute("aria-expanded", !expanded);
});
