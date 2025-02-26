// one to many relation

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

// one to many relation 
const orderSchema = new Schema({
    title: String,
    price: Number,
});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer",customerSchema);

const addCustomer=async()=>{
let cus1=new Customer({
    name:"Sana Malik",
})
}

// const addOrders = async () => {
//     const res = await Order.insertMany([
//         { title: "Samosa", price: 50 },
//         { title: "sandwhich", price: 100 },
//         { title: "burger", price: 200 }
//     ]);
//     console.log(res)
// }
// addOrders()