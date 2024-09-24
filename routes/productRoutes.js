const express = require("express");
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  generateFakeProducts,
} = require("../controllers/productController");
const router = express.Router();

// Get all products
router.get("/", getProducts);

// Get a product by ID
router.get("/:id", getProductById);

// Create new product
router.post("/", createProduct);

// Update a product
router.put("/:id", updateProduct);

// Delete a product
router.delete("/:id", deleteProduct);

// Generate fake products
router.post("/fake/:count", generateFakeProducts);

module.exports = router;
