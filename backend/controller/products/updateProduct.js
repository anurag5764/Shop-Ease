const uploadProductPermission = require("../../helper/permission");
const productModel = require("../../models/productModel");

async function updateProductController(req, res) {
  try {
    if (!uploadProductPermission(req.userId)) {
      throw new Error("Permission denied");
    }

    const { _id, ...resBody } = req.body;
    const updatedProduct = await productModel.findByIdAndUpdate(_id, resBody);

    res.json({
      message: "Product Updated",
      error: false,
      success: true,
      data: updatedProduct,
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}
module.exports = updateProductController;
