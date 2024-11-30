// object literals
let student = {
    name: "Zirwa Abid",
    age: 19,
    city: "Jahanian"
}
student.city = "Sahiwal";
student.gender;
student.gender = "female";
student.marks;
student.marks = 98;
student.marks = 100;
delete student.marks;
console.log(student);

// nested object literals
let classinfo = {
    zirwa: {
        city: "Jahanian",
        age: 19,
    },
    Anas: {
        city: "Jahanian",
        age: 22,
    },
    Zainab: {
        city: "Lodharan",
        age: 18,
    }
}
console.log(classinfo.zirwa.age = 20)
console.log(classinfo)

// generate random numbers 
let random = Math.floor(Math.random() * 100) + 1;
console.log(random);
let random2 = Math.floor(Math.random() * 5) + 1;
console.log(random2)