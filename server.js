// 
const express = require('express');


const app = express();


app.use(express.static(__dirname + '/Public'))
// alla post.body
app.use(express.json());



app.listen(3001);
