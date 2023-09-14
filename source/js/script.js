let menu = document.querySelector(".main-header__menu");
let toggleButton = document.querySelector(".main-header__toggle");
//console.log("script executed");

toggleButton.onclick = function () {
  //console.log("button pressed");
  menu.classList.toggle("main-header__menu--closed");
  menu.classList.toggle("main-header__menu--opened");
  toggleButton.classList.toggle('main-header__toggle--closed');
  toggleButton.classList.toggle('main-header__toggle--opened');
}
