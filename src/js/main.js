const menuBtn = document.querySelector(".nav__btn"),
  nav = document.querySelector(".nav");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menuBtn.classList.toggle("nav__background");
});
