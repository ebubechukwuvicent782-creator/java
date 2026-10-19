const stuNames=['grace','uju','chukwurah','trinity','chizzy','ufondu','paul','dabere','nnamson','chisom']

const capital = stuNames.map(function(singleName) {
        return singleName.toUpperCase()
    })

    console.log(stuNames);
    console.log(capital);
    
    const num =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,222]
    const square =num.map(function(boss){
        return boss*boss
    })
    console.log(num);
    console.log(square);