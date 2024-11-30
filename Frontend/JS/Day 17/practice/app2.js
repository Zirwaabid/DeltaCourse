// loops with arrays
let fruits = ["mango", "banana", "orange", "peach", "apple"];
for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}

let fruits2 = ["mango", "banana", "orange", "peach", "apple"];
for (let i = fruits2.length - 1; i >= 0; i--) {
    console.log(i, fruits2[i]);
}

// nested arrays
let heroes = [
    ["ironman", "spiderman", "thor"],
    ["superman", "wonder woman", "flash"]
];
for (let i = 0; i < heroes.length; i++) {
    console.log(`list of ${i} ${heroes[i]}`);
    for (let j = 0; j < heroes[i].length; j++) {
        console.log(`j=${j} ${heroes[i][j]}`);
    }
}

let students = [
    ["Zirwa", 96],
    ["Anas", 89],
    ["Alishba", 69]
];
for (let i = 0; i < students.length; i++) {
    console.log(`info of student ${i}`)
    for (let j = 0; j < students[i].length; j++) {
        console.log(`${students[i][j]}`)
    }
}

// for of loop
let birds = [
    ["eagle", "parrot"],
    ["peigon", "sparrow"]
];
for (const bird of birds) {
    console.log(bird);
    for (const word of bird) {
        console.log(word);
        for (const charac of word) {
            console.log(charac)
        };
    };
};