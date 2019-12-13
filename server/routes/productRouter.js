const express = require('express');
const router = express.Router();
import { getProductInfoByProductId } from '../controllers/productController';

/* GET users listing. */
router.get('/:productId', getProductInfoByProductId);

module.exports = router;
