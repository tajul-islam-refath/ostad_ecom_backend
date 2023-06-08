const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    cName: {
      type: String,
    },
    cEmail: { type: String },
    address: { type: String },
    price: { type: Number },
    products: [
      {
        title: { type: String },
        price: { type: Number },
        quantity: { type: Number },
      },
    ],
    totalPrice: { type: Number },
  },
  { timestamps: true }
);

const Order = model("Order", orderSchema);
module.exports = Order;
