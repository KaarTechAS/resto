var express = require('express');
const client = require('../config/db_config');
var resto_router = express.Router();
var service = require('../service/service');

var st="<!DOCTYPE html><HTML><HEAD></HEAD><BODY>";
var et="</BODY></HTML>";

// client.connect();

//http://localhost:4500/resto/
resto_router.post("/",(req,res)=>{
    res.send(
        st+"<H1>"+"Resto Router Works!<br>Welcome to our Online Restaurant!"+"</H1>"+et
    );
});

//http://localhost:4500/resto/sample
resto_router.post("/sample",service.sample);

//http://localhost:4500/resto/create
resto_router.post("/create",service.create);

//http://localhost:4500/resto/read
resto_router.post("/read",service.read);

//http://localhost:4500/resto/update
resto_router.post("/update",service.update);

//http://localhost:4500/resto/delete
resto_router.post("/delete",service.delete);

//http://localhost:4500/resto/updimg
resto_router.post("/updimg",service.updimg);

//http://localhost:4500/resto/dwnimg
resto_router.post("/dwnimg",service.dwnimg);

//http://localhost:4500/resto/updimgfb
resto_router.post("/updimgfb",service.updimgfb);

//http://localhost:4500/resto/dwnimgfb
resto_router.post("/dwnimgfb",service.dwnimgfb);

//http://localhost:4500/resto/deleteimgfb
resto_router.post("/deleteimgfb",service.deleteimgfb);

//http://localhost:4500/resto/updateimgfb
resto_router.post("/updateimgfb",service.updateimgfb);

module.exports = resto_router;