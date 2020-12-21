const aboutWindow = (selector, reference) => {
  document
    .querySelector(selector)
    .style.setProperty(
      "--vh",
      `${document.querySelector(reference).getBoundingClientRect().height}px`
    );
  window.addEventListener("resize", () => {
    document
      .querySelector(selector)
      .style.setProperty(
        "--vh",
        `${document.querySelector(reference).getBoundingClientRect().height}px`
      );
  });
  document.onfullscreenchange
    .querySelector(selector)
    .style.setProperty(
      "--vh",
      `${document.querySelector(reference).getBoundingClientRect().height}px`
    );
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
