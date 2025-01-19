//require mongoose
const mongoose = require('mongoose');
// create connection bt js and mongodatabase
main().then(
    console.log("connection successful")
)
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

// create schema
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "please enter a valid price"]
    },
    genre: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"]
    }
});


//create collection
const Book = mongoose.model("Book", bookSchema);

// insert data 
// const book1 = new Book({
//     title: "The Loneliness",
//     author: "Zirwa",
//     price: 500,

// });
// book1.save()
//     .then((res) => {
//         console.log(res);
//     });

Book.findByIdAndUpdate('678cec36552deafc0ef9edaa', { price: -500 }, { runValidators: true })
    .then((res) => {
        console.log(res)
    }).catch((err) =>
        console.log(err.errors.price.properties.message)
);
