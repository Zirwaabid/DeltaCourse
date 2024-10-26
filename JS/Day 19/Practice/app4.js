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

// higher order function return

const oddEvenFactory = function (request) {
    if (request == "odd") {
        return odd = function (n) {
            console.log(!(n % 2 == 0));
        }
    }
    else if (request == "even") {
        return even = function (n) {
            console.log((n % 2 == 0));
        }
    }
    else {
        console.log("wrong request");
    }
}
//  request="even";
request = "odd";
let func = oddEvenFactory(request)
func(2)

// methods in objects 
// const calculator = {
//     add: function (a, b) {
//         return a + b;
//     },
//     sub: function (a, b) {
//         return a - b;
//     },
//     mul: function (a, b) {
//         return a * b;
//     }
// }
// short form of above object 
const calculator = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    },
    mul(a, b) {
        return a * b;
    }
}

console.log(calculator.add(3, 5))
console.log(calculator.mul(3, 5))
console.log(calculator.sub(3, 5))