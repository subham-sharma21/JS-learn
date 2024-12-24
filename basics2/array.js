/*
const myArr = [1, 2, 3, true, "text"]
const heroes = ["ironman", "superman"]
console.log(myArr[2])
console.log(heroes[1])

////// array methods
myArr.push(6) //inserts 6 at the last
console.log(myArr)

myArr.pop() // removes the last element
console.log(myArr)

myArr.unshift(9) // inserts the elements at the beginning of array
console.log(myArr)

myArr.shift(9) // removes the elements from the beginning of array
console.log(myArr)

console.log(myArr.includes(1)) // checks if that element is present
console.log(myArr.indexOf("text")) //returns the index for the element
*/
/////////////////////////////////// slice vs splice /////////////////
/*
console.log("----------")
const arr = [1,2,3,4,5,6,7]
const arr1 = arr.slice(1,3) // returns the value without changing the original arr
console.log(arr)
console.log(arr1)
console.log("----------")
const arr2= arr.splice(1,3) // returns the value changing the original arr (deleting the given part)
console.log(arr)
console.log(arr2)
*/
///////////////array 2/////////////
/*
const marvel = ["ironman","captain"]
const dc = ["batman","superman"]
// marvel.push(dc)
// console.log(marvel); //pushes array inside array

const newTeam = marvel.concat(dc) //joins the array in new array (concat operator)
console.log(newTeam);

const newNewTeam = [...marvel,...dc] //joins more than 2 array (spread operator)
console.log(newNewTeam);
*/
/*
//exotic code
const arr = [1,2,3,[4,5,[8,9]],6,7]

console.log(arr.flat(1)) //removes the nested array and returns the array with the elements
console.log(arr.flat(0)) //removes the nested array and returns the array with the elements
console.log(arr.flat(Infinity)) //removes the nested array and returns the array with the elements


console.log(Array.isArray("hello"))  
console.log(Array.from("hello"))
*/
/*
const marvel = ["ironman","captain"]
const dc = ["batman","superman"]
let s1 = 1100
let s2 = 2200
let s3 = 3300

console.log(Array.of(s1,s2,s3))

const other_type = [...dc,...marvel]
console.log(other_type)
*/