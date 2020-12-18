import mobileCheck from "./mobileCheck.js";

const slider = document.querySelector(".slider");
const modal = document.querySelector(".modal");
const modalImgCont = document.querySelector(".modal__img-container");
const modalOverlay = document.querySelector(".modal__overlay");
const btnCloseModal = document.querySelector(".modal__close");
const btnsOpenModal = document.querySelector(".slider__show-modal");
const btnManual = document.querySelector(".slider__navigation-manual");
const btnLeft = document.querySelector(".slider__left");
const btnRight = document.querySelector(".slider__right");
const sliderChange = function () {
  let counter = 1;
  setInterval(function () {
    counter++;
    if (counter > 5) {
      counter = 1;
    }
    document.getElementById(`radio${counter}`).checked = true;
  }, 5000);
  const openModal = function () {
    if (!mobileCheck()) {
      document.body.classList.add("body-hidden");
      document.querySelector(".nav").classList.add("nav__overflow");
    }
    modalImgCont.innerHTML = "";
    modalImgCont.insertAdjacentHTML(
      "afterbegin",
      `<img src="/big-slide-${counter}.jpg" alt="">`
    );
    modal.classList.remove("modal__hidden");
    modalOverlay.classList.remove("modal__hidden");
  };
  const closeModal = function () {
    if (!mobileCheck()) {
      document.body.classList.remove("body-hidden");
      document.querySelector(".nav").classList.remove("nav__overflow");
    }
    modal.classList.add("modal__hidden");
    modalOverlay.classList.add("modal__hidden");
  };
  btnManual.addEventListener(`click`, (e) => {
    const btn = e.target.closest(".slider__manual-btn");
    if (!btn) return;
    counter = +btn.dataset.slider;
  });
  btnLeft.addEventListener(`click`, () => {
    counter--;
    if (counter === 0) counter = 5;
    document.getElementById(`radio${counter}`).checked = true;
  });
  btnRight.addEventListener(`click`, () => {
    counter++;
    if (counter > 5) counter = 1;
    document.getElementById(`radio${counter}`).checked = true;
  });
  btnsOpenModal.addEventListener("click", openModal);
  btnCloseModal.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", closeModal);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("modal__hidden")) {
      closeModal();
    }
    if (e.key === "ArrowLeft" && modal.classList.contains("modal__hidden")) {
      counter--;
      if (counter === 0) counter = 5;
      document.getElementById(`radio${counter}`).checked = true;
    }
    if (e.key === "ArrowRight" && modal.classList.contains("modal__hidden")) {
      counter++;
      if (counter > 5) counter = 1;
      document.getElementById(`radio${counter}`).checked = true;
    }
  });
};

export default sliderChange();
