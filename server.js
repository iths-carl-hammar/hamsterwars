const express = require('express');
const bodyParser = require('body-parser');
// min data.json file med alla objekt finns i firebase

//const { auth } = require('../firebase');
// set up express app 
const app = express();

app.use(bodyParser.json());

// alla post.body = json
app.use(express.json());

app.get('./assets/hamsters',(req,res)=>{
    console.log(req.query)

    res.send("getting root");
})


// initalize routes 
//app.use('/router', require('./Public/router'));

app.listen(3001), ()=>{
    console.log('Server up');
}