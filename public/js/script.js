let URLextension = window.location.hash;
const menu = document.querySelector(".nav__div");

const menuSelect = ()=>{
    if(document.querySelector(".nav__buttonSection--active")) document.querySelector(".nav__buttonSection--active").classList.remove("nav__buttonSection--active")
    setTimeout(()=>{ 
        URLextension = window.location.hash;
        document.getElementById(`${URLextension.slice(1)}--button`).classList.add("nav__buttonSection--active")
     },50)
}

menu.addEventListener("click", menuSelect)

menuSelect()