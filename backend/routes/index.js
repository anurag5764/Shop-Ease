const express = require("express");

const router = express.Router();

const userSignupController = require("../controller/userSignup");
const userSigninController = require("../controller/userSignin");
const userDetailController = require("../controller/userDetails");
const authToken = require("../middleware/authToken");
const userLogout = require("../controller/userLogout");
const allusers = require("../controller/allusers");

router.post("/signup", userSignupController);
router.post("/signin", userSigninController);
router.get("/userdetails", authToken, userDetailController);
router.get("/logout", userLogout);

router.get("/all-user", authToken, allusers);
module.exports = router;
