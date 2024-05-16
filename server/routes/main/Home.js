const HomeController = require('./../../Controllers/main/Home')
const express = require('express');

const router = express.Router();

router.get('/products', HomeController.GetProducts);

module.exports = router;