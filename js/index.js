const itemClicker = document.querySelectorAll(".item-header");
const itemUL = document.querySelectorAll(".item-ul");

itemClicker[0].addEventListener("click", function () {
    itemUL[0].classList.toggle("hidden-height");
});
itemClicker[1].addEventListener("click", function () {
    itemUL[1].classList.toggle("hidden-height");
});
itemClicker[2].addEventListener("click", function () {
    itemUL[2].classList.toggle("hidden-height");
});
itemClicker[3].addEventListener("click", function () {
    itemUL[3].classList.toggle("hidden-height");
});