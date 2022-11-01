document.querySelector(".button-1").addEventListener("click", function () {
  document.querySelector(".container").style.transform = "translate(0vw)";
});

document.querySelector(".button-2").addEventListener("click", function () {
  document.querySelector(".container").style.transform = "translate(-100vw)";
});

document.querySelector(".button-3").addEventListener("click", function () {
  document.querySelector(".container").style.transform = "translate(-200vw)";
});
