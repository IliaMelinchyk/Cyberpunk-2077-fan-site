import mobileCheck from "./mobileCheck.js";
const navView = function () {
  document.querySelector(".nav__btn").classList.toggle("nav__open");
  document
    .querySelector(".nav__background")
    .classList.toggle("nav__background-window");
  document.querySelector(".nav__links").classList.toggle("nav__show");
  if (!mobileCheck()) {
    document.querySelector(".nav").classList.toggle("nav__overflow");
    document
      .querySelector(".about__background")
      .classList.toggle("about__background-overflow");
    document.body.classList.toggle("body-hidden");
    if (window.innerWidth < 900) {
      document.body.classList.toggle("body-hidden-small");
    }
  }
};
const navListener = function () {
  document.querySelector(".nav__btn").addEventListener("click", navView);
};
export default navListener();
