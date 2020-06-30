const express = require('express');

const server = express();

const path = require('path');
const { app } = require('firebase-admin');
require('dotenv').config ();

const port = process.env.PORT || 2048;
server.use(express.static(__dirname + '/../my-app'));
server.listen(serverPort, () => console.log('Server is listening on port ' + serverPort));

server.get('/', (req, res)=>{
    console.log('GET /api' ,req.url);
    let array = getHamstersFromDatabase();
    res.send(JSON.stringify(array));
})

app.get('*',(req,res)=>{
  let filePath = path.resolve('../build/index.html')
  res.sendFile(filePath)
})

function getHamstersFromDatabase(){
    return [
        {id: 1, name:'Nils',FavFood:'carrot', },
        {id: 2, name: 'Greta'}
    ]
}