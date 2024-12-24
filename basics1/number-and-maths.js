const balance = 1000
console.log(balance.toString().length)
console.log(balance.toFixed(3))// upto how much decimal points it needed


const otherNumber = 123.987
console.log(otherNumber.toPrecision(3))// precision upto 3 number from left


const indianVal = 10000000
const americanVal = 10000000
console.log(americanVal.toLocaleString())
console.log(indianVal.toLocaleString('en-IN'))

//////////////// math////////////////

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.ceil(4.01));
console.log(Math.floor(4.01));