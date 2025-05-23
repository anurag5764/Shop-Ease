const express = require("express");

const router = express.Router();

const userSignupController = require("../controller/users/userSignup");
const userSigninController = require("../controller/users/userSignin");
const userDetailController = require("../controller/users/userDetails");
const authToken = require("../middleware/authToken");
const userLogout = require("../controller/users/userLogout");
const allusers = require("../controller/users/allusers");
const ChangeRole = require("../controller/users/changeRole");
const uploadProduct = require("../controller/products/uploadProduct");
const allproducts = require("../controller/products/allproducts");
const updateProductController = require("../controller/products/updateProduct");
const deleteProductController = require("../controller/products/deleteProduct");
const getProductCategory = require("../controller/products/getProductCategory");
const getProductDetails = require("../controller/products/categoryWiseproduct");
const getDetail = require("../controller/products/getProductDetaills");
const addToCartController = require("../controller/users/addToCartController");
const countProducts = require("../controller/users/countProduct");
const viewCartProduct = require("../controller/users/viewCartProduct");

router.post("/signup", userSignupController);
router.post("/signin", userSigninController);
router.get("/userdetails", authToken, userDetailController);
router.get("/logout", userLogout);

router.get("/all-user", authToken, allusers);
router.post("/updaterole", authToken, ChangeRole);

// product upload
router.post("/upload-product", authToken, uploadProduct);
router.get("/allproducts", allproducts);
router.post("/update-product", authToken, updateProductController);
router.post("/delete-product", authToken, deleteProductController);
router.get("/product-category", getProductCategory);
router.post("/category-product", getProductDetails);
router.post("/product-details", getDetail);

// add to cart

router.post("/addToCart", authToken, addToCartController);
router.get("/cartCount", authToken, countProducts);
router.get("/view-cart-product", authToken, viewCartProduct);
module.exports = router;
