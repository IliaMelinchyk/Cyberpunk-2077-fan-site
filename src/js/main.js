const navBtn = document.querySelector(".nav__btn"),
  navBackground = document.querySelector(".nav__background"),
  navLinks = document.querySelector(".nav__links");
navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("open");
  navBackground.classList.toggle("nav__background-window");
  navLinks.classList.toggle("nav__show");
});
