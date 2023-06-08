const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: { type: String },
    price: { type: Number },
    image: { type: String },
    quantity: { type: Number },
  },
  { timestamps: true }
);

const Product = model("Product", productSchema);
module.exports = Product;
