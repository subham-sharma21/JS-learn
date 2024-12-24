// Convert the string into an array, removing the + characters in the process. Save the result in a variable called myArray.
//t Store the length of the array in a variable called arrayLength.
// Store the last item in the array in a variable called lastItem.

const str = "hello+Subham";
const myArray = str.split("+")
console.log(myArray)
const arrayLength = str.length
console.log(arrayLength)

const lastItem = str.charAt(str.length - 1); //  to retrive last element
console.log(lastItem)

const lastItem1 = str.slice(-1) // using slice to retrive last element
console.log(lastItem1)

const lastItem2 = str[(str.length-1)] // using string length for index to get the last item
console.log(lastItem2)


/// mdn accepted
// let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
// let myArray = myString.split('+');
// console.log(myArray.join(""))

// let arrayLength = myArray.length
// console.log(arrayLength)

// let lastItem = myString[(myString.length - 1)]
// console.log(lastItem)

