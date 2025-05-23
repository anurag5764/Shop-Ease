const productModel = require("../../models/productModel");

const getProductCategory = async (req, res) => {
  try {
    const productCategory = await productModel.distinct("category");

    const productByCategory = [];

    for (const category of productCategory) {
      const product = await productModel.findOne({ category });

      if (product) {
        productByCategory.push(product);
      }
    }

    res.json({
      message: "first product",
      data: productByCategory,
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
module.exports = getProductCategory;
