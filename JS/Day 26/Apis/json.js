let jsonRes = '{ "fact": "In relation to their body size, cats have the largest eyes of any mammal.", "length": 73 }';

//to covert json string data into js object
let validRes = JSON.parse(jsonRes);
console.log(validRes.fact)

//to covert js object  into json strings
let obj = {
    name: "zirwa",
    age: 19
}
let json = JSON.stringify(obj);
console.log(json)