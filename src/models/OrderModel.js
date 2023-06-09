const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    customerName: {
      type: String,
    },
    customerEmail: { type: String },
    address: { type: String },
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
