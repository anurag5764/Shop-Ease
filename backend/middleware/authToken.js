const jwt = require("jsonwebtoken");
async function authToken(req, res, next) {
  try {
    const attoken = req.cookies?.token;
    if (!attoken) {
      return res.json({
        message: "User not Login",
        error: true,
        success: false,
      });
    }
    jwt.verify(attoken, process.env.TOKEN_SECRET_KEY, function (err, decoded) {
      if (err) {
        console.log("error", err);
      }
      req.userId = decoded._id;

      next();
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      data: [],
      error: true,
      success: false,
    });
  }
}
module.exports = authToken;
