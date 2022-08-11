
const scriptURL =
                  "https://script.google.com/macros/s/AKfycbywPXtxsW53oQ8xj4ffnKIHXLIdm32yKEs1IwyklrlvKOnQc1qM4bm_rdYe7wMdQh-bvw/exec";
    const form = document.forms["submit-email"];
        form.addEventListener("submit", (e) => {
                  e.preventDefault();
                  fetch(scriptURL, { method: "POST", body: new FormData(form) })
                    .then((response) => {
                        alert('Submit Successfully!');
                        form.reset();
                        console.log("Success!", response)})
                    .catch((error) => console.error("Error!", error.message));
});
const nform = document.forms["submit-newsletter"];
        nform.addEventListener("submit", (e) => {
                  e.preventDefault();
                  fetch(scriptURL, { method: "POST", body: new FormData(nform) })
                  .then((response) => {
                    alert('Submit Successfully!');
                    nform.reset();
                    console.log("Success!", response)})
                    .catch((error) => console.error("Error!", error.message));
});


const naigator = document.querySelector(".navigator").offsetHeight;
document.documentElement.style.setProperty('--scroll-padding', naigator - 1 + "px");

