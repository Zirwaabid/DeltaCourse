const mongoose = require("mongoose");
let Schema = mongoose.Schema;
const Review = require("./review.js");
const { ref } = require("joi");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
      url:String,
      filename:String
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        }
    ],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
});

// deleted listing and review will also delete by using this middleware 
listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }

})
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;