function average(a, b, c) {
    let sum = a + b + c;
    let answer = sum / 3;
    console.log(answer)
}
average(2, 3, 4)

function tables(number) {
    for (let i = number; i <= number * 10; i = i + number) {
        console.log(i)
    }

}
tables(5)

function sum(a, b) {
    console.log("sum")
    return a + b
}
console.log(sum(1, 3));

function isAdul(age) {
    if (age >= 18) {
        return "you are adult"
    } else {
        return "you are not adult"
    }
}
console.log(isAdul(45));