//Show and hide hamburguer menu in small screens 
const btn = document.querySelector('.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');
const close = document.querySelector('.close');
const home = document.querySelector(".topnav");

btn.addEventListener("click", () => {
    menu.classList.toggle('hidden');
    // home.classList.toggle('mt-60');
    
});

close.addEventListener("click", () => {
    menu.classList.toggle('hidden');
    // home.classList.toggle('mt-60');
});


// const line = document.querySelector(".line");
const arr = document.querySelector(".arro");
const menunav = document.querySelector(".menu");

function set() {
    console.log(this.scrollY);

    if(this.scrollY > 0){
        menunav.style.backgroundColor  = 'white';
        menunav.style.setProperty("-webkit-filter", "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))");
    }
    else{
        menunav.style.backgroundColor  = '#F9F8F4';
        menunav.style.setProperty("-webkit-filter", "drop-shadow(0 0px 0px rgb(0 0 0 / 0.00)) drop-shadow(0 0px 0px rgb(0 0 0 / 0.0))");
    }



//    2868 3410 ||(this.scrollY >3800 && this.scrollY < 4000) 2900 3500
        if(this.scrollY > 6650 && this.scrollY < 7020){

            arr.classList.add("arros");
            arr.classList.remove("arro");
        }else{
            arr.classList.add("arro");
            arr.classList.remove("arros");
           
        }
        
  }

  window.addEventListener("scroll", set);