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
