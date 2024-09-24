const Product = require("../models/productModel");
const { faker } = require("@faker-js/faker");

const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, description, price, imageUrl, category, stock } = req.body;

    const product = new Product({
      name,
      description,
      price,
      imageUrl,
      category,
      stock,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { name, description, price, imageUrl, category, stock } = req.body;

    const product = await Product.findById(req.params.id);

    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.imageUrl = imageUrl || product.imageUrl;
    product.category = category || product.category;
    product.stock = stock || product.stock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch {
    res.status(404).json({ message: "Product not found" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await Product.deleteOne({ _id: req.params.id });
    res.json({ message: "Product removed" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const generateFakeProducts = async (req, res) => {
  const count = parseInt(req.params.count);

  if (isNaN(count) || count <= 0) {
    return res.status(400).json({ message: "Count must be a positive number" });
  }

  const fakeProducts = [];

  for (let i = 0; i < count; i++) {
    const product = {
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: parseFloat(faker.commerce.price()),
      imageUrl: `https://via.placeholder.com/640x480.png?text=${encodeURIComponent(
        faker.commerce.productName()
      )}`, // Placeholder image
      category: faker.commerce.department(),
      stock: Math.floor(Math.random() * 100) + 1,
    };
    fakeProducts.push(product);
  }

  await Product.insertMany(fakeProducts);
  res
    .status(201)
    .json({ message: `${count} fake products generated successfully!` });
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  generateFakeProducts,
};
