// const arrAverage=(arr)=>{

// }

let arr = [1, 2, 3, 4];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum = (arr[i] + sum) / arr.length ;

}
console.log(sum)