const addToCartModel = require("../../models/cartProduct");

const viewCartProduct = async (req, res) => {
  try {
    const userId = await req?.userId;
    const cartProducts = await addToCartModel
      .find({ userId })
      .populate("productId");

    res.json({
      data: cartProducts,
      message: "Products in cart",
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

module.exports = viewCartProduct;
