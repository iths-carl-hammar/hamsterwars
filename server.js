const express = require('express');

//const { auth } = require('../firebase');

const app = express();

// alla post.body = json
app.use(express.json());

app.listen(3001), ()=>{
    console.log('Server up');
}