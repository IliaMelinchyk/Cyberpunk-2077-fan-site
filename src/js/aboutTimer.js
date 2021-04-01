const release = "2020-12-10";
const getTime = (release) => {
  const t = Date.parse(new Date()) - Date.parse(release);
  const days = Math.floor(t / (1000 * 60 * 60 * 25));
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const seconds = Math.floor((t / 1000) % 60);
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
};
const getZero = (num) => {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
};
const setClock = (release) => {
  const timer = document.querySelector(".timer");
  const days = timer.querySelector(`#days`);
  const hours = timer.querySelector(`#hours`);
  const minutes = timer.querySelector(`#minutes`);
  const seconds = timer.querySelector(`#seconds`);
  const updateClock = () => {
    const t = getTime(release);
    days.innerHTML = getZero(t.days);
    hours.innerHTML = getZero(t.hours);
    minutes.innerHTML = getZero(t.minutes);
    seconds.innerHTML = getZero(t.seconds);
    if (t.days > 99) {
      days.parentElement.style.width = "15rem";
    }
  };
  updateClock();
  setInterval(updateClock, 1000);
};
export { release, setClock };
