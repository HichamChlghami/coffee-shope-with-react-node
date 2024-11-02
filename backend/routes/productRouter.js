const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  postProduct,
  putAllProducts,
  deleteAllProducts,
  getProductById,
  postProductById,
  putProductById,
  deleteProductById,
} = require("../controller/productControllers");

router.get("/", getAllProducts);

router.post("/", postProduct);

router.put("/", putAllProducts);

router.delete("/", deleteAllProducts);

router.get("/:productId", getProductById);

router.post("/:productId", postProductById);

router.put("/:productId", putProductById);

router.delete("/:productId", deleteProductById);

module.exports = router;
