
const { db } = require('..firebase/');
const express = require('express');
const router = express.Router();

// 



router.get('/games', (req,res)=>{

    console.log(req.body);

    res.send({type:'POST'});

});

router.get('/stats', (req, res)=>{
    console.log(req.push('hamsters'));
});

router.get('/chart', (req, res)=>{

})
