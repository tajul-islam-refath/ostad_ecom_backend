const router = require("express").Router();

const {
  register,
  login,
  updateProfile,
  profileDetails,
  RecoverVerifyEmail,
  RecoverVerifyOTP,
  RecoverResetPass,
  userList,
} = require("../controllers/UserController");

const {
  createProduct,
  getProductList,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/ProductController");

const {
  createOrder,
  getOrderList,
  getOrderListByUser,
} = require("../controllers/OrderController");

const authVerifyMiddleware = require("../middleware/AuthVerifyMiddleware");

// user router
router.post("/user/registration", register);
router.post("/user/login", login);
router.post("/user/update", authVerifyMiddleware, updateProfile);
router.get("/user/profileDetails", authVerifyMiddleware, profileDetails);
router.get("/users", authVerifyMiddleware, userList);

// product route
router.get("/products", getProductList);
router.get("/products/:id", getSingleProduct);
router.post("/products/new", authVerifyMiddleware, createProduct);
router.put("/products/:id", authVerifyMiddleware, updateProduct);
router.delete("/products/:id", authVerifyMiddleware, deleteProduct);

// order route
router.get("/orders", getOrderList);
router.get("/orders/me", authVerifyMiddleware, getOrderListByUser);
router.post("/orders/new", authVerifyMiddleware, createOrder);
module.exports = router;
