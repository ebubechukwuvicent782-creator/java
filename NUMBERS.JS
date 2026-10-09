const a= 6
const b=10
const c=a*b
console.log(c);

// NUMBER METHODS
const d= Number.isInteger('hello')
const e= Number.isInteger('2.56')
const f= Number.isInteger('76')
console.log(d, e, f);

//PARSEINT
const g ='Hello everyone'
const h = '32.888'
const i = '50 months'
const j = '100'
console.log(parseInt(g));
console.log(parseInt(h));
console.log(parseInt(i));

//PARSEFLOAT METHOD
console.log(parseFloat(g));
console.log(parseFloat(h));
console.log(parseFloat(i));
console.log(parseFloat(j));

//ISNAN
const k=isNaN('hello')
const l=isNaN(20)
console.log(k,l);

//TOFIXED METHOD (it returns an approx.string value)
const m=100.888999
const n=20
console.log(m.toFixed(2));
console.log(n.toFixed(3));

//TOSTRING METHOD
console.log(m.toString())