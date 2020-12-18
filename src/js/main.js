import navListener from "./navListener";
import sectionAppear from "./sectionAppear";
import imgLazy from "./imgLazy";
import sliderChange from "./sliderChange";
import mobileCheck from "./mobileCheck.js";
import introAnimation from "./gsapAnimation";

document
  .querySelector(".about__background")
  .style.setProperty("--about-overflow", `0px`);
document
  .querySelector(".about__background")
  .style.setProperty("--about-body-padding", `6rem`);
document
  .querySelector("header")
  .style.setProperty("--vh", `${window.innerHeight / 100}px`);
window.addEventListener("resize", () => {
  document
    .querySelector("header")
    .style.setProperty("--vh", `${window.innerHeight / 100}px`);
});
console.log(window.innerWidth);
