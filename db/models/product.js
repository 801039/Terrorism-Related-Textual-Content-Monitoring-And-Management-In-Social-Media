//model folder is used for schemas
const mongoose = require("mongoose");

//Creating schema for product
const productSchema = mongoose.Schema({
  name: String,
  post: String,
  timestamp: String,
  received: {
    type: Boolean,
    default: true
  }
});

//Defining  product model
exports.Product = mongoose.model('Product', productSchema);
