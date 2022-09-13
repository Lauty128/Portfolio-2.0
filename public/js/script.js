const sections = {
    "home" : "0vh",
    "aboutMe":"-100vh",
    "projects":"-200vh",
    "contactMe":"-300vh"
}

let dato = "aboutMe--section"

console.log(sections[dato.split("-")[0]])

document.querySelector(".nav").addEventListener("click", e=>{
    document.querySelector(".main").style.transform = `translateY(${sections[e.target.getAttribute("data-href")]})`
})