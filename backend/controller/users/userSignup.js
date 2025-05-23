const userModel = require("../../models/userModels");
const bcrypt = require("bcryptjs");

async function userSignupController(req, res) {
  try {
    const { name, email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (user) {
      throw new Error("Already exist");
    }
    if (!email) {
      throw new Error("Provide the email");
    }
    if (!name) {
      throw new Error("Provide the email");
    }
    if (!password) {
      throw new Error("Provide the email");
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(password, salt);

    if (!hash) {
      throw new Error("Something Wrong");
    }

    const payLoad = {
      ...req.body,
      role: "GENERAL",
      password: hash,
    };

    const userData = new userModel(payLoad);
    const saveUser = await userData.save();

    res.status(201).json({
      data: saveUser,
      success: true,
      error: false,
      message: "User created Successfully!",
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignupController;
