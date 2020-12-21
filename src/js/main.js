import { navListener, navMove } from "./navListener";
import sectionAppear from "./sectionAppear";
import imgLazy from "./imgLazy";
import sliderChange from "./sliderChange";
import mobileCheck from "./mobileCheck.js";
import introAnimation from "./gsapAnimation";
import serClock from "./aboutTimer";
// Полифилинг
import "core-js/stable";
import "regenerator-runtime/runtime";
// Активируется при загрузке страницы
const init = function () {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  navListener();
  navMove("#nav-main-page", "#main-page");
  navMove("#nav-about", "#about");
  navMove("#nav-paths", "#paths");
  document
    .querySelector(".about__background")
    .style.setProperty("--about-overflow", `0px`);
  document
    .querySelector(".paths__background")
    .style.setProperty("--paths-overflow", `0px`);
  const mobileWindow = function (selector) {
    document
      .querySelector(selector)
      .style.setProperty("--vh", `${window.innerHeight / 100}px`);
    window.addEventListener("resize", () => {
      document
        .querySelector(selector)
        .style.setProperty("--vh", `${window.innerHeight / 100}px`);
    });
  };
  mobileWindow("header");
  mobileWindow(".about");
  mobileWindow(".paths");
};
init();
