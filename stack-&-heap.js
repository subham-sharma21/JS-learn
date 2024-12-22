 // stack: returns copy of a variable
 let myName = "subham_sharma"
 let nameCopy = myName
 nameCopy = "sharma_subham"
 console.log(myName)
 console.log(nameCopy) // subham_sharma

 // heap: returns the refernce of a variable which makes changes to the original data
 let userOne = {
    email: "info@google.com",
    upi: "user@sbi"
 }

 let userTwo = userOne
 userOne.email = "subham@google.com",
 userOne.upi = "subham@sbi"

 console.log(userOne.email);
 console.log(userTwo.email);
 