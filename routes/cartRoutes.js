const express = require("express");
const {
  getCart,
  addToCart,
  removeFromCart,
} = require("../controllers/cartController");

const router = express.Router();

// Get user's cart
router.get("/:userId", getCart);

// Add product to cart
router.post("/:userId", addToCart);

// Remove product from cart
router.delete("/:userId/:productId", removeFromCart);

module.exports = router;
