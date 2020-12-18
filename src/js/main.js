import navListener from "./navListener";
import sectionAppear from "./sectionAppear";
import imgLazy from "./imgLazy";
import sliderChange from "./sliderChange";
import mobileCheck from "./mobileCheck.js";
import introAnimation from "./gsapAnimation";

document
  .querySelector("header")
  .style.setProperty("--vh", `${window.innerHeight / 100}px`);
window.addEventListener("resize", () => {
  document
    .querySelector("header")
    .style.setProperty("--vh", `${window.innerHeight / 100}px`);
});
console.log(window.innerWidth);
