// one to few relation

const mongoose = require("mongoose");
const { Schema } = mongoose;
let mongo_url = "mongodb://127.0.0.1:27017/relationDemo";
main().then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect(mongo_url);
};

// one to few relation 
const userSchema = new Schema({
    username: String,
    addresses: [
        {
            _id: false,
            location: String,
            city: String,
        },
    ],
});

const User = mongoose.model("User", userSchema);
const addUsers = async () => {
    let user1 = new User({
        username: "Corey",
        addresses: [
            {
                location: "London",
                city: "P31 Block 34",
            },
        ],
    });
    user1.addresses.push({ location: "London", city: "P44 Block 10" });
    let res = await user1.save()
    console.log(res)

}
addUsers();