const express=require('express');
require('./config');
const Product=require('./productsModel');
const app= express();
app.use(express.json());
app.post('/create',async (req,res)=>{
    const data = new Product(req.body);
    let result= await data.save();
    res.send(result);
 console.log(result);

});
app.listen(500);