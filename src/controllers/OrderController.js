const Order = require("../models/OrderModel");

// create order
exports.createOrder = async (req, res, next) => {
  const { products, totalPrice, name, email, address } = req.body;
  try {
    let authEmail = req.email;

    const order = new Order({
      customer: authEmail,
      name: name,
      email: email,
      address,
      products,
      totalPrice,
    });

    await order.save();

    res.status(200).json({
      success: true,
      message: "Order saved successfully",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

// getAll order
exports.getOrderList = async (req, res, next) => {
  try {
    let orderList = await Order.find();
    console.log(orderList);
    res.status(200).json({
      success: true,
      data: orderList,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

// get order list by user
exports.getOrderListByUser = async (req, res) => {
  let email = req.email;
  try {
    let data = await Order.find({ customer: email });

    res.status(200).json({ success: true, data: data });
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
};
