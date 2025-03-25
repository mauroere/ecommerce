const Product = require("../models/Product");
const { validationResult } = require("express-validator");

exports.createProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, description, price, stock, category, imageUrl } = req.body;
    const product = new Product({
      name,
      description,
      price,
      stock,
      category,
      imageUrl,
      owner: req.user.id,
    });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  }
};

exports.getProducts = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  try {
      const pageNumber = parseInt(page, 10);
      const limitNumber = parseInt(limit, 10);

      if (isNaN(pageNumber) || isNaN(limitNumber)) {
          return res.status(400).json({ message: 'Invalid pagination parameters' });
      }

      const products = await Product.find({ owner: req.user.id })
          .skip((pageNumber - 1) * limitNumber)
          .limit(limitNumber);

      res.status(200).json(products);
  } catch (error) {
      res.status(500).json({ message: 'Error fetching products', error });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error });
  }
};
