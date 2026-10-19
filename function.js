//function(they are used to perform tasks)
function sayHello() {
    console.log('Hello Everyone');
}
sayHello()

function greet(fname) {
    console.log('Hello ' +fname);
}
greet('Peter')

function addTwoNums(a, b) {
    console.log(a + b);
}
addTwoNums(22,23);

function square(c) {
    return c**2
}
console.log(square(25));

function average(a,s,d,f){
    const average =(a+s+d+f)/4
    console.log(average);
}
average(5,5,5,5);
average(2,3,4,1);

//classwork
function numCheck(num){
    if (!Number.isInteger(num)) {
        console.log('invalid number pattern');
    }
    else if(num % 2 == 1){
        console.log('This is an odd number');
    }
    else{
        console.log('This is an even number');
    }
}
numCheck(4)
numCheck(100.600)
numCheck(77)