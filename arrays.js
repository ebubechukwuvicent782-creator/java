const fruits =['Apple', 'Orange', 'Watermelon', 'Banana']
 const lastfruits= fruits[(fruits.length - 1)]
 console.log(lastfruits);

 //PUSH METHOD
 const newArray = fruits.push('tomatoes')
 console.log(fruits);

 //CONCAT
 const jss1 = ['David', 'Jane', 'Ana', 'Destiny']
 const jss2 = ['Chisom', 'Ebube', 'Ore', 'John']
 const jss3 = ['Godwin', 'Paul', 'Saul']

 const totalStudents = jss1.concat(jss2,jss3);
 console.log(totalStudents);

 //REPLACING ITEMS IN AN ARRAY
 const nums = [20, 50, 33, 6, 8, 2]
 nums[5] =100
 console.log(nums);
 
 //pop(removes the last item)
 nums.pop()
 console.log(nums);

const names = ['david','precious','trinity']
names.pop();
console.log(names);

//splice(replaces an item)
names.splice(1,1);
console.log(names);

nums.splice(1,1,20)
console.log(nums);

//shift(moves the first item)
names.shift();
console.log(names);

nums.shift();
console.log(nums);