const menu = document.querySelector("nav");
const main = document.querySelector("main");

const responsiveDesign__main = ()=>{
    console.log(window.innerWidth)
    if(window.innerWidth <= 700){
        main.insertAdjacentElement("afterend", menu)   
        return
    }
    if(document.body.firstElementChild.classList.contains("main")) document.body.insertAdjacentElement("afterbegin", menu) 
}

// INIT PAGE
addEventListener("resize", responsiveDesign__main)

const sections = {
    "home" : "0vh",
    "aboutMe":"-100vh",
    "projects":"-200vh",
    "contactMe":"-300vh"
}

//document.querySelector(".nav").addEventListener("click", e=>{
  //  document.querySelector(".main").style.transform = `translateY(${sections[e.target.getAttribute("data-href")]})`
//})



//responsiveDesign__main()
