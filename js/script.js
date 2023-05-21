"use strict";

let navBar = document.querySelector(".menu-navbar");
let menu = document.querySelector(".bx-menu");
let body = document.body;

menu.addEventListener("click", () => {
  navBar.classList.toggle("show-three");
  body.classList.toggle("show-two");
});
