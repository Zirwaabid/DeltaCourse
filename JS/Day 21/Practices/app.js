// for each 
let arr = [1, 2, 3, 4, 5];
let print = function number(el) {
    console.log(el)
}
arr.forEach(print);

const student = [{
    name: "Zirwa",
    marks: 90,
}, {
    name: "Anas",
    marks: 98,
}, {
    name: "Ayesha",
    marks: 80,
}];
student.forEach((el) => {
    console.log(el.marks)
})

//map
let newMarks = student.map(function (el) {
    return el.marks / 10
});
console.log(newMarks)

let arr1 = [1, 2, 3, 4];
let newArr = arr1.map(function (el) {
    return el * el;
});
console.log(newArr);