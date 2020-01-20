var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

//Показываем кнопку меню, если есть JS
navMain.classList.remove("main-nav--nojs");

//Закрываем и открываем меню нажатием на бургер/крестик
navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--open");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--open");
  }
});

//Работа с формой
if (document.querySelector(".contest__form")) {

var form = document.querySelector(".contest__form");
var userFirstName = form.querySelector(".user-info__first-name");
var userLastName = form.querySelector(".user-info__last-name");
var userEmail = form.querySelector(".user-contacts__email");

var errorPopup = document.querySelector(".modal--form-error");
var confirmPopup = document.querySelector(".modal--form-confirmation");

var closeErrorPopup = errorPopup.querySelector(".btn--modal");
var closeConfirmPopup = confirmPopup.querySelector(".btn--modal");

//Проверяем не пустые ли поля
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!userFirstName.value || !userLastName.value || !userEmail.value) {
    userFirstName.classList.add("user-info__warning");
    userLastName.classList.add("user-info__warning");
    userEmail.classList.add("user-info__warning");
    errorPopup.classList.add("modal--show");
  } else confirmPopup.classList.add("modal--show");
});

//Закрываем одну модалку
closeErrorPopup.addEventListener("click", function(evt) {
  evt.preventDefault();
  errorPopup.classList.toggle("modal--show");
});

//Закрываем вторую модалку
closeConfirmPopup.addEventListener("click", function(evt) {
  evt.preventDefault();
  confirmPopup.classList.toggle("modal--show");
});

//Закрываем любую модалку по нажатию ESC
  document.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      errorPopup.classList.remove("modal--show");
      confirmPopup.classList.remove("modal--show");
    };
  });
};

