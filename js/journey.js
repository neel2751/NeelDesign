// const accord = document.querySelector('.open_desc');


//     let maindesc = document.querySelector('.main_desc');
//     let arrow = document.querySelector('.arrow');
//     // console.log(desc);
//     accord.addEventListener("click", () => {
//         maindesc.classList.toggle('open');
//         // let desc = document.querySelector('.desc');
//         if(maindesc.classList.contains("open")){
//             maindesc.style.height = `${maindesc.scrollHeight}px`;
//             arrow.style.transform = 'rotate(90deg)';
//             accord.style.borderColor = '#D9BAB3'
//         }else{
//             arrow.style.transform = 'rotate(180deg)';
//             maindesc.style.height = "0px";
//             accord.style.borderColor = '#E2E2E2'

//         }
// });


const accord = document.querySelectorAll('.open_desc');

accord.forEach((item,index) => {

    let header = item.querySelector('.check');
    let arrow = item.querySelector('.arrow');
    let border = item.querySelector('.border_color');

    header.addEventListener("click", () => {
        item.classList.toggle('open');
        let maindesc = item.querySelector('.main_desc');
        if(item.classList.contains("open")){
            maindesc.style.height = `${maindesc.scrollHeight}px`;
            arrow.style.transform = 'rotate(90deg)';
            border.style.borderColor = '#D9BAB3'
        }else{
            arrow.style.transform = 'rotate(180deg)';
            maindesc.style.height = "0px";
            border.style.borderColor = '#E2E2E2'

        }
        removeOpen(index);
    })
});

function removeOpen(index) {
    accord.forEach((item1,ind1) => {
        if(index != ind1){
            item1.classList.remove('open');
            let arrow = item1.querySelector('.arrow');
            let border = item1.querySelector('.border_color');
            let desc = item1.querySelector('.main_desc');
            desc.style.height = '0px';
            arrow.style.transform = 'rotate(180deg)';
            border.style.borderColor = '#E2E2E2'
        }
    })
}