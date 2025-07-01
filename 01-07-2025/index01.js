console.log("Hello World");
function sayHello(){
    console.log("Hello from sayHello function");
}
sayHello();
console.log("This is a simple JavaScript program.");

console.log("one");
console.log("two");
const hello=()=>{
    setTimeout(hello,4000);
}
/* setTimeout(()=>{
    console.log("Hello World");
},5000); //1000 ms=1 sec */
console.log("three");
console.log("four");

/* a callback is a function that is passed as an argument to another function and
is executed after the Completion of that function. */

function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,ds){
    ds(a,b);
}
calculator(5,4,sum);

calculator(5,10,(a,b)=>{
    console.log(a+b);
});

for(let i=0;i<5;i++){
    let str="";
    for(let j=0;j<5;j++){
        str+=j;
    }
}

function getData(dataid){
    setTimeout(()=>{
        console.log("Fetching data for id:", dataid);
    },5000);
}
getData(1);
getData(2);
getData(4);

function getData(dataid, getnextdata){
    setTimeout(()=>{
        console.log("Fetching data for id:", dataid);
        if(getnextdata){
            getnextdata();
        }
    },5000);
}
getData(3);
getData(5);
getData(6);

getData(1, ()=>{
        console.log("Fetching data 2....")
        getData(2,()=>{
            console.log("Fetching data 3....");
        getData(3);
        });
});

const myPromise=new Promise((resolve,reject)=>{
//Asynchronous operation
setTimeout(()=>{
    const success=false;
    //Simulate success or failure
    if (success){
        resolve("Data fetched successfully");
    }else{
        reject("Error fetching data");
    }
},2000);
});

myPromise
    .then((data) => {
        console.log("Promise resolved with data:", data);
    })
    .catch((error) => {
        console.error("Promise rejected with data:",error);
    });


let promise=new Promise((resolve, reject)=>{
    console.log("I am a promise");
    if(1<0){
        resolve(123);
    }
    reject("Something went wrong");
});

function getData(dataid){
    return new  Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Fetching data for id:", dataid);
        resolve("success");
        reject("sad :(");
    },2000);
});
}
let result=getData(123);
result;

getData(101)
    .then(result =>{
        console.log("First fetch:",result);
        return getData(102);
    })
    .then(result =>{
        console.log("Second fetch:",result);
        return getData(103);
    })
    .then(result =>{
        console.log("Third fetch:",result);
        return getData(104);
    })
    .then(result =>{
        console.log("Fourth fetch:",result);
        return getData(105);
    })