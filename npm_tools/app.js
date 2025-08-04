const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);
});

const PORT = 3004;
server.listen(PORT, ()=>{
    console.log(`The server is working on http://localhost:${PORT}`)
})  