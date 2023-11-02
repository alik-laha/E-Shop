const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    title: {
        type: String,
        // required: [true, "Please enter product name"],
    },
    price: {
        type: Number,
        // required: [true, "Please enter product price"],
        // maxLength: [5, "Product price cannot exceed 5 characters"],
        // default: 0.0
    },
    description:{
      type:String,
      // required:[true,"plese provide the description of the product" ]
    },
    image: {
        type:String,
        // required:[true,"plese provide image"]
    }

})
module.exports = mongoose.models.products || mongoose.model("products", productSchema);