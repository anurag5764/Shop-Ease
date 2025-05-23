const productModel = require("../../models/productModel");
const uploadProductPermission = require("../../helper/permission");
async function uploadProduct(req, res) {
  try {
    const sessionUserId = req.userId;

    if (!uploadProductPermission(sessionUserId)) {
      throw new Error("Permission denied");
    }
    const data = req.body;
    const productData = await new productModel(data);

    const saveData = await productData.save();
    res.status(201).json({
      data: saveData,
      success: true,
      error: false,
      message: "Product Uploaded successfully",
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}
module.exports = uploadProduct;
