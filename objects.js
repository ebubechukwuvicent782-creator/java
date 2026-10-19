const candidate = {
    fName:'peter',
    lName:'paul',
    email:'example@gmail.com.com',
    isMarried:true,
    employment:{
        yearsofEx:20,
        occupation:'farmer'
    }
}
console.log(candidate.fName);

const occupation = candidate.employment.occupation
console.log(occupation);

//checking the keys of objects.
const a= Object.keys(candidate)
console.log(a)

//METHODS
const student={
    fullName:'Peter Paul',
    email:'helloexample.com',
    age: 26,
    yearsOfBirth:function(){
        return 2026-this.age
    }
}
console.log(student.yearsOfBirth());