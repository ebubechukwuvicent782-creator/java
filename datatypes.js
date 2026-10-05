// STRING DATA TYPE
const greet = 'hello'
console.log(greet)

const b ="This is a simple string"

// NUMBER DATA TYPE
const num = 100

//floats
const numTwo = 22.67
console.log(numTwo);

//BOOLEAN DATA TYPE
const isStudent = true

const isMarried = false

//OBJECT DATA TYPE
const student = {
    age : 20,
    name: 'Peter John',
    class: 'Frontend',
    tel: '09125668889',
    gender: 'male',
    feesCompleted: true
}
const stuName= student.name
console.log(stuName);

const stuGender = student.gender
console.log(stuGender);

//ARRAY
const numbers = [1, 2, 5, 7, 9]

const numsThree = ['one', 'two', 'three']
console.log(numsThree.length);

console.log(numsThree[2])

const personOne = {
    fName: 'peter',
    lname: 'paul',
    email: 'PeterJohn@gmail.com',
    gender: 'male',
}
const personTwo = {
    fName: 'John',
    lname: 'Saul',
    email: 'JohnSaul@gmail.com',
    gender: 'male',
}
const personThree = {
    fName: 'Jane',
    lname: 'Okoli',
    email: 'JaneOkoli@gmail.com',
    gender: 'female',
}
const personFour = {
    fName: 'David',
    lname: 'Elijah',
    email: 'DavidElijah@gmail.com',
   gender: 'male',
}

const firstNames = [personOne.fName, personTwo.fName, personThree.fName, personFour.fName]

console.log(firstNames);