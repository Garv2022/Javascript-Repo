let bt1 = document.querySelector("#btn1");

btn1.onclick = ()=>{
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a); //26
}

let div = document.querySelector("div");
div.onmouseover = () =>{
    console.log("you are inside div");
                                    
}

//event handler
bt1.onclick = (evt) =>{
    console.log(evt);
    console.log("evt.type");
    console.log("evt.target");
    console.log("evt.clientX, evt.clientY");
}

//event listeners : below 3 func are stored @ diff locations

bt1.addEventListener("click", ()=>{
    console.log("button 1 was clicked handler 1");

})
bt1.addEventListener("click", ()=>{
    console.log("button 1 was clicked handler 2");
    
})

const handler3 = () =>
{
    console.log("button 1 was clicked handler 3");
}
bt1.addEventListener("click", handler3);
btn1.removeEventListner("click", handler3);

//toggling button
let toggle = document.querySelector("#toggle");

let currMode = "light";

toggle.addEventListener("click", () =>{
    if(currMode=="light")
    {
        currMode ="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else
    {
        currMode = "light";
        document.querySelector("body").style.backgroundColor="white";
    }
})
