const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");
let mongo_url = "mongodb://127.0.0.1:27017/wonderlust";
main().then(() => {
    console.log("connected");
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect(mongo_url);
};

const initDB = async () => {
    await Listing.deleteMany({});
    initdata.data = initdata.data.map((obj) => ({
        ...obj, owner: "67e8f8515dfd48c3d13060c0"
    }))
    await Listing.insertMany(initdata.data);
    console.log("data inserted")
};
initDB();
