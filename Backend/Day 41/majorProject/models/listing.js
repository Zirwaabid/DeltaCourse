const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: Object,
        default: "https://unsplash.com/photos/a-living-room-filled-with-furniture-and-a-fire-place-nto1bN6d8U8",
        set: (v) =>
            v === "" ? "https://unsplash.com/photos/a-living-room-filled-with-furniture-and-a-fire-place-nto1bN6d8U8" : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;