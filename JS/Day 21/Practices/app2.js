// filter method of arr 
let arr = [1, 2, 3, 4, 90, 69, 55, 54, 34, 68];
let even = arr.filter((el) => {
    return el % 2 == 0
});
console.log(even)

let odd = arr.filter((el) => {
    return !(el % 2 == 0)
});
console.log(odd)

let lessThan = arr.filter((el) => {
    return el < 20
});
console.log(lessThan)

// every
console.log([2, 4, 6].every((el) => el % 2 == 0));
console.log([2, 4, 6, 1].every((el) => el % 2 == 0));

// reduce
let num = [1, 2, 3, 4];
let finVal = num.reduce((res, el) => res + el);
console.log(finVal)

let numbers = [2, 5, 7, 9, 10, 45, 23, 44];
let maxVal = numbers.reduce((max, el) => {
    if (max < el) {
        return el
    } else {
        return max
    }
})
console.log(maxVal)

let mul = [10, 20, 30, 40].every((el) => el % 10 == 0)
console.log(mul)

function minVal(num1) {
    let min = num1.reduce((min, el) => {
        if (min < el) {
            return min
        } else {
            return el
        }
    })
    return min
}

console.log(minVal([20, 30, 40]))