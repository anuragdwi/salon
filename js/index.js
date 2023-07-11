const open = document.querySelector("#open");
const close = document.querySelector("#close");
const navbar = document.querySelector("nav");

console.log(open);
console.log(close);
console.log(navbar);

open.addEventListener("click", () => {
  navbar.classList.add("open");
});
close.addEventListener("click", () => {
  navbar.classList.remove("open");
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector("header");
  navbar.classList.toggle("sticky", window.scrollY);
});
