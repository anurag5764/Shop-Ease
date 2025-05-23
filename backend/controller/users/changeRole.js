const userModels = require("../../models/userModels");

async function changeRole(req, res) {
  try {
    const sessionUser = req.userId;
    const { userId, role } = req.body;
    const payload = {
      ...(role && { role: role }),
    };

    const user = await userModels.findById(sessionUser);

    console.log("user.role", user.role);
    const userRole = await userModels.findByIdAndUpdate(userId, payload);
    console.log("user role", userRole);
    res.json({
      data: userRole,
      message: "User Updated",
      success: true,
      error: false,
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}
module.exports = changeRole;
