const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method,);

    if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hi this is doing in node.js</title></head>');
    res.write('<body>')
    res.write('<form action="/submit" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name">');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male"/>');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female"/>');
    res.write('<input type="submit" value="Submit">');
    res.write('</form>');
    res.write('<h1>welcome home</h1></body>');
    res.write('</html>');
    return res.end();
    }

    else if(req.url.toLowerCase() === '/submit' && req.method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const params = new URLSearchParams(parsedBody);
            const objbody = Object.fromEntries(params.entries());
            console.log(objbody);
        });
        fs.writeFileSync('user.txt', 'Tanveen Ambrose');
        res.statusCode = 302;
        res.setHeader('Location', '/');

    }
else{
      res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
    res.write('<head><title>Hi this is doing in node.js</title></head>');
    res.write('<body><h1>404 not found</h1></body>');
    res.write('</html>');
    return res.end();
}
});
const PORT = 3003;
server.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});