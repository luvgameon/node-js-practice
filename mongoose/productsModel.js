const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    brand: String,
  });

  const ProductModel = mongoose.model("produts", ProductSchema);
  module.exports=ProductModel;