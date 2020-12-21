const aboutWindow = (selector, reference) => {
  const changeSize = () => {
    document
      .querySelector(selector)
      .style.setProperty(
        "--vh",
        `${document.querySelector(reference).getBoundingClientRect().height}px`
      );
  };
  changeSize();
  window.addEventListener("resize", changeSize);
  document.onfullscreenchange = changeSize();
};
const mobileWindow = (selector) => {
  document
    .querySelector(selector)
    .style.setProperty("--vh", `${window.innerHeight / 100}px`);
  window.addEventListener("resize", () => {
    document
      .querySelector(selector)
      .style.setProperty("--vh", `${window.innerHeight / 100}px`);
  });
};
export { aboutWindow, mobileWindow };
