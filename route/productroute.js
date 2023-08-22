const express = require('express');
const productrouter = express.Router();
const { insertProduct,fetchProduct,search} = require('../Controller/product_Controller'); 

productrouter.post('/insertProduct', insertProduct);
productrouter.get('/fetchProduct/:category', fetchProduct);
productrouter.get('/search/:keyword',search)


module.exports = productrouter;