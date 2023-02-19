const express=require('express');
require('./config');
const Product=require('./productsModel');
const app= express();
app.use(express.json());
//---------------------------------------------POST Method--------------------------------------------------->
app.post('/create',async (req,res)=>{
    const data = new Product(req.body);
    let result= await data.save();
    res.send(result);
 console.log(result);

});

//---------------------------------------GET Method---------------------------------------------------------->

app.get('/list',async(req,res)=>{
    let data=await Product.find();
    console.log(data);
    res.send(data);
})



//---------------------------------------DELETE Method---------------------------------------------------------->

app.delete('/delete/:_id',async(req,res)=>{
    let data=await Product.deleteOne(req.params);
    console.log(data);
    res.send(data);
})

//---------------------------------------UPDATE Method---------------------------------------------------------->

app.put('/put/:_id',async(req,res)=>{
    let data=await Product.updateOne(
        req.params,
        {$set:req.body}
        );
        console.log(data);
        res.send(data)
    
})

app.listen(500);