const {db} = require('./../firebase');
const {Router} = require('express');

const router = new Router();

router.get('/', async (req, res)=>{
    let hamster = [];
    let snapShot = await db.collection('hamsters').get()
    snapShot.forEach(doc => {
        hamster.push(doc.data());
        
    })
    res.send({hamsters: hamsters})

})

router.put('/:id/result',async (req, res)=>{
  let snapShot = await db.collection('hamsters').where('id', "==", req.params.id).get();
    console.log(snapShot);
  
})

router.collection('hamsters').where('id', '==',req.params.id).get();

module.exports = router;
