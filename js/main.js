const menuBtn = document.querySelector(".menu-btn")
const hamburger = document.querySelector(".menu-btn .menu-btn___burger")
const nav = document.querySelector(".nav")
const menuNav = document.querySelector(".menu-nav")
let showMenu = false

menuBtn.addEventListener('click', () => {
    if (!showMenu) {
        hamburger.classList.add("open")
        nav.classList.add("open")
        menuNav.classList.add("open")
        showMenu = true
    }else {
        hamburger.classList.remove("open")
        nav.classList.remove("open")
        menuNav.classList.remove("open")
        showMenu = false
    }
})