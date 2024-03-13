//1. Val. and var.
var myName='garv'; //garv=value, var=variable
console.log(myName) //don't use reserved keyword as variable name

//2. Datatypes in JS
console.log(typeof(myName)); //type of data dega
//10-"23"=1023, 10-"4"=6  1st BUG hai yea
//"an"+"nn"="annn"  "an"-"nn"=Not A No.
//true+true=2, false-true=-1,1=true,0=false
//null is object 2. BUG of JS
// isNaN(NaN) : true; isNaN(Number.NaN) : true

//3. Expressions and Operators
// 5+20;operand and operator= expression
// string : "str1" + "str2" = "str1str2"
//exponentiation operator: 3**4=81

//4. Control Statements and Loops
// Syntax: if-else,switch, while, do-while and for loop : same as C++
//Falsy val. waali condition will not run ! {0, Null, undefined, NaN, false**}

//Ternary Operator
//  var age=17
//  cosole.log((age>18)?"youcan vote" : "you can't vote") 

/*switch(area)
{
    case 'circle':
        console.log("area of circle");
        break;

    case 'rectangle':
        console.log("area of rect");
        break;
    
    default:
        console.log("valid data daal");
}*/

//while loop : blocks scope => conditon true hogi tabhi statements 
//Do While : pehle condition is executed then it is checked

/*do{
    console.log("new num");
}while(num<=10)*/

// 5. Function in JS
/*
function sum(a, b)
{
    var total=a+b;
    return total;
}
sum(32,423);
*/

/*Anonymous Func Expression
var funExp=function(a,b)
{
    return a+b;
}

var sum = funExp(122,224);*/

//6. ECMA Script 2015 (ES 6)

//1. let and const: sirf ek block takk scope deta hai #blockScope

//2.Template Literals: `${tableOf} * ${num} = ${tableOf * num}`; 
//eq. to=> tableOf + "*" + num + "=" + tableOf * num;

//3. Default Parameters:

/*function mult(a,b=5)
{
    return a*b;
}

console.log(mult(3));*/

 //4. Fat Arrow Function (=>): Normal Func ko Fat Arrow mein badalna
//Define func first, then use it !!
//const sum = () => `sumof 2 no. ${(a=3)+(b=393)}`;


//7. Arrays in JS: CLASS:array, arrays = prototype hai iss class ke
//multiple datatype can be stored in the array
//length of array= array.length

var arr=['babbo', 'bunty', 'pallu', 'harshu'];

//For In Loop: elements ka index degi yea
for(let elements in arr)
{
    console.log(elements);
}

//For Of Loop: elements dega array ke
for(let elements of arr)
{
    console.log(elements);
}

//For Each Loop
arr.forEach(function(element, index, array)
{
    console.log(element + "index: " + index + " " + arr );
});

arr.forEach((element, index, array)=>{
    console.log(element + "index: " + index + " " + arr );

})

//indexof():forward search karega aur pehla index no. dega uss elment ka,else returns -1 #forward search
//lastIndexof():last index dega uss element ka array mai #backward search
//includes(): t/f dega , include hai ya nahi. 
 
//Filteration in array: 

//find(callback(element[, index[, array]])[, thisArg])
//only returns one value which satisfies condition, undefined deta hai
//prices.find((currVal)=> currVal < 400)
//findIndex(): return karega index based on condition, else returns -1

//filter():array dega elements ki jo condition ko satisfy karenge, else empty array

//sorting : month.sort() ascending order mai sort karega, works on strings only,no. ko string mai convert karega

// array.push('asda', 'dafsf', 'fwff'): returns length of array and adds element at the end
//array.unshift():returns length of array and adds element at the beginning
//array.pop():removes last element and returns that element
//array.shift():removes first element and returns that element
//Splice Method: array.splice(start_index,no.(delete),(new_element)) 

//Map():new array dega jismai result hoga humaari condition ka(like compare kiya 2 array ko)
//let newArr= array1.map((currElement, Index, arr) =>{ return statements}).filter((currElem)=>{ return curElem>10;})
//forEach VS Map :new Array mai,forEach return undefined, map ke saath other func can be used but not in forEach

//Reduce Method:converts 2D and 3D array into 1D array
/* const arr=[ [1,2], [3,4], [5,6] ]
let flatArr = arr.reduce((accum, currVal)=> { return accum.concat(currVal);})
//4 argument leta hai:accumulator, current value, current index, source val.
 
/*let arr=[5,6,5,34];
let sum=arr.reduxe((accumulator, curElem, index, arr)=>{
    return accumulator+=curElem
},7)*/
//O/P : sum dega arr ka. 7 initial val. hoga, just like this difff cheeze niakl jaaeygi

//8. Strings in JS:
// single/double quotes both are used and 
//length of str= str.length
//Escape Character: "the "of" the" is not allowed so "the /"of"/ the" OR 'the "of" the'
//IndexOf: index no. dega #forward search
//lastIndexOf: index no. dega last se #backward search

//Extracting String: 
/*1. Slice(start, end): string dega str belongs to[start,end-1], arr unchanged and accepts negative index
2. Substring() Method:Cannot accept negative index, string dega str belongs to[start,end-1]
3.substr(): substr(-4) = last ke 4 char de dega

//replace(searchFor, replaceWith): pehle occuring data ko replace karega in new string

//Extract String Characters:
*/
//CharacterData(9):gives char at position 9 of str
//charCodeAt():UTF-16 code 
//Property Access : [] = 
//toUpperCase(), toLowerCase(), str.concat(newstr): adds new str ion existing one
// str.trim(): aage aur peeche ki space remove karta hai
//str to arr: str.split("jiss basis mai karna hai split")

//9. Date and Time in JS:

//Date Methods
 /* new Date():
 new Date().toLocaleString()
 new Date().toString()
 Date.now()
 new Date(year, month, ...)
 Note: JS counts months from 0 to 11
 var d = new Date(" date+time")
 d.toLocaleString()
 currDate.getMonth
currDate.setFullYear

//Time Methods
currTime.setHours/Time/Seconds/Minutes
new Date()toLocaleTimeString(); time
new Date().toLocaleDateString(); date
new Date().toLocaleString(); time and date
*/

/*
10. Math Object in JS
Math.PI: pi ka val. dega
Math.round(): round off
Math.pow(); power nikalna
Math.sqrt(): sq. root dega
Math.abs(): absolute val dega
Math.ceil(n.x): n+1
Math.floor(n.x): n
Math.max()/min():
Math.random(): random no. dega between 0 and 1
Math.trunc():int part dega no. ka
Math.truc() = Math.floor() #positive no.
Math.trunc() = Math.ceil() #negative no.
*/

 /*
 11. DOM in JS:

Window ka bacha document hai aur document ka kaam hai html ko render karna
Prop of Window: innerheight, innerwidth
BOM: window.history.back(), alert/confirm/prompt

DOM Navigation: 
document.body/head 
document.body.childNodes (include enter and whitespaces refered as text)
document.body.hasChildNodes(): gives T/F in Output
document.body.firstElementChild :
firstChild.style.color = "red"
const childTwo = document.querySelector('.child-two')
childTwo.style.color = "green"
document.body.nextSibling : test dega agar spaces hongi
document.body.nextElementSibling : next element dega 
document.body.previousSibiling :
document.body.previousElementSibiling :

Searching and Getting element reference:
ID given ho jab: document.getElementById('id daal') else returns nULL
ClassName dia ho jab: document.getElementsByClassName('para)
document.getElementsByTag('')
document.querySelector("heading").innerHTML="val at the the "heading" tag/id/class has changed"
.querySelector pehli matching val ko replace karega
document.querySelectorAll("#heading")
*/

/*
12. Events IN JS:
Events: 'things' that happen to HTMl elements, JS on HTML : JS can "react" on these events
like jo browser ya user kare
4 ways:
1. using inline events alert(): < class="hero" onclick="alert('Iam)">
2. by calling a func: < class="hero" onclick="cacallinfFunc()">
const callingFunc = () => {
    alert('most');
}
3. By using Reference:overwrites the above events by bottom ones
const thirdWay = document.getById("thirdway");
thirdWay.onclixk = func()
{
     alert('most');
}
4. 
const fourtway = document.querySelector('#fourtway')
fourthWay.addEventListener('click', () => {
})

Event is parent of Event Objects like: MouseEvent, FocusEvent, KeyboardEvent etc
event / event.target/ event.type : dega website pe kis event ko kare hum
event.code: code dega
MouseEvent: mouse ki wajah se interaction with  HTML.
mouseUp()/mouseDown(): inpe hum condition laga sakte hai ,like: color change karna text 
mouseenter/mouseleave

KeyboardEvent: keyboard se hone waale event
keyPress()/keyDown/keyUp : jo keys press ki mil jaaeygi iss method se

InputEvents: 
onChange()/selectElement(): 
addEventListener(): does not overrwrite existing event handlers, doesn't work on internet exp. before ver. 9 
onclick: it overwites existing event handlers, always works
*/

/*
13. Timing Based Events:
window object allows execution of code at specified time intervals and these are called timing events.

setTimeout(func, milli sec): execute func, after waiting specified milli sec.
clearTimeout():
setInterval(func, milli sec): same as setTimeout but repeats execution of func continously.
clearInterval():
*/

/*
14. OOPS In JS:
Object Literals: key:value pair DS, store var. and finc together in one container.
//Old way
let bioData ={
    myName :"garv",
    myAge : 21,
    getData : function(){
        console.log(`my name is ${bioData.myAge}`;
    }
}
bioData.getData();

//New Way
let bioData ={
    myName : {
        name : "garv",
        branch : "ee",
    }
    myAge : 21,
    getData(){
        console.log(`my name is ${bioData.myAge}`;
    }
}
bioData.getData();

1. this object: contain current object and can have diff val depends upon where its placed
Window object ko apna current context maanta hai this 
this ka current context window se curr object hua : object ke func banaya aur andar this pass kia .

const obj = {
    myName : () =>{
        console.log(this);
    }
}
obj.myName();
since fat arraow func is used "this" cannot be used


*/