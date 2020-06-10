const express = require('express');

const server = express();

const port = process.env.PORT || 2048;
server.use(express.static(__dirname + '/../build'));
server.listen(serverPort, () => console.log('Server is listening on port ' + serverPort));

server.get('/', (req, res)=>{
    console.log('GET /' ,req.url);
    let array = getHamstersFromDatabase();
    res.send(JSON.stringify(array));
})

function getHamstersFromDatabase(){
    return [
        {id: 1, name:'Nils',FavFood:'carrot', },
        {id: 2, name: 'Greta'}
    ]
}