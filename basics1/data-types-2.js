// Primitive
// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt
const v1 = "subham"
const v2 = 10
const v3 = true
const v4 = null
const v5 = undefined

// explicit is when coder has to write every instruction to make thr program under what is int VS float
// implicit is when coder does not have to write every instruction to make the program understand coz it understands bt itself

//Reference (Non-Primitive)
// 6 types: Object, Array, Function, Date, RegExp, Map, Set, Weak 
const heroes = ["ironman", "superman"]
let myObj = {
    name: "subham",
    age: 20
}

const myFunction = function(){
    console.log("Hello, World!")
}


console.log(typeof(v2))
console.log(typeof(heroes))
console.log(typeof(myObj))
console.log(typeof(myFunction)) 