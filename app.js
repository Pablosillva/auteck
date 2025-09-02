const btnMobile = document.querySelector(".btnMobile");
const nav = document.querySelector(".nav");

btnMobile.addEventListener("click", ()=>
    nav.classList.toggle("active"));
