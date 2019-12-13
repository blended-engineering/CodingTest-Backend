import { readProductInfoByProductId } from '../models/productModel';

const getProductInfoByProductId = async (req, res) => {
  try {
    const getProductInfo = await readProductInfoByProductId(
      req.params.productId
    );
    console.log('getProductInfo', getProductInfo);
    return res.json(getProductInfo);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getAllProductsInfoWithSameName = async (req, res) => {
  try {
  } catch (e) {
    console.error(e);
    throw e;
  }
};

module.exports = {
  getProductInfoByProductId,
  getAllProductsInfoWithSameName
};
