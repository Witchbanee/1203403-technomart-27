let mapClose = document.querySelector(".modal-close-map");
let mapOpen = document.querySelector(".map-click");
let mapPopup = document.querySelector(".visually-hidden-map");

mapOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});