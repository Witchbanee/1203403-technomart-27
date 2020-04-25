let link = document.querySelector(".feedback-block");
let popup = document.querySelector(".visualy-hidden-feedback");
let close = document.querySelector(".modal-close");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});