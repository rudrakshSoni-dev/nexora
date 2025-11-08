const express = require('express');
const router = express.Router();
const { processCheckout, getOrder } = require('../controllers/checkoutController');

router.post('/', processCheckout);
router.get('/:orderId', getOrder);

module.exports = router;