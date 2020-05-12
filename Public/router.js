
const { db } = require('..firebase/');
const express = require('express');
const router = express.Router();

// 



router.get('data.json', (req,res)=>{

    console.log(req.body);

    res.send({type:'POST'});

});