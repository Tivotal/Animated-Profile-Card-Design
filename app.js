/* Created by Tivotal */

let btn = document.querySelector(".card-btn");
let cardSlide = document.querySelector(".card-slide");

btn.addEventListener("click", () => {
  cardSlide.classList.toggle("show");

  let btnIcon = btn.querySelector("i");
  if (btnIcon.classList.contains("fa-plus")) {
    btnIcon.classList.replace("fa-plus", "fa-minus");
  } else {
    btnIcon.classList.replace("fa-minus", "fa-plus");
  }
});
