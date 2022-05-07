let openMenuButton = document.querySelector('#open-menu')
let closeMenuButton = document.querySelector('#close-menu')
let menu = document.querySelector('#menu')
let nav =document.querySelector('nav')

document.addEventListener('scroll' , onscroll)
openMenuButton.addEventListener('click',openMenu)
closeMenuButton.addEventListener('click', closeMenu)

function openMenu(){
  menu.classList.remove('hide')
  openMenuButton.classList.add('hide')
  closeMenuButton.classList.remove('hide')
  document.body.classList.add('menu-expanded')
 
}
function closeMenu (){
  menu.classList.add('hide')
  openMenuButton.classList.remove('hide')
  closeMenuButton.classList.add('hide')
  document.body.classList.remove('menu-expanded')
  
}
function onscroll (){
  showNavOnScroll ()
  showBackToTopButton ()
}
function showNavOnScroll (){
  if(scrollY >0){
    nav.classList.add('scroll')
  }else{
    nav.classList.remove('scroll')
  }
}
function showBackToTopButton (){
  if(scrollY > 1500){
    backToTopButton.classList.add('show') 
   }
    else{
      backToTopButton.classList.remove('show')    }
        
      
}









ScrollReveal({
 origin: 'top',
 distance: '50px',
 duration: 3000,
}).reveal(`#homer, #homer img,
 #homer . stats,
 #services,
 #services header ,
 #services .card`);
