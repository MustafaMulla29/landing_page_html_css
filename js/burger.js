const burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navList = document.querySelector(".nav-list");

burger.addEventListener("click", () => {
  navList.classList.toggle("visibility-resp");
  navbar.classList.toggle("height-resp");
});
