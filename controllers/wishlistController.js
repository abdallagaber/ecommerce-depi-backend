const Wishlist = require("../models/wishlistModel");

const getWishlist = async (req, res) => {
  try {
    const { userId } = req.params;

    const wishlist = await Wishlist.findOne({ userId }).populate(
      "products.productId"
    );

    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found" });
    }

    res.status(200).json(wishlist);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const addToWishlist = async (req, res) => {
  try {
    const { userId } = req.params;
    const { productId } = req.body;

    if (!userId || !productId) {
      return res
        .status(400)
        .json({ message: "User ID and Product ID are required" });
    }

    let wishlist = await Wishlist.findOne({ userId });
    if (!wishlist) {
      wishlist = await Wishlist.create({ userId, products: [] });
    }

    const productExists = wishlist.products.some(
      (item) => item.productId.toString() === productId
    );
    if (productExists) {
      return res.status(400).json({ message: "Product already in wishlist" });
    }

    wishlist.products.push({ productId });
    await wishlist.save();

    return res.status(201).json({
      message: "Product added to wishlist",
      wishlist: wishlist,
    });
  } catch (error) {
    console.error("Error adding product to wishlist:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

const removeFromWishlist = async (req, res) => {
  try {
    const { userId, productId } = req.params;

    if (!userId || !productId) {
      return res.status(400).json({ message: "Invalid userId or productId" });
    }

    const wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found" });
    }

    const productIndex = wishlist.products.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (productIndex === -1) {
      return res.status(404).json({ message: "Product not found in wishlist" });
    }

    wishlist.products.splice(productIndex, 1);

    await wishlist.save();

    return res
      .status(200)
      .json({ message: "Product removed from wishlist successfully" });
  } catch (error) {
    console.error("Error removing product from wishlist:", error);
    return res.status(500).json({
      error: "An error occurred while removing the product from the wishlist",
    });
  }
};

module.exports = {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
};
