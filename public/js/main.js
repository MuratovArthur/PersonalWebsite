const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/* Menu animation */
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /* Active link */
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /* Remove menu mobile */
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* Animation */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/* Home animation */
sr.reveal('.home__title',{}); 
sr.reveal('.home__title-color',{}); 
sr.reveal('.card',{ interval: 200}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.app__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

