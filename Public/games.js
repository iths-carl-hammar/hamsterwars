const express = require('express');
const {Router} = require('express');


 let   gamedata = {
     id: Number,
    timeStamp: Date,
    contestants: [
        { hamsterobject },
        { hamsterobject }
    ],
    winner: { hamsterobject }

}

router.post('/', async(req, res)=>{
    const doc = await db.collection('spel').doc();

    await doc.set({
        id:doc.id,
        timeStamp:Date.now(),
        ...req.body
    })
    res.send({msg: 'Saved.'})

})
