const express = require("express");
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  validateGetProducts, // Importar correctamente
} = require("../controllers/productController");
const authMiddleware = require("../middlewares/authMiddleware");
const { body } = require("express-validator");

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("price")
      .isFloat({ min: 0 })
      .withMessage("Price must be a positive number"),
    body("stock")
      .optional()
      .isInt({ min: 0 })
      .withMessage("Stock must be a non-negative integer"),
    body("category").notEmpty().withMessage("Category is required"),
  ],
  createProduct
);
router.get("/", authMiddleware, validateGetProducts, getProducts); // Corregido validateGetProducts
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
); // Validación agregada
router.delete("/:id", authMiddleware, deleteProduct);

module.exports = router;
