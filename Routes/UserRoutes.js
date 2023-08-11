const {Phone}=require('../Controller/Phone')
const {Accessories}=require('../Controller/Access')
const {Electronics}=require('../Controller/Elect') 
const {Gadgets}=require('../Controller/Gadgets')

const Routes=require("express").Router();


Routes.get('/Accessories',Accessories);
Routes.get('/Phone',Phone);
Routes.get('/Electronics',Electronics);
Routes.get('/Gadgets',Gadgets);

module.exports=Routes