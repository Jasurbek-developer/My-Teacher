const menuBtn=document.querySelector(".menu-btn")
const navigation=document.querySelector(".navigation")
const items=document.querySelectorAll(".navigation li")
const preview=document.querySelector(".preview")
const member=document.querySelector(".member")
const toTopBtn=document.querySelector(".to-top")
menuBtn.addEventListener("click",()=>{
    menuBtn.classList.toggle("active")
    navigation.classList.toggle("active")
    preview.classList.toggle("active")
    member.classList.toggle("active")
})
items.forEach((item)=>{
    item.addEventListener("click",()=>{
        menuBtn.classList.remove("active")
        navigation.classList.remove("active")
        preview.classList.remove("active")
        member.classList.remove("active")
    })
})
window.addEventListener("scroll",()=>{
    toTopBtn.classList.toggle("active", window.scrollY>1000)
})