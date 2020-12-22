const aboutWindow = (selector, reference) => {
  const sizeChange = () => {
    document
      .querySelector(selector)
      .style.setProperty(
        "--vh",
        `${document.querySelector(reference).getBoundingClientRect().height}px`
      );
  };
  document.addEventListener("DOMContentLoaded", sizeChange);
  window.addEventListener("resize", sizeChange);
  document.onfullscreenchange
    .querySelector(selector)
    .style.setProperty(
      "--vh",
      `${document.querySelector(reference).getBoundingClientRect().height}px`
    );
};
// Не используется в этой версии
const mobileWindow = (selector) => {
  const mobileChange = () => {
    document
      .querySelector(selector)
      .style.setProperty("--vh", `${window.innerHeight / 100}px`);
  };
  mobileChange();
  window.addEventListener("resize", mobileChange);
};
export { aboutWindow, mobileWindow };
