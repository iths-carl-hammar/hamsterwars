
const {db} = require('./../firebase');
const {Router} = require('express');
const express = require('express');


const stats = {
    totalsGames: 10,
    lose: 0

}

app.get('/',(req,res)=>{
   
 
    console.log(req.params)

    res.status(404).send("not found");
})


