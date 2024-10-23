// question o1
let num = [1, 2, 3, 4, 5, 6, 2, 3];
for (let i = 0; i < num.length; i++) {
    let del = 2;
    if (num[i] == del) {
        num.splice(i, 1)
    }
}
console.log(num);

// question 02
let arr = 287152;
count = 0;
let copy1 = arr;
while (copy1 > 0) {
    count++;
    copy1 = Math.floor(copy1 / 10);
}
console.log(count);

// question 03
let number = 287152;
let sum = 0;
let copy = number;
while (copy > 0) {
    let digit = copy % 10;
    sum += digit;
    copy = Math.floor(copy / 10);
}
console.log(sum);

// question 04
let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
};
console.log(`factorial of ${n} is ${factorial}`);

// question 05
let lar = [1, 2, 3, 4, 5, 6, 9, 10, 8];
let largest = 0;
for (let i = 0; i < lar.length; i++) {
    if (largest < lar[i]) {
        largest = lar[i];
    }
}
console.log(largest);


