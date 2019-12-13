const express = require('express');
const router = express.Router();
import {
  getProductInfoByProductId,
  getAllProductsInfoWithSameName
} from '../controllers/productController';

/* GET users listing. */
router.get('/:productId', getProductInfoByProductId);

router.get('/color', getAllProductsInfoWithSameName);
module.exports = router;
