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
  try {
    document.onfullscreenchange
      .querySelector(selector)
      .style.setProperty(
        "--vh",
        `${document.querySelector(reference).getBoundingClientRect().height}px`
      );
  } catch (error) {}
};
export default aboutWindow;
