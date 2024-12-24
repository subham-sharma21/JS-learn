const name = "subham-sharma"
const age = "23"
//back ticks more like fstring, string interpolation  
console.log(`My name is ${name} and my age is ${age}.`);
console.log(name.length);
console.log(name.toUpperCase())
console.log(name.charAt('3'))
console.log(name.indexOf('h'))

console.log(name.strike());

const newString = name.substring(0,4)
console.log(newString);

const one = name.replace('a','-')
const one1 = name.replaceAll('a','-')
console.log(one);
console.log(one1);

const two = name.includes('a')
console.log(two);

const three = name.split('-')
console.log(three); 
 