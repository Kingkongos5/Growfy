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
         observer.unobserve(entry.target)
      }
      if(!entry.isIntersecting){
         const entryHeight = entry.target.offsetHeight;
         const entryOffset = entry.target.offsetTop;
         const entryStart = 4;
         
         let entryItem = window.innerHeight - entryHeight / entryStart;
         if (entryItem > window.innerHeight){
            entryItem = window.innerHeight - window.innerHeight / entryStart;
         }

         if ((scrollY > entryOffset - entryItem) && scrollY < (entryOffset + entryHeight) ){
            entry.target.classList.add('active')
            observer.unobserve(entry.target)
         }
      }
   })
},
{
   threshold: 0.25,
});

document.querySelectorAll('.btn, .title, .text, .why__list, .header, .content-what__items, .blog__items, .content__image').forEach((btn) => {
   observer.observe(btn)
})