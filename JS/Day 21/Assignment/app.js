// question 01
let num = [1, 2, 3, 4];
let square = num.map(el => el * el)
console.log(square)
let sum = square.reduce((sum, el) => sum + el)
console.log(sum)
let average = sum / num.length
console.log(average)

// question 02  
let arr = [1, 2, 3, 4];
let newArr = arr.map((el) => {
    return el + 5
})
console.log(newArr);

//question 03 
let str = ["zirwa abid"];

console.log(str.map((el) => {
    return el.toUpperCase();
}))

//question 04
const doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ...args.map(v => v * 2)

];
console.log(doubleAndReturnArgs([1, 2, 3], 5, 6, 7))

//question 05
const mergeObjects = (obj1, obj2) => ({
    ...obj1, ...obj2
})
console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }))