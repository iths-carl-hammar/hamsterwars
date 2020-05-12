const hamsters = require('../data.json');
const {db} = require('../firebase');

const admin = require('firebase-admin');
const firestore = admin.firestore();
const path = require('path');
const fs = require('fs');
const directoryPath = path.join(__dirname, 'hamsters')
// bilder på Hamster finns storage i firebase .

fs.readdir(directoryPath, function(err, hamsters ){
   if(err) {
       return console.log('Unable to scan' + err);
   }
})

hamsters.forEach((file)=>{
    let lastDoIndex = file.lastIndexOf(".");

    let menu = require('../assets/hamsters' + hamsters)
    menu.forEach((obj)=>{
        firestore
        .collection(hamsters.substring(0, lastDoIndex))
        .doc(obj.itemID)
        .set(obj)
        .then((docRef)=>{
            console.log('Documnet written with ID: ', docRef);

        })
        .catch((error)=>{
              console.log('Error adding documents',error);
        });


    });
});


/*
const db =  admin.firestore();
getQuote().then(result =>{
    console.log(result.body);
    const obj = JSON.parse(result.body);
    const qouteData = {
        quote: obj.quote,
        author:obj.author
    }
    return db.collection('hamster-1.jpg').doc('hamsters')
    .set(qouteData).then(()=>{
        consol-log('new quote written to databas')
    })
})
  console.log('adding hamster to db')
(   async () =>{

    for (const  hamster of hamsters) {
        try {
            await db.collection('hamsters').doc().set(hamster)
        }

        catch(err){

        }
        
    }
}
)
*/
db.collection('hamsters').get().then(snapshop =>{
    let hamster = [];
    snapshop.forEach(hamster => {
        hamsters.push(hamster.data())
    });
   
})


