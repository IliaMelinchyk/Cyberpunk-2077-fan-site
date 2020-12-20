import mobileCheck from "./mobileCheck.js";
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
    document
      .querySelector(".paths__background")
      .style.setProperty("--paths-overflow", `${navCheck}px`);
    document.body.classList.toggle("body-hidden");
  }
};
const navListener = function () {
  document.querySelector(".nav__btn").addEventListener("click", navView);
};
const navMove = function (btn, section) {
  document.querySelector(btn).addEventListener("click", function () {
    navView();
    document.querySelector(section).scrollIntoView({ behavior: "smooth" });
  });
};
export { navListener, navMove };
