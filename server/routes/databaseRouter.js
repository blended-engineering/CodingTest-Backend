const express = require('express');
const router = express.Router();
import {
  getAllBrandData,
  getAllDetailColorData,
  getAllGroupColorData,
  getAllMarketData,
  getAllProductData,
  getAllReviewData,
  getAllSaleInfoData,
  getAllUserData
} from '../controllers/databaseController';
/* GET users listing. */

router.get('/brand', getAllBrandData);

router.get('/detailColor', getAllDetailColorData);

router.get('/groupColor', getAllGroupColorData);

router.get('/market', getAllMarketData);

router.get('/product', getAllProductData);

router.get('/review', getAllReviewData);

router.get('/saleInfo', getAllSaleInfoData);

router.get('/user', getAllUserData);

module.exports = router;
