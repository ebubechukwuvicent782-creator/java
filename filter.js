const nums=[1,2,3,4,5,6,7,8,9,10]

const oddNums=nums.filter(function(num){
    return num%2==1
})
console.log(oddNums);

const evenNums=nums.filter(function(num){
    return num%2==0
})
console.log(evenNums);

const hello =['one','two','three','four','five','six','seven','eight','nine','ten']

const shortNums=hello.filter(function(word){
    return word.length===3
})
console.log(shortNums);