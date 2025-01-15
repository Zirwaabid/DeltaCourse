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
    }
})


//create collection
const Book = mongoose.model("Book", bookSchema);

// insert data 
const book1=new B