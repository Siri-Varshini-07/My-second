//1. Arithmetic operators
let a=10;
let b=5;
console.log("Arithmetic Operators");
console.log("a=",a,"b=",b);
let sum=a+b;
let difference=a-b;
let product= a*b;
let quotient=a/b;
let remainder=a%b;
let exponent=a**b;
console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);
console.log(remainder);
console.log(exponent);
console.log("\n");

//2. Assignment operators
let x=10;
x+=5;
x-=3;
x*=2;
x/=4;
x%=2;
console.log("Assignment operators:");
console.log("x after assignments:",x);
console.log("\n");

//3.Comparison operators
let isEqual= (a==b);
let isStrictEqual=(a===b);
let isnotEqual=(a!=b);
let isStrictNotEqual=(a!==b);
let isGreater=(a>b);
let isLesser=(a<b);
let isGreaterthanorEqual=(a>=b);
let isLessthanorEqual=(a<=b);
console.log("Comparison operator");
console.log(isEqual);
console.log(isStrictEqual);
console.log(isnotEqual);
console.log(isStrictNotEqual);
console.log(isGreater);
console.log(isLesser);
console.log(isGreaterthanorEqual);
console.log(isLessthanorEqual);
console.log("\n");

//4. Logical operators
let andOperator=(a>0 && b>0);
let orOperator=(a>0 || b<0);
let notOperator=!(a<b);
console.log("Logical Operators");
console.log(andOperator);
console.log(orOperator);
console.log(notOperator);
console.log("\n");

//5. Bitwise operators
let bitwiseAnd= a&b;
let bitwiseOr= a|b;
let bitwiseXor= a^b;
let bitwiseNot= ~a;
let leftshift= a<<1;
let rightshift= a>>1;
console.log("Bitwise operators");
console.log(bitwiseAnd);
console.log(bitwiseOr);
console.log(bitwiseXor);
console.log(bitwiseNot);
console.log(leftshift);
console.log(rightshift);
console.log("\n");

//6. Ternary operator
let age=18;
let eligibility=(age>=18) ? "Eligible to vote" : "Not Eligible to vote";
console.log("Ternary Operator");
console.log(eligibility);
console.log("\n");

//7. Typeof operator
let VariableType= typeof a;
console.log("Typeof Operator");
console.log("Type of variable 'a':", VariableType );
console.log("\n");