import { navListener, navMove } from "./navListener";
import sectionAppear from "./sectionAppear";
import imgLazy from "./imgLazy";
import sliderChange from "./sliderChange";
import introAnimation from "./gsapAnimation";
import { release, setClock } from "./aboutTimer";
// Полифилинг
import "core-js/stable";
import "regenerator-runtime/runtime";
// Активируется при загрузке страницы
const init = () => {
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };
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
  const mobileWindow = (selector) => {
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
