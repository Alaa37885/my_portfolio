const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

document.querySelectorAll('.portrait-photo, .project-photo').forEach(image=>{
  image.addEventListener('load',()=>image.parentElement.classList.add('has-photo'));
  image.addEventListener('error',()=>image.remove());
  if(image.complete){
    if(image.naturalWidth)image.parentElement.classList.add('has-photo');
    else image.remove();
  }
});

const sections=[...document.querySelectorAll('section[id]')];
const links=[...document.querySelectorAll('.nav a')];
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+entry.target.id));
    }
  });
},{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>observer.observe(s));
