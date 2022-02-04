const navToggle = document.querySelector(".nav-toggle")
const nav = document.querySelector("#nav")
const menu = document.querySelector(".menu")



navToggle.addEventListener("click", function() {
    navToggle.classList.toggle("open")
    nav.classList.toggle("open")
    menu.classList.toggle("open")
})