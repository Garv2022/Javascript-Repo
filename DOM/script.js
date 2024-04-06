//console.log("my website");
//window.console.log("part of browser");

console.dir(window.document);
console.dir(document);
console.dir(document.body);

//Selecting with id!
let h1 = document.getElementById("myid"); //h1
console.log(myid);

//Selecting with class!
let h2 = document.getElementsByClassName("myclass");
console.log(myclass);

//Selecting with tagName
let h3 = document.getElementsByTagName("mytag");
console.dir(h3);


//Query Selector

let firstEle = document.querySelector("p"); //1st element
console.dir(document);

let allEle = document.querySelectorAll("p"); //all elements
console.dir(allEle);

//tag name 
firstEle.tagName;

//innerText : children dega saare, siblings: same lvl pe.


//Q1
let h4 = document.querySelector("h4");
h2.innerText += "ndwef wofweifjwe f"; // concaneate

//Q2
let divs = document.querySelectorAll(myclass);
let ind =1;
for(divi of divs)
{
    div.innerText = `new query value: ${divi}`;
    ind++;
}


//attributes

let para = document.querySelector("p1");
console.log(para.getAttribute(id));
console.log(para.getAttribute("class"));

//insert elements

let newBtn = document.createElement("button");
newBtn.innerText = "not clik";
console.log(newBtn);
let div =  document.querySelector("div");
div.append(newBtn);
div.prepend(newBtn);

let p =  document.querySelector("p");
p.append(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>new heading it is</i>";

//delete ele Node.remove()
newHeading.remove();

