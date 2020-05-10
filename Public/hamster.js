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

router.collection('hamsters').where('id', '==',req.params.id).get();

module.exports = router;
