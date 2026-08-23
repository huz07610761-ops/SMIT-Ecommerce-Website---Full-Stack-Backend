const express = require('express');
const {createProduct,getData} = require('../controller/product');

const router = express.Router();

router.get('/addproduct',(req,res)=>{
    res.render('form')
})

router.post('/productadd',createProduct)

router.get('/product',getData)

module.exports = router