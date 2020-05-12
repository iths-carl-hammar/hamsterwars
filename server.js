const express = require('express');
const bodyParser = require('body-parser');

//const { auth } = require('../firebase');
// set up express app 
const app = express();

app.use(bodyParser.json());

// alla post.body = json
app.use(express.json());

// initalize routes 
//app.use('/router', require('./Public/router'));

app.listen(3001), ()=>{
    console.log('Server up');
}