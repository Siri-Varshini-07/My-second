const getPromise=() => {
    return new Promise((resolve,reject)=>{
        console.log("I am a promise");
        resolve("promise resolved");
    });
}
let result = getPromise();
result
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("Error occured",error);
    })

    //promise chaining
    /* promise chaining is used to ensure one task starts after the previous ones completes */

    function asyncFunc1() {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("data1");
            }, 4000);
        })
    }
    function asyncFunc2() {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("data2");
                resolve("success");
            }, 4000);
        })
    }
    console.log("fetching data 1...");
    let p1 = asyncFunc1();
    p1.then((data)=>{
        console.log("Data fetched",data);
        console.log("fetching data 2...");
    });
        let p2=asyncFunc2();
        p2.then((data)=>{
            console.log("Data fetched ", data);
        });

/* Async/Await syntax
1. Async await is a way to write asynchronous code that looks synchronous, making it
easier to read and maintain
2. It is built on the top of promises and allows you to write asynchronous code in a
more linear fashion.
*/

function getData(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Fetching data for id:",id);
            resolve(id);
        },1000);
    });
}
async function fetchData() {
    try{
        const data1=await getData(101);
        console.log("First fetch:",data1);
        const data2=await getData(102);
        console.log("Second fetch:",data2);
        const data3=await getData(103);
        console.log("Third fetch:",data3);
        const data4=await getData(104);
        console.log("Fourth fetch:",data4);
    }catch(error){
        console.error("error ocurred");
    }
    
}
fetchData();

async function getnextData() {
    console.log("getting data 1...........");
    await getData(1);
    console.log("getting data 2...........");
    await getData(2);
    console.log("getting data 3...........");
    await getData(3);
}
getnextData();