'use strict';

//mobile navbar toggle

const navbar=document.querySelector('[data-navbar]');
const navToggler=document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", function(){
  navbar.classList.toggle("active");
})



document.querySelector(".services-btn").addEventListener("click", function(){
  document.querySelector(".hidden-services").classList.toggle("hidden");
})