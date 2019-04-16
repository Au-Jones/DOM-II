// Your code goes here
const Newtitle = 
document.querySelector("title");
Newtitle.addEventListener("click",(event) => {
    event.target.style.color = "red"
})

const NewH = 
document.querySelector("header");
NewH.addEventListener("mouseover", (event) => {
    event.target.style.color = "orange"
})

const Newimg = 
document.querySelector("img/fun-bus.jpg");
Newimg.addEventListener('blur',(event) => {
    event.target.style.background = '';
})

const txtcont = 
document.querySelector(".text-content");
txtcont.addEventListener("dblclick", (event) => {
    event.target.style.background = 'green';
}) 

const contDes = 
document.querySelector(".content-destination");
contDes.addEventListener("dblclick", (event) => {
    event.target.style.background = 'blue';
}) 