const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];
if (birds.includes("Eagles")){
    console.log("Eagles are in the list")
}
else{
    console.log("Eagles are not in the list")
}

// console.log(birds.indexOf ("Eagles"))
// console.log(birds.findIndex ("Eagles"))

console.log("Eagles" in birds)


