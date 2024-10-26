// higher order functions
function multiFunc(func, count) {
    for (let i = 1; i <= count; i++) {
        func()
    }
}

const greet = function () {
    console.log("AslamuAlikum");
}

multiFunc(greet, 5)