import gsap from "gsap";
const introAnimation = () => {
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
  tl.to("body", 0, { className: "body-hidden" });
  tl.to(".intro__text", { y: "0%", duration: 1, stagger: 0.3 });
  tl.to(".intro__slider", { y: "-100%", duration: 1.5, delay: 0.5 });
  tl.to(".intro", { y: "-100%", duration: 1 }, "-=1.1");
  tl.to(".header__video", 0, { display: "flex" }, "-=1");
  tl.to("body", 0, { className: "" }, "2.6");
  tl.fromTo(".header__v", { x: "-150%" }, { x: "0%", duration: 1 }, "-=0.9");
  tl.fromTo(".header__video", { x: "150%" }, { x: "0%", duration: 1 }, "-=0.9");
  tl.fromTo(".header__logo", { y: "-150%" }, { y: "0%", duration: 1 }, "-=0.9");
  tl.to(".intro", 0, { display: "none" });
};
export default introAnimation;
