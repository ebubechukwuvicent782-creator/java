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
 
 