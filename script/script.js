

// menú de navegación
const open = document.querySelector(".nav__open");
const close = document.querySelector(".nav__close");

const nav = document.querySelector("nav");


open.addEventListener("click", () => {

    nav.classList.add("nav__position--right");

 });


 close.addEventListener("click", () => {

   nav.classList.remove("nav__position--right");

 });
