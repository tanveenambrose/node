const http = require('http');
const fs = require('fs');
const {requestHandler} =require('./handle')

const server = http.createServer(requestHandler);

const PORT = 3004;
server.listen(PORT, ()=>{
    console.log(`The server is working on http://localhost:${PORT}`)
})  