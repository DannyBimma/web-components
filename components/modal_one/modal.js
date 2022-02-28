"use strict";

const mouseEvent = (e) => {
  const exitIntended = !e.toElement && !e.relatedTarget && e.clientY < 10;

  if (exitIntended) {
    document.removeEventListener("mouseout", mouseEvent);

    document.querySelector(".exit-intent-popup").classList.add("modal-visible");
  }
};

setTimeout(() => {
  document.addEventListener("mouseout", mouseEvent);
  document.addEventListener("keydown", exit);
}, 10_000);

const exit = (e) => {
  const shouldExit =
    [...e.target.classList].includes("exit-intent-popup") || // user clicks on mask
    e.target.className === "close" || // user clicks on the close icon
    e.keyCode === 27; // user hits escape

  if (shouldExit) {
    document
      .querySelector(".exit-intent-popup")
      .classList.remove("modal-visible");
  }
};

document.querySelector(".exit-intent-popup").addEventListener("click", exit);
