const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
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
    res.status(500).json({ message: 'Error creating product', error });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({ owner: req.user.id });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error });
  }
};