function getSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return (sum)

}

console.log(getSum(4))

let arr = ["Zirwa", "is", "good", "girl"];
function conc(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    return result
}
console.log(conc(arr))