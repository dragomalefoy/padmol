const menu = document.querySelector(".menu");
const btn = menu.querySelector(".nav-tgl");
const links = document.querySelector(".links");
btn.addEventListener("click", (evt) => {
  menu.classList.toggle("active");
  links.classList.toggle("show");
});
