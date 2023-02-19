const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  brand: String,
});

const SavaInDB = async () => {
  const ProductModel = mongoose.model("produts", ProductSchema);
  let data = new ProductModel({
    name: "hp pavillon",
    price: 10,
    category: "Mobile",
    brand: "hp",
  });
  let result = await data.save();
  console.log(result);
};

const UpdateInDB = async () => {
  const ProductModel = mongoose.model("produts", ProductSchema);
  let data = await ProductModel.updateOne(
    { name: "hp pavillon" },
    {
      $set: { price: 999 },
    }
  );
  console.log(data);
};

const DeleteInDB = async () => {
  const ProductModel = mongoose.model("produts", ProductSchema);
  let data = await ProductModel.deleteOne({ name: "hp pavillon" });
  console.log(data);
};

const FindInDB = async () => {
  const ProductModel = mongoose.model("produts", ProductSchema);
  let data = await ProductModel.find();
  console.log(data);
};
FindInDB();