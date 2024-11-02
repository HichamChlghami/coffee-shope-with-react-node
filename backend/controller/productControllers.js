const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error!" });
  }
};

const postProduct = async (req, res) => {
  try {
    const product = await Product.create({});
    res.status(200);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error!" });
  }
};

const putAllProducts = async (req, res) => {
  res.status(403);
  res.end("PUT operation not supported on /products!");
};

const deleteAllProducts = async (req, res) => {
  try {
    const response = await Product.deleteMany({});
    res.status(200);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error!" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    res.status(200);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error!" });
  }
};

const postProductById = async (req, res) => {
  res.status(403);
  res.end(`POST operation not supported on /products/${req.params.productId}!`);
};

const putProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.productId);
    res.status(200);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error!" });
  }
};

const deleteProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.productId);
    res.status(200);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error!" });
  }
};

module.exports = {
  getAllProducts,
  postProduct,
  putAllProducts,
  deleteAllProducts,
  getProductById,
  postProductById,
  putProductById,
  deleteProductById,
};
