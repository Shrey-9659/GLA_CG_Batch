// let obj = {
//     name : "Rahul",
//     age : 20,
//     isEligible: true,
//     location: {
//         city: "Jaipur",
//         state: "RJ"
//     }
// }
let obj = {
    name : "Rahul",
    age : 20,
    isEligible: true
}
let anotherObj = {
    city: "Jaipur",
    state: "RJ"
}

// console.log(obj)
// console.log(obj.name)
// console.log(obj["location"]["city"])
// Object.freeze(obj)

// obj.isEligible = false
// console.log(obj)

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// console.log(obj)
// console.log(anotherObj)

// Object.assign(obj, anotherObj)

// console.log(obj)
// console.log(anotherObj)

console.log({...obj, ...anotherObj})