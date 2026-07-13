window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

navbar.classList.toggle("scroll",window.scrollY>80);

});