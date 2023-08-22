const express = require('express');
const cartrouter = express.Router();
const { fetchcart,addtocart, cartincrement, cartdecrement, totalCartDelete,removeFromCart,fetchquantity } = require('../Controller/cart_Controller'); 

cartrouter.post('/addcart/:product_id', addtocart);
cartrouter.get('/fetchcart',fetchcart)
cartrouter.post('/inc/:product_id',cartincrement)
cartrouter.post('/dec/:product_id',cartdecrement)
cartrouter.post('/remove/:product_id',removeFromCart)
cartrouter.post('/del',totalCartDelete)
cartrouter.get('/fetchquantity', fetchquantity);

module.exports=cartrouter


