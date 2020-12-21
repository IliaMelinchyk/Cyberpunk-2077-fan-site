import { navListener, navMove } from "./navListener";
import sectionAppear from "./sectionAppear";
import imgLazy from "./imgLazy";
import sliderChange from "./sliderChange";
import introAnimation from "./gsapAnimation";
import { release, setClock } from "./aboutTimer";
import { aboutWindow, mobileWindow } from "./windowResize";
// Полифилинг
import "core-js/stable";
import "regenerator-runtime/runtime";
// Активируется при загрузке страницы
const init = () => {
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };
  document.addEventListener("DOMContentLoaded", () => {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  });
  navListener();
  navMove("#nav-main-page", "#header");
  navMove("#nav-about", "#about");
  navMove("#nav-paths", "#paths");
  sectionAppear();
  imgLazy();
  sliderChange();
  introAnimation();
  setClock(release);
  document
    .querySelector(".about__background")
    .style.setProperty("--about-overflow", `0px`);
  document
    .querySelector(".paths__background")
    .style.setProperty("--paths-overflow", `0px`);

  aboutWindow(".about__background", ".about");
};
init();
