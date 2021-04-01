const sectionReveal = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(sectionReveal, {
  root: null,
  threshold: 0.2,
});
const sectionAppear = () => {
  document.querySelectorAll(".section").forEach((section) => {
    sectionObserver.observe(section);
    section.classList.add("section--hidden");
  });
};
export default sectionAppear;
