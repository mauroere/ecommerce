const express = require("express");
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  validateGetProducts,
  getProductById,
} = require("../controllers/productController");
const { authMiddleware } = require("../middlewares/authMiddleware"); // Ensure correct import
const { body } = require("express-validator");

const router = express.Router();

// Route to create a product
router.post(
  "/",
  authMiddleware, // Ensure this is a valid middleware function
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("price")
      .isFloat({ min: 0 })
      .withMessage("Price must be a positive number"),
    body("description").notEmpty().withMessage("Description is required"),
  ],
  createProduct
);

// Route to get all products
router.get("/", authMiddleware, validateGetProducts, getProducts);

// Route to get a product by ID
router.get("/:id", getProductById);

// Route to update a product
router.put(
  "/:id",
  authMiddleware,
  [
    body("name").optional().notEmpty().withMessage("Name cannot be empty"),
    body("price")
      .optional()
      .isFloat({ min: 0 })
      .withMessage("Price must be a positive number"),
    body("stock")
      .optional()
      .isInt({ min: 0 })
      .withMessage("Stock must be a non-negative integer"),
  ],
  updateProduct
);

// Route to delete a product
router.delete("/:id", authMiddleware, deleteProduct);

module.exports = router;
