
document.addEventListener('DOMContentLoaded', () => {
   const menuIcon = document.getElementById('menu-icon');
   const menuLinks = document.getElementById('menu-links');

  menuIcon.addEventListener('click', () =>  {
      menuLinks.classList.toggle('active');
  });
});


//const menuIcon = document.querySelector(".menu-icon");
//onst menuLinks = document.querySelector(".menuLinks");

//menuIcon.addEventListener("click", () => {

    //menuLinks.classList.toggle('active');

//});
