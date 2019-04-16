// Your code goes here
const Newtitle = 
document.querySelector("title");
Newtitle.addEventListener("click",(event) => {
    event.target.style.color = "red"
    event.stopPropagation();
})

const NewH = 
document.querySelector("header");
NewH.addEventListener("mouseover", (event) => {
    event.target.style.color = "orange"
    event.stopPropagation();
})

const Newimg = 
document.querySelector("img/destination.jpg");
Newimg.addEventListener('blur',(event) => {
    event.target.style.background = '';
    event.stopPropagation();
})

const txtcont = 
document.querySelector(".text-content");
txtcont.addEventListener("dblclick", (event) => {
event.target.style.background = 'green';
event.stopPropagation();
}) 

const contDes = 
document.querySelector(".content-destination");
contDes.addEventListener("dblclick", (event) => {
    event.target.style.background = 'blue';
    event.stopPropagation();

}) 

const Newbtn = 
document.querySelector(".btn");
Newimg.addEventListener('mouseover',(event) => {
    event.target.style.background = 'yellow';
    event.stopPropagation();
})

const Des = 
document.querySelector(".destination");
Des.addEventListener("click",(event) => {
    event.target.style.color = "red"
    event.stopPropagation();
})

const NewImg = 
document.querySelector("img/fun-bus.jpg");
Newimg.addEventListener('blur',(event) => {
    event.target.style.background = '';
    event.stopPropagation();
})

const Des = 
document.querySelector(".destination");
Des.addEventListener("click",(event) => {
    event.target.style.backgroundColor = "pink"
    event.stopPropagation();
})

const homeLink = document.querySelector("nav a");
homeLink.addEventListener("click", event => {
  event.preventDefault();
});