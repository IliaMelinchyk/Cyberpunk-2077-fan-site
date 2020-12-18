import mobileCheck from "./mobileCheck.js";
let bodyCheck = 6;
let navCheck = 0;
const navView = function () {
  document.querySelector(".nav__btn").classList.toggle("nav__open");
  document
    .querySelector(".nav__background")
    .classList.toggle("nav__background-window");
  document.querySelector(".nav__links").classList.toggle("nav__show");
  if (!mobileCheck()) {
    document.querySelector(".nav").classList.toggle("nav__overflow");
    if (navCheck === 0) navCheck = 17;
    else navCheck = 0;
    document
      .querySelector(".about__background")
      .style.setProperty("--about-overflow", `${navCheck}px`);
    document.body.classList.toggle("body-hidden");
    bodyCheck = 6;
    document
      .querySelector(".about__background")
      .style.setProperty("--about-body-padding", `${bodyCheck}rem`);
    if (window.innerWidth < 900) {
      document.body.classList.toggle("body-hidden-small");
      bodyCheck = 0;

      console.log(bodyCheck);
      document
        .querySelector(".about__background")
        .style.setProperty("--about-body-padding", `${bodyCheck}rem`);
    }
  }
};
const navListener = function () {
  document.querySelector(".nav__btn").addEventListener("click", navView);
};
export default navListener();
