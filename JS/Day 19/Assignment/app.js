// question 01 
let arr = [1, 2, 3, 45, 8, 5, 10, 23]
function greaterNum(arr, num) {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i])
        }
    }
}
greaterNum([1, 2, 4, 7, 23, 50], 19);

// question 02
function getUniqueString(str) {
    let ans = "";

    for (let i = 0; i < str.length; i++) {
        const charStr = str[i];
        if (ans.indexOf(charStr) == -1) {
            ans += charStr;
        }
    }
    return ans
}
console.log(getUniqueString("abcdabcdefgggh"))

// question 03
function largestCountry(country) {

    let ansIdx = 0;
    for (let i = 0; i < country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if (currLen > ansLen) {
            ansIdx = i;
        }
    }
    return country[ansIdx]
}
console.log(largestCountry(["Australia", "Germany", "United States of America"]))

// question 04
function vowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == "a" ||
            str.charAt(i) == "e" ||
            str.charAt(i) == "i" ||
            str.charAt(i) == "o" ||
            str.charAt(i) == "u"
        ) {
            count++
        }
    }
    return count
}
console.log(vowels("banana"))

// question 05
function randomNum(start, end) {

    let diff = end - start
    let random = Math.floor(Math.random() * diff) + start
    console.log(random)
}
console.log(randomNum(50, 100))