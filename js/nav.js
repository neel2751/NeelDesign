//Show and hide hamburguer menu in small screens 
const btn = document.querySelector('.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');
const close = document.querySelector('.close');
const home = document.querySelector(".topnav");

btn.addEventListener("click", () => {
    menu.classList.toggle('hidden');
    
});

close.addEventListener("click", () => {
    menu.classList.toggle('hidden');
   
});



const menunav = document.querySelector(".menu");

function set() {

    if(this.scrollY > 0){
        menunav.style.backgroundColor  = 'white';
        menunav.style.setProperty("-webkit-filter", "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))");
    }
    else{
        menunav.style.backgroundColor  = '#F9F8F4';
        menunav.style.setProperty("-webkit-filter", "drop-shadow(0 0px 0px rgb(0 0 0 / 0.00)) drop-shadow(0 0px 0px rgb(0 0 0 / 0.0))");
    }
        
  }

  window.addEventListener("scroll", set);