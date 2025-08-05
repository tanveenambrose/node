const http = require('http');
const testingSyntax = require('./syntex');
const runtime = require('./runtime'); 
const logicalError = require('./logical'); 

const server = http.createServer((req,res)=>{
    console.log(req.url, req.method);
    testingSyntax();
    runtime(); 
    logicalError();// Call the imported function to test syntax
});

const PORT = 3005;
server.listen(PORT, ()=>{
    console.log(`The server is working on http://localhost:${PORT}`)
})  