const navBtn = document.querySelector(".nav__btn"),
  navBackground = document.querySelector(".nav__background"),
  nav = document.querySelector(".nav"),
  navLinks = document.querySelector(".nav__links");
navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("nav__open");
  nav.classList.toggle("nav__overflow");
  navBackground.classList.toggle("nav__background-window");
  navLinks.classList.toggle("nav__show");
  document.body.classList.toggle("body-hidden");
});

const allSections = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

const imgTargets = document.querySelectorAll("img[data-src]");
const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});
imgTargets.forEach((img) => imgObserver.observe(img));

const sliderChange = function () {
  const modal = document.querySelector(".modal");
  const modalImgCont = document.querySelector(".modal__img-container");
  const modalOverlay = document.querySelector(".modal__overlay");
  const btnCloseModal = document.querySelector(".modal__close");
  const btnsOpenModal = document.querySelector(".slider__show-modal");
  let counter = 1;
  document
    .querySelector(".slider__navigation-manual")
    .addEventListener(`click`, (e) => {
      const btn = e.target.closest(".slider__manual-btn");
      if (!btn) return;
      counter = +btn.dataset.slider;
    });
  document.querySelector(".slider__left").addEventListener(`click`, () => {
    counter--;
    if (counter === 0) counter = 5;
    document.getElementById(`radio${counter}`).checked = true;
  });
  document.querySelector(".slider__right").addEventListener(`click`, () => {
    counter++;
    if (counter > 5) counter = 1;
    document.getElementById(`radio${counter}`).checked = true;
  });
  setInterval(function () {
    counter++;
    if (counter > 5) {
      counter = 1;
    }
    document.getElementById(`radio${counter}`).checked = true;
  }, 5000);
  const openModal = function () {
    document.body.classList.add("body-hidden");
    modalImgCont.innerHTML = "";
    modalImgCont.insertAdjacentHTML(
      "afterbegin",
      `<img src="/big-slide-${counter}.jpg" alt="">`
    );
    modal.classList.remove("modal__hidden");
    modalOverlay.classList.remove("modal__hidden");
  };
  const closeModal = function () {
    document.body.classList.remove("body-hidden");
    modal.classList.add("modal__hidden");
    modalOverlay.classList.add("modal__hidden");
  };
  btnsOpenModal.addEventListener("click", openModal);
  btnCloseModal.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", closeModal);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("modal__hidden")) {
      closeModal();
    }
  });
};
sliderChange();

import gsap from "gsap";
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to("body", 0, { className: "body-hidden" });
tl.to(".intro__text", { y: "0%", duration: 1, stagger: 0.3 });
tl.to(".intro__slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1.1");
tl.to("body", 0, { className: "" });
tl.fromTo(".header__v", { x: "-150%" }, { x: "0%", duration: 1 }, "-=0.9");
tl.fromTo(".header__video", { x: "-150%" }, { x: "0%", duration: 1 }, "-=0.9");
tl.fromTo(".header__logo", { x: "-150%" }, { x: "0%", duration: 1 }, "-=0.9");
