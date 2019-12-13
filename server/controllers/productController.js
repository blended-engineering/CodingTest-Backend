import {
  readProductInfoByProductId,
  readAllProductsInfoByName,
  readAllProductDiffNameSameCaterory
} from '../models/productModel';

const getProductInfoByProductId = async (req, res) => {
  try {
    let getProductInfo = await readProductInfoByProductId(req.params.productId);
    const { category, productName } = getProductInfo.dataValues;
    let otherColorProducts = await readAllProductsInfoByName(productName);
    let relatedProducts = await readAllProductDiffNameSameCaterory(
      productName,
      category
    );
    getProductInfo = getProductInfo.dataValues;
    getProductInfo.otherColorProducts = otherColorProducts;
    getProductInfo.relatedProducts = relatedProducts;
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
