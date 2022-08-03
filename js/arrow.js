const arr = document.querySelector(".arro");

function set() {

        if(this.scrollY > 6650 && this.scrollY < 7020){

            arr.classList.add("arros");
            arr.classList.remove("arro");
        }else{
            arr.classList.add("arro");
            arr.classList.remove("arros");
           
        }
        
  }

  window.addEventListener("scroll", set);