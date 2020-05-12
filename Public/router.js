
const { db } = require('..firebase/');
const express = require('express');
const router = express.Router();

// 



router.get('/post', (req,res)=>{

    const name = parseInt(req.query.name)
    const wins = parseInt(req.query.wins)

    
   

    const startIndex = (name - 1) * wins
    const endIndex = name * wins 

    const results = {}


     if(endIndex < hamsters.length){
        results.next = {
            name: name + 1,
            wins: wins
        }
     }
   
     
    if(startIndex > 0){
        results.previous = {
            name: name - 1,
            wins:wins
        }
    }
    

    results = name.slice(startIndex , endIndex)
    res.json(results)





    console.log(req.body);

    res.send({type:'POST'});

});

router.get('/stats', (req, res)=>{
    console.log(req.push('hamsters'));
});

router.get('/chart', (req, res)=>{
    console.log(req.body);
})
