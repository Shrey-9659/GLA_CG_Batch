// for
// for(initialization; condition; inc/dec){
//     task;
// }

// print a number from 1 to n;
// let n = 50;
// for(let i = 1; i<=n; i++){
//     console.log(i)
// }



// while
// while(condition){
//     task;
//     inc/dec;
// }
// Print a table of 15; 
// (15 x 1 = 15)
// (15 x 2 = 15)
// (15 x 3 = 15)
// (15 x 4 = 15)
// (15 x 5 = 15)
// (15 x 6 = 15)
// (15 x 7 = 15)
// (15 x 8 = 15)
// (15 x 9 = 15)
// (15 x 10 = 15)

// for(let i = 1; i<=10; i++){
    // (15 x 1 = 15)
    // console.log("15 x " + i + "=" + 15*i)
//     console.log(`15 x ${i} = ${15*i}`)
// }
// let i = 1;
// while(i<=10){
//     console.log(`15 x ${i} = ${15*i}`)
//     i++;
// }


// do...while

// do{
//     task
//     inc/dec
// }while(condition)
// print from 1 to 5;
// for(let i = 6; i<=5; i++){
//     console.log(i)
// }
// let i = 1;
// do{
//     console.log(i)
//     i++
// }while(i<=5)


// for...of -- arrays

let arr = [1,2,3,4,5,6,7,8,9,10]
// for(let values of array){
//     console.log(values)
// }
// for(let values of arr){
//     console.log(values)
// }

// for...in -- objects

// for(let keys in arr){
//     console.log(keys)
// }
let obj = {
    name: "Kartik",
    age: 55,
    gender: "M",
    isEligible : true
}
for(let keys in obj){
    // console.log(keys)
    // console.log(obj[keys])
    console.log(`${keys} : ${obj[keys]}`)
}