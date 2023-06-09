const Order = require("../models/OrderModel");

// create order
exports.createOrder = async (req, res, next) => {
  const { products, totalPrice, address } = req.body;
  try {
    let email = req.email;
    let user = await User.aggregate([
      { $match: { email: email } },
      {
        $project: {
          _id: 1,
          email: 1,
          name: 1,
        },
      },
    ]);
    const order = new Order({
      customerName: user.name,
      customerEmail: user.email,
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

    res.status(200).json({
      success: true,
      orderList,
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
    let data = await Order.find({ email: email });

    res.status(200).json({ success: true, data: data });
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
};
