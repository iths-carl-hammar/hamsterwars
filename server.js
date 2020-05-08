// 
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use((req, res, next)=>{
    next();

})

app.get('/',(req, res)=>{
    res.send('hello');
});

app.listen(3001);
