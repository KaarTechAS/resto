var express = require('express');
const client = require('../config/db_config');

//Refernece:
//https://www.youtube.com/watch?v=fbYExfeFsI0

module.exports.sample = async (req,res)=>{
    try{
        const result = await client.db("resto").collection("foddet").insertOne({
            'name':'panner butter masala',
            'type':'side dish',
            'quantity': 200
        });
        // console.log(result);
        res.send(result);
    } catch(err){
        console.log(err);
    }
}

module.exports.create = async (req,res)=>{
    try{
        const result = await client.db("resto").collection("foddet").insertOne({
            'name':req.body.name,
            'type':req.body.type,
            'quantity':req.body.quantity
        });
        res.send(result);
    } catch(err){
        console.log(err);
    }
}

module.exports.read = async (req,res)=>{
    try{
        const result = await client.db("resto").collection("foddet").find();
        var resultfinal = [];
        // console.log(result);
        await result.forEach(element => {
            resultfinal.push(element);
            // console.log(element);
        });
        // console.log(resultfinal);
        res.send(resultfinal);
    } catch(err){
        console.log(err);
    }
}

module.exports.update = async (req,res)=>{
    /*
    References: https://www.w3schools.com/nodejs/nodejs_mongodb_update.asp
    */
    try{
        const result = await client.db("resto").collection("foddet").updateMany(
           {name: req.body.name},
            {$set: {quantity: req.body.quantity}},
            (err1,result)=>{
                if(err1)
                    console.log(err1);
                else
                    res.send(result);
            }
        );
    } catch(err){
        console.log(err);
    }
}

module.exports.delete = async (req,res)=>{
    /*
    References: https://www.w3schools.com/nodejs/nodejs_mongodb_delete.asp
    */
    try{
        const result = await client.db("resto").collection("foddet").deleteMany(
           {name: req.body.name},
            (err1,result)=>{
                if(err1)
                    console.log(err1);
                else
                    res.send(result);
            }
        );
    } catch(err){
        console.log(err);
    }
}
