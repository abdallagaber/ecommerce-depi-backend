const express = require("express");
const {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
} = require("../controllers/wishlistController");

const router = express.Router();

// Get user's wishlist
router.get("/:userId", getWishlist);

// Add product to wishlist
router.post("/:userId", addToWishlist);

// Remove product from wishlist
router.delete("/:userId/:productId", removeFromWishlist);

module.exports = router;
