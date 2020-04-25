let buyBasket = document.querySelector(".buy");
let popupBasket = document.querySelector(".visual-hidden-basket");
let close = document.querySelector(".modal-close");

buyBasket.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBasket.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBasket.classList.remove("modal-show");
});