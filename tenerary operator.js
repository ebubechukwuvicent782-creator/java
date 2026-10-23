const age = 34

if (age > 10){
    console.log('qualified class');
}
else{
    console.log('not qualified');
}

//Ternary Operator 
age > 10 ? console.log('qualified class') :console.log('not qualified')

const firstName='Ebubechukwu'
const lastName='vincent'

//Template Literal
function greet(){
    console.log('Hello'+' '+firstName+' '+lastName);
}
greet()

function Hello() {
    console.log(`Hello ${firstName} ${lastName}, how are u doing today?`);
}
Hello()

//Arrow function =>
function addTwo(a,b){
    return a+b
}
console.log(addTwo(9,8));

const addNums =(a,b)=>{
    return a+b
}
console.log(addNums(7,16));

const simple = (a,b)=> a+b
console.log(addNums(2,3));

//Var, Let and Const
var p=20
p=10
console.log(p);

if (true){
    let x =13
    console.log(x);
}
//console.log(x);   cannot be accessed any where in the code

if (true){
    var r=20
    console.log(r);
}
// console.log(r) can be accessed any where in the code