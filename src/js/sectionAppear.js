// Двигает секцию вверх при приближении к ней
const sectionReveal = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(sectionReveal, {
  root: null,
  threshold: 0.15,
});
const sectionAppear = function () {
  document.querySelectorAll(".section").forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add("section--hidden");
  });
};
export default sectionAppear;
