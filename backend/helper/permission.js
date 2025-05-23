const userModels = require("../models/userModels");

const uploadProductPermission = async (user_id) => {
  const user = await userModels.findById(user_id);
  if (user.role === "ADMIN") {
    return true;
  }
  return false;
};
module.exports = uploadProductPermission;
