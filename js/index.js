const headerPart = document.querySelectorAll(".header-part");
const myUl = document.querySelectorAll(".MyUl");
const PlusIcon = document.querySelectorAll(".PlusIcon");

headerPart[0].addEventListener("click", function () {
    myUl[0].classList.toggle("hidden-ul");
    myUl[1].classList.add("hidden-ul");
    myUl[2].classList.add("hidden-ul");
    myUl[3].classList.add("hidden-ul");
    PlusIcon[0].classList.toggle("plusiconstyle");
});
headerPart[1].addEventListener("click", function () {
    myUl[1].classList.toggle("hidden-ul");
    myUl[0].classList.add("hidden-ul");
    myUl[2].classList.add("hidden-ul");
    myUl[3].classList.add("hidden-ul");
    PlusIcon[1].classList.toggle("plusiconstyle");
});
headerPart[2].addEventListener("click", function () {
    myUl[2].classList.toggle("hidden-ul");
    myUl[0].classList.add("hidden-ul");
    myUl[1].classList.add("hidden-ul");
    myUl[3].classList.add("hidden-ul");
    PlusIcon[2].classList.toggle("plusiconstyle");
});
headerPart[3].addEventListener("click", function () {
    myUl[3].classList.toggle("hidden-ul");
    myUl[0].classList.add("hidden-ul");
    myUl[1].classList.add("hidden-ul");
    myUl[2].classList.add("hidden-ul");
    PlusIcon[3].classList.toggle("plusiconstyle");
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

