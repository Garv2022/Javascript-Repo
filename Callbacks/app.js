function hello(){
    console.log("hello");
}

setTimeout(hello, 2000) //timeout : 2000 milisec, particular time ke baad execute hoga func

setTimeout(()=>{
    console.log("arrow func");

}, 4000);  // timeout;

function getdata(dataId, getNextData){  
    //2s
    setTimeout(()=>{
        console.log("data", dataId);
        if(getNextData)
        {
            getNextData();
        }
    }, 2000);
}

//2 sec ke baad 1,after 2 sec ke baad 2 print hua
getdata(1, ()=>{
    getdata(2);
})

//callback hells : nested callbacks, callbacks 4 !!
//complex way of writing code, difficult ot understand
getdata(1, ()=>{
    getdata(2, ()=>{
        getdata(3, ()=>{
            getdata(4);
        });
    });
})

//promises
let promise = new Promise((resolve, reject)=>{
    console.log("I am promise");
    resolve("success");
    reject("some error occured");
});

function getData2(dataId, getNextData){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data", dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        }, 5000);

    });
}


const getPromise = () =>{
    new Promise((resolve, reject)=>{
        console.log("I am promise");       
        resolve("success");
        reject("failure");
    });
};

//resolve
let promise3 = getPromise();
promise.then((res) => {
    console.log("promise filfilled", res);
});

//reject
promise.catch( (err) =>{
    console.log("rejected", err);
});

//promise chain
function asyncFunc1() {
    return new Promise(() => {
        setTimeout(() => {
            console.log("some data1");
            resolve("success");
        }, 4000);
    });
}

function asyncFunc2() {
    return new Promise(() => {
        setTimeout(() => {
            console.log("some data1");
            resolve("success");
        }, 4000);
    });
}

//phele data1 will fetch then data2 will fetch
console.log("fetching data1......");
let p1 = asyncFunc1();
p1.then((res) =>{
    console.log(res);
    console.log("fetching data2......");
    let p2 = asyncFunc2();
    p2.then((res) =>{
        console.log(res);
    });
});

//simpler code
console.log("fetching data1......");
asyncFunc1().then((res) =>{
    console.log("fetching data2......");
    asyncFunc2().then((res) =>{
    });
});

//actual promise chain
getdata(1, ()=>{ //callback hell
    getdata(2, ()=>{
        getdata(3);
    });
})

getdata(1)  // promise chain
.then((res) => {
    return getdata(2);
})
.then((res) => {
    return getData(3);
})
.then((res) => {
    console.log("success");
})


//Async-Await
function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
}

async function getWeatherData(dataId){
    await api(); //1st call
    await api(); //2nd call
}

//Example time !!

function getData2(dataId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data", dataId);
            resolve("success");
        }, 5000);
    });
}

//easier code !! 
async function getAllData() {
    console.log("getting data1 ....")
    await getData2(1);
    console.log("getting data2 ....")
    await getData2(2);
    console.log("getting data3 ....")
    await getData2(3);
}

//IIFE

(async function () {
    console.log("getting data1 ....")
    await getData2(1);
    console.log("getting data2 ....")
    await getData2(2);
    console.log("getting data3 ....")
    await getData2(3);
})();