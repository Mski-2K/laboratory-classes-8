const Product = require("../models/Product");
const Cart = require("../models/Cart");

const { STATUS_CODE } = require("../constants/statusCode");

exports.addProductToCart = async (productData) => {
  if (!productData || !productData.name) {
    throw new Error("Invalid product data");
  }

  const product = await Product.findByName(productData.name);
  if (!product) {
    throw new Error(`Product '${productData.name}' not found`);
  }

  await Cart.add(product);
};

exports.getProductsCount = async () => {
  return await Cart.getProductsQuantity();
};
