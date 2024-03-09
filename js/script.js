"use strict"

const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.nav__items');
const body = document.body;

burger.addEventListener("click", openBurger);

function openBurger(e){
   if (e.target.closest('.haeder__burger')){
      burger.classList.toggle('active');
      nav.classList.toggle('active');
      body.classList.toggle('lock');
   }
   if (!e.target.closest('.haeder__burger')){
      burger.classList.toggle('active');
      nav.classList.toggle('active');
      body.classList.toggle('lock');
   }
}

const observer = new IntersectionObserver((entries) =>{
   entries.forEach((entry) =>{
      if (entry.isIntersecting){
         entry.target.classList.add('active')
      }
   })
},{
   threshold: 0.2,
});

document.querySelectorAll('.btn').forEach((btn) => {
   observer.observe(btn)
})
document.querySelectorAll('.title').forEach((title) => {
   observer.observe(title)
})
document.querySelectorAll('.text').forEach((text) => {
   observer.observe(text)
})
document.querySelectorAll('.why__point').forEach((point) => {
   observer.observe(point)
})
document.querySelectorAll('.header').forEach((point) => {
   observer.observe(point)
})
document.querySelectorAll('.content-what__item').forEach((what) => {
   observer.observe(what)
})