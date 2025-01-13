//require mongoose
const mongoose = require('mongoose');
// create connection bt js and mongodatabase
main().then(
    console.log("connection successful")
)
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// create schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
})

//create collection
const User = mongoose.model("User", userSchema);

//insert single data in user (collection)
// const user2 = new User({
//     name: "eve",
//     email: "eve@yahoo.in",
//     age:30,
// });
// user2.save();

//insert many
// User.insertMany([
//     { name: "peter", email: "peter@gmail.com", age: 33 },
//     { name: "bruce", email: "bruce@gmail.com", age: 29 },
//     { name: "tony", email: "tony@gmail.com", age: 56 },
// ]).then((res) => {
//     console.log(res)
// });

//find
User.find()
.then((res)=>{
    console.log(res)
});

