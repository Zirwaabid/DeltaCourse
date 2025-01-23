// require mongoose 
const mongoose = require('mongoose');

// create schema 
const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    msg: {
        type: String,
        maxLength: 50,
    },
    created_at: {
        type: Date,
        required: true,
    }
});

//create model/collection
const chat=mongoose.model("chat",chatSchema);
module.exports=chat;