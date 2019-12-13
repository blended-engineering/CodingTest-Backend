import { readAllBrandData } from '../models/brandModel';
import { readAllDetailColorData } from '../models/detailColorModel';
import { readAllGroupColorData } from '../models/groupColorModel';
import { readAllMarketData } from '../models/marketModel';
import { readAllProductData } from '../models/productModel';
import { readAllReviewData } from '../models/reviewModel';
import { readAllSaleInfoData } from '../models/saleInfoModel';
import { readAllUserData } from '../models/userModel';

const getAllBrandData = async (req, res) => {
  try {
    const getAllBrand = await readAllBrandData();
    return res.json(getAllBrand);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
const getAllDetailColorData = async (req, res) => {
  try {
    const getAllDetailColor = await readAllDetailColorData();
    return res.json(getAllDetailColor);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
const getAllGroupColorData = async (req, res) => {
  try {
    const getAllGroupColor = await readAllGroupColorData();
    return res.json(getAllGroupColor);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
const getAllMarketData = async (req, res) => {
  try {
    const getAllMarKet = await readAllMarketData();
    return res.json(getAllMarKet);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
const getAllProductData = async (req, res) => {
  try {
    const getAllProduct = await readAllProductData();
    return res.json(getAllProduct);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
const getAllReviewData = async (req, res) => {
  try {
    const getAllReview = await readAllReviewData();
    return res.json(getAllReview);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
const getAllSaleInfoData = async (req, res) => {
  try {
    const getAllSaleInfo = await readAllSaleInfoData();
    return res.json(getAllSaleInfo);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
const getAllUserData = async (req, res) => {
  try {
    const getAllUser = await readAllUserData();
    return res.json(getAllUser);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

module.exports = {
  getAllBrandData,
  getAllDetailColorData,
  getAllGroupColorData,
  getAllMarketData,
  getAllProductData,
  getAllReviewData,
  getAllSaleInfoData,
  getAllUserData
};
