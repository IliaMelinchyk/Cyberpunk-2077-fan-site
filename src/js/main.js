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
  const imgSrc = entry.target.src;
  console.log(imgSrc);
  console.log(imgSrc.replace("-lazy", ""));
  entry.target.src = entry.target.src.replace("-lazy", "");
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
