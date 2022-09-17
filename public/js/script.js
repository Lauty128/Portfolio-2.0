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

const skills = document.querySelector(".aboutMe__skills");

skills.addEventListener("mouseover", e=>{
    if(e.target.classList.contains("skills__div"))
        e.target.firstElementChild.classList.add("skills__nameTec--active")

    e.target.addEventListener("mouseleave", ()=> e.target.firstElementChild.classList.remove("skills__nameTec--active"))
})

