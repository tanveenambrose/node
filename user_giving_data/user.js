const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

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

    else if(req.url.toLowerCase() === '/about'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
    res.write('<head><title>Hi this is doing in node.js</title></head>');
    res.write('<body><h1>welcome to about page</h1></body>');
    res.write('</html>');
    return res.end();
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
const PORT = 3001;
server.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});