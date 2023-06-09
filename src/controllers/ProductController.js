const Product = require("../models/ProductModel");

// create product
exports.createProduct = async (req, res, next) => {
  const { title, description, price, image, quantity } = req.body;

  try {
    const product = new Product({
      title,
      description,
      price,
      image,
      quantity,
    });

    await product.save();

    res.status(200).json({
      success: true,
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

// getAll product
exports.getProductList = async (req, res, next) => {
  try {
    let productList = await Product.find();

    res.status(200).json({
      success: true,
      data: productList,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

// get single product
exports.getSingleProduct = async (req, res, next) => {
  let id = req.params.id;
  try {
    let product = await Product.findOne({ _id: id });

    res.status(200).json({
      success: true,
      product,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

exports.updateProduct = async (req, res, next) => {
  let id = req.params.id;
  try {
    await Product.findOneAndUpdate({ _id: id }, req.body);
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

// delete product
exports.deleteProduct = async (req, res, next) => {
  let id = req.params.id;
  try {
    let product = await Product.findByIdAndDelete({ _id: id });

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
