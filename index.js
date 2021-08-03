let menus = document.querySelectorAll(".header-menu")
let dropdowns = document.querySelectorAll(".dropdown")
Array.from(menus).map((menu,index)=>{
    menu.addEventListener("mouseenter", ()=>{
        dropdowns[index].classList.remove("hide")
    })
    menu.addEventListener("mouseleave", ()=>{
        dropdowns[index].classList.add("hide")
    })
})

let firstImg = document.querySelector(".first-img")
let thirdImg = document.querySelector(".third-img")
mobileGraphics()
window.addEventListener("resize", mobileGraphics)


function mobileGraphics() {
    if (document.documentElement.clientWidth<=895) {
        firstImg.src = "/images/illustration-editor-mobile.svg"
        thirdImg.src = "/images/illustration-laptop-mobile.svg"
    }else {
        firstImg.src = "/images/illustration-editor-desktop.svg"
        thirdImg.src = "/images/illustration-laptop-desktop.svg"
    }
}