const uploadProductPermission = require("../../helper/permission");
const productModel = require("../../models/productModel");

async function deleteProductController(req, res) {
  try {
    if (!uploadProductPermission(req.userId)) {
      throw new Error("Permission denied");
    }
    const { _id } = req.body;
    await productModel.deleteOne({ _id: _id });

    res.json({
      message: "Product deleted",
      error: false,
      success: true,
      data: [],
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}
module.exports = deleteProductController;
