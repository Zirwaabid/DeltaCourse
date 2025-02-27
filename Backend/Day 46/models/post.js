// one to squilions relation

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

const userSchema = new Schema({
    username: String,
    email: String,
}
);

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

// const addUser = async () => {
//     // let user1 = new User({
//     //     username: "zara",
//     //     email: "zara20@gmail.com"
//     // });
//     let user=await User.findOne({username:"zara"});
//     let post2 = new Post({
//         content: "Bye Bye :)",
//         likes: 22
//     });
//     post2.user = user;

//     // await user1.save();
//     await post2.save();
// }
// addUser()

const findUser = async () => {
    const result = await Post.findOne({}).populate("user", "username");
    console.log(result);
}
findUser()