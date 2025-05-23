const productModel = require("../../models/productModel");

async function allproducts(req, res) {
  try {
    const products = await productModel.find().sort({ createdAt: -1 });
    res.json({
      message: "All products ",
      data: products,
      success: true,
      error: false,
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = allproducts;
