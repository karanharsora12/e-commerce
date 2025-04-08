import express from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";
import uploads from "../middleware/upload.middleware.js";

const router = express.Router();

router.post("/", uploads.single("image"), createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", uploads.single("image"), updateProduct);
router.delete("/:id", deleteProduct);

export default router;
