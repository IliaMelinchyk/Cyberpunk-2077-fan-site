const navBtn = document.querySelector(".nav__btn"),
  navBackground = document.querySelector(".nav__background"),
  navLinks = document.querySelector(".nav__links");
navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("open");
  navBackground.classList.toggle("nav__background-window");
  navLinks.classList.toggle("nav__show");
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
};
sliderChange();
