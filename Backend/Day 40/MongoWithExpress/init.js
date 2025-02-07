// require and setting for mongoose 
const mongoose = require('mongoose');
// require model
const chat = require("./models/chat.js")
// create connection bt js and mongodatabase
main().then(
    console.log("connection successful")
)
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

//insert into model chat
let allChats = [
    {
        from: "defne",
        to: "mira",
        msg: "send me your exam notes",
        created_at: new Date(),
    },
    {
        from: "tania",
        to: "deny",
        msg: "teach me js callStacks",
        created_at: new Date(),
    },
    {
        from: "ayesha",
        to: "mehwish",
        msg: "all the best",
        created_at: new Date(),
    },
    {
        from: "salman",
        to: "anas",
        msg: "bring me some fruits",
        created_at: new Date(),
    },
    {
        from: "carry",
        to: "doffy",
        msg: "let's go for a dinner",
        created_at: new Date(),
    },
    {
        from: "muneeba",
        to: "sadia",
        msg: "happy birthday sister",
        created_at: new Date(),
    },
];

chat.insertMany(allChats);
