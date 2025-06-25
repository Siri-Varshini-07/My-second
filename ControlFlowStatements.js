//1. Conditional Statements
let age=18;
if(age<18){
    console.log("You are a minor.");
}
else if(age>=18 && age<65){
    console.log("You are an adult.");
}
else{
    console.log("You are a senior citizen.");
}

//2. Switch case
let day=3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

//loops
console.log("\n");

//for loop
let n=7
for(let i=0; i<5; i++){
    console.log("for loop iteration",i);
}

console.log("\n");

//while loop
let j=0;
while(j<5){
    console.log("While loop iteration",j);
    j++;
}

console.log("\n");

//do while loop
/*do(){

}
while*/