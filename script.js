const toggle=document.getElementById("toggle");
const container=document.getElementById("container");
const title=document.getElementById("title");
const circle=document.getElementById("circle");

let isNight =false;


toggle.addEventListener("click",() =>{

isNight = !isNight;

if(isNight){

  document.body.classList.add("night");
  title.textContent="Good Night";

}else{

  document.body.classList.remove("night");
  title.textContent="Good Morning!";

}

})