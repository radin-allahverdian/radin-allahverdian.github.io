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

const MenuIcon = document.querySelector(".MenuIcon");
const NavigationHeight = document.querySelector(".navigation-height");
let trueORfalse = true;
MenuIcon.addEventListener("click", function () {
    if (trueORfalse == true) {
        NavigationHeight.classList.remove("hidden-navigation");
        trueORfalse = false;
        document.body.style.overflow = "hidden";
    } else
    if (trueORfalse == false) {
        NavigationHeight.classList.add("hidden-navigation");
        trueORfalse = true;
        document.body.style.overflow = "auto";
    }
});

