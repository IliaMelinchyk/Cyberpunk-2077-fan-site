// Загрузка изображений плохого качества перед изображениями хорошего
const loadImg = (entries, observer) => {
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
  threshold: 0.1,
});
const imgLazy = () => {
  document
    .querySelectorAll("img[data-src]")
    .forEach((img) => imgObserver.observe(img));
};
export default imgLazy;
