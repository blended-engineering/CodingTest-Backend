import {
  readProductInfoByProductId,
  readAllProductsInfoByName
} from '../models/productModel';

const getProductInfoByProductId = async (req, res) => {
  try {
    let getProductInfo = await readProductInfoByProductId(req.params.productId);
    const productName = getProductInfo.dataValues.productName;
    let otherColorProducts = await readAllProductsInfoByName(productName);
    getProductInfo = getProductInfo.dataValues;
    getProductInfo.otherColorProducts = otherColorProducts;
    return res.json(getProductInfo);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getAllProductsByProductName = async (req, res) => {
  try {
    const productName = req.body.productName;
    const getAllProductsWithSameName = await readAllProductsInfoByName(
      productName
    );
    return res.json(getAllProductsWithSameName);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

module.exports = {
  getProductInfoByProductId,
  getAllProductsByProductName
};
