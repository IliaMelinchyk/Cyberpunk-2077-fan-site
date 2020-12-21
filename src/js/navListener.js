import mobileCheck from "./mobileCheck.js";
// Функции вызова и работы навигации
let navCheck = 0;
const navView = () => {
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
const navListener = () => {
  document.querySelector(".nav__btn").addEventListener("click", navView);
};
const navMove = (btn, section) => {
  document.querySelector(btn).addEventListener("click", () => {
    navView();
    document.querySelector(section).scrollIntoView({ behavior: "smooth" });
  });
};
export { navListener, navMove };
