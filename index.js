let menus = document.querySelectorAll(".header-menu")
let dropdowns = document.querySelectorAll(".dropdown")
Array.from(menus).map((menu,index)=>{
    menu.addEventListener("mouseenter", ()=>{
        dropdowns[index].classList.remove("hide")
    })
    menu.addEventListener("mouseleave", ()=>{
        dropdowns[index].classList.add("hide")
    })
    menu.addEventListener("click", ()=>{
        if (document.documentElement.clientWidth<=895) {
            dropdowns[index].classList.toggle("show")
            dropdowns[index].parentElement.querySelector("img").classList.toggle("rotate180")
        }
       

    })
})



let firstImg = document.querySelector(".first-img")
let thirdImg = document.querySelector(".third-img")
let fullMenu = document.querySelector(".full-menu")
let hamburger = document.querySelector(".hamburger")

responsiveChanges()
window.addEventListener("resize", responsiveChanges)
hamburger.addEventListener("click", toggleMenu)
let isMenuOpen = false

function responsiveChanges() {
    if (document.documentElement.clientWidth<=895) {
        firstImg.src = "/images/illustration-editor-mobile.svg"
        thirdImg.src = "/images/illustration-laptop-mobile.svg"
        Array.from(dropdowns).map(dropdown=>dropdown.parentElement.querySelector("img").src="/images/icon-arrow-dark.svg")
        fullMenu.classList.add("menu-hide")
        hamburger.classList.remove("icon-hide")
    }else {
        firstImg.src = "/images/illustration-editor-desktop.svg"
        thirdImg.src = "/images/illustration-laptop-desktop.svg"
        Array.from(dropdowns).map(dropdown=>dropdown.parentElement.querySelector("img").src="/images/icon-arrow-light.svg")
        fullMenu.classList.remove("menu-hide")
        hamburger.classList.add("icon-hide")
    }
}

function toggleMenu() {
    fullMenu.classList.toggle("menu-hide")
    isMenuOpen = !isMenuOpen
    if (isMenuOpen) {
        hamburger.firstElementChild.src = "/images/icon-close.svg"
    } else {
        hamburger.firstElementChild.src = "/images/icon-hamburger.svg"
    }
    console.log()
}