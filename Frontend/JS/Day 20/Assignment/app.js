// Question 01
const arrAverage = (arr) => {
    let sum = 0;
    for (const numbers of arr) {
        sum = sum + numbers
    }
    return sum / arr.length
}
console.log(arrAverage([1, 2, 3, 4, 5]))

// question 02
const evenNum = (n) => n % 2 === 0;
console.log(evenNum(2))

