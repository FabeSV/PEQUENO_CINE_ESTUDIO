// mostrar el icono de los textos del menú
const txt = document.querySelector(".nav__txt");
const icon = document.querySelector(".nav__circle");

txt.addEventListener("click",() =>{

    icon.classList.add("active");
});



// menu de navegacion
const open = document.querySelector(".nav__open");
const close = document.querySelector(".nav__close");
const nav = document.querySelector("nav");


open.addEventListener("click", () => {

    nav.classList.add("nav__position--right");

 });


 close.addEventListener("click", () => {

   nav.classList.remove("nav__position--right");

 });


// slider category

const initSlider = () => { 

  const imageList = document.querySelector(".category__card-list");

  const sliderButtons = document.querySelectorAll(".btn__category");
 

  sliderButtons.forEach(button => {
    button.addEventListener("click", () => {
      const direction = button.id === "btn__prev" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy ({left: scrollAmount, behavior: "smooth" });

    });
  });
}
window.addEventListener("load", initSlider);


//sinopsis

document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.category__card');

  containers.forEach(container => {
      const hiddenContent = container.querySelector('.card__info');

      container.addEventListener('mouseover', () => {
          hiddenContent.style.display = 'block';
      });

      container.addEventListener('mouseout', () => {
          hiddenContent.style.display = 'none';
      });
  });
});




//slider new movie

const initSliderMovie = () => { 

  const imageListn = document.querySelector(".nm__card-list");

  const sliderButtonsn = document.querySelectorAll(".btn__nm");
 

 sliderButtonsn.forEach(buttons => {
    buttons.addEventListener("click", () => {
      const direct = buttons.id === "btn__nprev" ? -1 : 1;
      const scrollAmountn = imageListn.clientWidth * direct;
      imageListn.scrollBy ({left: scrollAmountn, behavior: "smooth" });

    });
  });
}
window.addEventListener("load", initSliderMovie);


