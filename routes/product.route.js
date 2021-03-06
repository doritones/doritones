const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');
router.post('/create', product_controller.product_create);

router.delete('/:id', product_controller.product_delete);

router.put('/:id', product_controller.product_update);

router.get('/:id', product_controller.product_details);

router.get('/name/:name', product_controller.product_findByName);

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);
module.exports = router;
