// for(initialization; condition; inc/dec){
//     task
// }

// Print number from 1 to 10
// for(let i = 1; i<=10; i++){
//     console.log(i)
// }

// Print all even numbers from 1 to 50.

// 1
// for(let i = 2; i<=50; i = i+2){
//     console.log(i)
// }

// 2
// for(let i = 2; i<=50; i++){
//     if(i%2 == 0) console.log(i)
// }


// Find the sum of all numbers from 1 to 100.

// let sum = 0;
// for(let i = 1; i<=100; i++){
//     sum = sum + i;
// }
// console.log(sum)

// Take a number and calculate its factorial.

// let fact = 1;
// let n = 5;
// for(let i = 1; i<=n; i++){
//     fact = fact*i
// }
// console.log(fact)


let numbers = [10, 25, 30, 80, 45, 50, 65, 70];
// Print all the values of an array
let lastElementIndex = numbers.length - 1
// console.log(lastElementIndex)
// for(let i = 0; i<=lastElementIndex; i++){
//     console.log(numbers[i])
// }

// Find the largest number in the array.
let largestNumber = numbers[0];

for(let i = 1; i<=lastElementIndex; i++){
    if(numbers[i]>largestNumber){
        largestNumber = numbers[i]
    }
}
console.log(largestNumber)

