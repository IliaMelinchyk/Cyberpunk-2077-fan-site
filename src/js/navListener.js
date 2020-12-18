import mobileCheck from "./mobileCheck.js";
const navView = function () {
  document.querySelector(".nav__btn").classList.toggle("nav__open");
  document
    .querySelector(".nav__background")
    .classList.toggle("nav__background-window");
  document.querySelector(".nav__links").classList.toggle("nav__show");
  if (!mobileCheck()) {
    document.querySelector(".nav").classList.toggle("nav__overflow");
    document.body.classList.toggle("body-hidden");
  }
};
const navListener = function () {
  document.querySelector(".nav__btn").addEventListener("click", navView);
};
export default navListener();
