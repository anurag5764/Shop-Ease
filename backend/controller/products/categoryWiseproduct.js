const productModel = require("../../models/productModel");

const getProductDetails = async (req, res) => {
  try {
    const { category } = req?.body || req?.query;
    const productData = await productModel.find({ category });
    res.json({
      data: productData,
      message: "product category",
      error: false,
      success: true,
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};
module.exports = getProductDetails;
