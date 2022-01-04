var express = require('express');
const client = require('../config/db_config');

const uploadFile = require("../config/upload");

const firebaseAdmin = require('firebase-admin');
const { v4: uuidv4 } = require('uuid');
const serviceAccount = require('./resto-eca87-firebase-adminsdk-sfc7e-52cc5b1dc0.json');

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
            if(element.file==null)
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

module.exports.updimg = async (req,res)=>{
    try {
        await uploadFile(req, res);
    
        if (req.file == undefined) {
          return res.status(400).send({ message: "Please upload a file!" });
        }
    
        const result = await client.db("resto").collection("foddetimg").insertOne({
            'name':req.body.name,
            'file':req.file
        });
        res.status(200).send({
          message: "Uploaded the file successfully: " + req.file.originalname,
        });
      } catch (err) {
        console.log(err);
    
        if (err.code == "LIMIT_FILE_SIZE") {
          return res.status(500).send({
            message: "File size cannot be larger than 2MB!",
          });
        }
    
        res.status(500).send({
          message: `Could not upload the file: ${req.file.originalname}. ${err}`,
        });
      }
}

module.exports.dwnimg = async (req,res)=>{
    try{
        let namev = req.body.name;
        const result = await client.db("resto").collection("foddetimg").find();
        result.forEach(element => {
            if(element.file!==null&&element.name===namev){
                const fileName = element.file.filename;
                const pathName = element.file.path;

                // console.log(pathName);

                res.download(pathName, fileName, (err) => {
                    if (err) {
                        res.status(500).send({
                            message: "Could not download the file. " + err,
                        });
                    }
                });
            }
        });
    } catch(err){
        res.status(404).send("File Not Found")
        console.log(err);
    }
}

module.exports.updimgfb = async (req,res)=>{
    try {
        await uploadFile(req, res);
        if (req.file == undefined) {
          return res.status(400).send({ message: "Please upload a file!" });
        }

        const admin = firebaseAdmin.initializeApp({
            credential: firebaseAdmin.credential.cert(serviceAccount),
        });
        
        const storageRef = admin.storage().bucket(`gs://resto-eca87.appspot.com`);
        (async() => {
            path='./config/uploads/'+req.file.originalname;

            storage = await storageRef.upload(path, {
                    public: true,
                    destination: `uploads/restoimg/${req.file.originalname}`,
                    metadata: {
                        firebaseStorageDownloadTokens: uuidv4(),
                    }
            });
            let url = storage[0].metadata.mediaLink;
            // console.log(url);
            // const url = await uploadFile('./config/uploads/', req.file.originalname);
            // console.log(url);
            
            const result = await client.db("resto").collection("foddetimg").insertOne({
                'name':req.body.name,
                'filename':req.file.originalname,
                'filelocfb':url
            });
            res.status(200).send({
            message: "Uploaded the file successfully: " + req.file.originalname,
            });
        })();
      } catch (err) {
        console.log(err);
    
        if (err.code == "LIMIT_FILE_SIZE") {
          return res.status(500).send({
            message: "File size cannot be larger than 2MB!",
          });
        }
    
        res.status(500).send({
          message: `Could not upload the file: ${req.file.originalname}. ${err}`,
        });
      }
}

module.exports.dwnimgfb = async (req,res)=>{
    try{
        let namev = req.body.name;
        const result = await client.db("resto").collection("foddetimg").find();
        result.forEach(element => {
            if(element.name===namev){
                const pathName = element.filelocfb;
                res.send(pathName);
            }
        });
    } catch(err){
        console.log(err);
    }
}

module.exports.deleteimg = async (req,res)=>{
    try{
        const result = await client.db("resto").collection("foddetimg").deleteMany(
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