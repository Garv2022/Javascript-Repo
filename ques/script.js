let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";

newBtn.style.color = "yellow";
newBtn.style.backgroundColor = "pink";

document.querySelector("body").prepend(newBtn);


//Q2 
let para = document.querySelector("p");
para.setAttribute("class", "newClass");//overwrites class ki prop
para.classList.add("newClass");