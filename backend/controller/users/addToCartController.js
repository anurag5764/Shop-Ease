const addToCartModel = require("../../models/cartProduct");

const addToCartController = async (req, res) => {
  try {
    const { productId } = await req?.body;
    const userId = await req.userId;

    const isProductExist = await addToCartModel.findOne({ productId });

    if (isProductExist) {
      return res.json({
        message: "Product already Exist",
        error: true,
        success: false,
      });
    }

    const payload = {
      productId: productId,
      quantity: 1,
      userId: userId,
    };

    const newAddToCart = new addToCartModel(payload);

    const saveProduct = await newAddToCart.save();

    res.json({
      data: saveProduct,
      message: "Product added",
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
module.exports = addToCartController;
