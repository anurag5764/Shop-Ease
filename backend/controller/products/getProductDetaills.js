const productModel = require("../../models/productModel");

const getDetail = async (req, res) => {
  try {
    const { productId } = req.body;
    const productData = await productModel.findById(productId);

    res.json({
      data: productData,
      message: "product",
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
module.exports = getDetail;
