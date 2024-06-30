const mongoose = require("mongoose");
// console.log(process.env.MONGOOSE_URI);
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGOOSE_URI);
    console.log("connected to mongoose");
  } catch (e) {
    console.log(e);
  }
}
module.exports = connectDB;
