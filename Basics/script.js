console.log("welcome to my page!!");
console.log("welco");

//JS loops
for(let cnt =1;cnt<10;cnt++) console.log("ans",i+1);

let str = "udyannn";
//for-of loop : strings, arrays
for(i of str) // i= iterator
{
    console.log(i);
}


let student = {
    name: "Gyanu",
    age: 21,
    cpi: 9.3,
    isPass : true,

}

for(let key in student)
{
    console.log(key);
}

let obj = {
    one : 23,
    two : 321,
}

//strings lec3
//Template literals
let sen = `the val of one and two is ${obj.one+obj.two}`;
console.log(sen);

//escape charac : 2 hai val
let k = `first line \n second line`;

let kk  = `first line \t second line`;

let namee = promp("user name");
let stri = `@ ${namee} 13`;
stri.trim();
console.log(stri);

//lec4: arrays
//10% disc offer
let  items = [22,33,443,303];
for(let i =0;i<items.length;i++)
{
     
    let offer = 0.9*price[i];
    price[i ] =k;
    console.log(price[i]);

}

//normal func
function sum(a,b)
{
    console.log(a+b);
}

//arrorw func(modern JS)

//variable = arrow func ki o/p
const multi = (a,b) =>{
    return a*b;
}

function vowels(str)
{
    let cnt =0;
    for(let i of str)
    {
        if(i=='a'||i=='e'||i=='o'||i=='i', i=='u')cnt++;
    }
    return cnt;
}

let arr = [1324, 545, 234520];

//callback func : func as argument and no new array created
arr.forEach(function hs(val)  // val @ each index
{
    console.log(val);
});

arr.forEach(multi)
let ar = [1,2,3,4,5];
ar.forEach((value)=>{
    return value*value; // value**2
});

//map : new array created
let newMap = arr.map((val=>{
    return val*2;
}));

//filter: to filter out certain data
let even = arr.filter((val)=>{
    return val%2==0
});

console.log(even);

let newArr = arr.filter((val=>{
    return val>90;
}))

//Reduce
const ans1 = arr.reduce((accumulator, currentvalue)=> 
accumulator+currrentvalue, initialvalue);

const ans2 = arr.reduce((res, curr)=>{
    return res+curr;
})


//new func
let n = prompt("enter len of arr (n):")
let arrr = [];
for(let i=2;i<=n;i++)arr[i-1]=i;
const key = arrr.reduce((prev, curr)=>
{
    return prev+curr;
})
//largest no. in arr
const ans3 = arr.reduce((prev, curr)=>{
    return prev>curr?prev:curr;
})

