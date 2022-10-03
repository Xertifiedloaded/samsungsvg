


let slideImg = document.querySelector(".slider-1")
let images = new Array(
    "assets/images/svr1.jpeg",
    "assets/images/svr2.jpeg",
    "assets/images/svr3.jpeg",
    "assets/images/svr-landing.jpeg",
);
let length = images.length;
let i = 0;
function slider() {
    if (i > length - 1) {
        i = 0
    }
    slideImg.src = images[i];
    i++
    setTimeout("slider()", 3000)
}

// 
const hamburger = document.querySelector(".hamburger")
const solid = document.querySelector(".fa-solid")
const hide = document.querySelector(".hide")
const show = document.querySelector(".show")
let isActive = false
function showNav() {
    if (isActive == false) {
        isActive = true
        hide.classList.replace("hide", "show")
        solid.classList.replace("fa-bars", "fa-xmark")
    } else {
        isActive = false
        hide.classList.replace("show", "hide")
        solid.classList.replace("fa-xmark", "fa-bars")

    }
}
hamburger.addEventListener("click",showNav)