let menu = document.querySelector(".main-nav__list");
let toggleButton = document.querySelector(".main-nav__toggle");
//console.log("script executed");

toggleButton.onclick = function () {
  //console.log("button pressed");
  menu.classList.toggle("main-nav__list--closed");
  menu.classList.toggle("main-nav__list--opened");
  toggleButton.classList.toggle('main-nav__toggle--closed');
  toggleButton.classList.toggle('main-nav__toggle--opened');
}
