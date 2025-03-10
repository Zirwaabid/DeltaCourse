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

// handling deletion
customerSchema.post("findOneAndDelete", async (customer) => {
    if (customer.orders.length) {
        let data = await Order.deleteMany({ _id: { $in: customer.orders } });
        console.log(`This data is deleted ${data}`)
    }
});
const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// add customer 
const addCust = async () => {
    let newCust = new Customer({
        name: "Defne",
    });
    let newOrd = new Order({
        title: "pizza",
        Price: "2000",
    });
    newCust.orders.push(newOrd);
    await newOrd.save();
    await newCust.save();
    console.log("new customer is added")
};

// delete Customer
const deleteCust = async () => {
    const deletedCust = await Customer.findByIdAndDelete("67c1ec72c49a15b53702794d");
    console.log(deletedCust);
}
deleteCust();
// addCust();


// const addCustomer = async () => {
//     let cus1 = new Customer({
//         name: "Sana Malik",
//     });
//     let order1 = await Order.findOne({ title: "Samosa" });
//     let order2 = await Order.findOne({ title: "sandwhich" });
//     cus1.orders.push(order1);
//     cus1.orders.push(order2);
//     let res = await cus1.save();
//     console.log(res)
// };
// addCustomer();

// const findCustomer = async () => {
//     let result = await Customer.findOne({name:"Sana Malik"}).populate("orders");
//     console.log(result)

// }
// findCustomer();
// const addOrders = async () => {
//     const res = await Order.insertMany([
//         { title: "Samosa", price: 50 },
//         { title: "sandwhich", price: 100 },
//         { title: "burger", price: 200 }
//     ]);
//     console.log(res)
// }
// addOrders()