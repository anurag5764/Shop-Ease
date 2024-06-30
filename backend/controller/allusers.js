const userModels = require("../models/userModels");

async function allusers(req, res) {
  try {
    const users = await userModels.find();
    res.json({
      message: "All User ",
      data: users,
      success: true,
      error: false,
    });
  } catch (err) {
    resizeBy.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}
module.exports = allusers;
