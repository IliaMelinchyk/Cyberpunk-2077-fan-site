import { navListener, navMove } from "./navListener";
import sectionAppear from "./sectionAppear";
import imgLazy from "./imgLazy";
import sliderChange from "./sliderChange";
import mobileCheck from "./mobileCheck.js";
import introAnimation from "./gsapAnimation";
import serClock from "./aboutTimer";

import "core-js/stable";
import "regenerator-runtime/runtime";

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
  document
    .querySelector("header")
    .style.setProperty("--vh", `${window.innerHeight / 100}px`);
  window.addEventListener("resize", () => {
    document
      .querySelector("header")
      .style.setProperty("--vh", `${window.innerHeight / 100}px`);
  });
};
init();
