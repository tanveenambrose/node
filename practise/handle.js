const {sumRequestHandler} = require('./sum');

const requestHandler =(req, res)=>{
 console.log(req.url, req.method);
 if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hi</title></head>');
    res.write('<body>');
    res.write('<h1>Welcome To the Home Page</h1>');
    res.write('<a href="/calculator">Go to Calculator</a>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
 }
 else if(req.url === '/calculator'){
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
        <head>
        <title>Here is the Calculator</title>
        </head>
        <body>
        <h1>Welcome To Calculator</h1><br>
        <form action="/calculate-result" method="POST">
        <input type="number" name="num1" placeholder="Enter first number" required>
        <input type="number" name="num2" placeholder="Enter second number" required>
        <input type="submit" value="Sum">
        </body>`);
        return res.end();
 }
 else if(req.url === '/calculate-result' && req.method === 'POST'){
    return sumRequestHandler(req, res);
 }

 else{
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hi</title></head>');
    res.write('<body>');
    res.write('<h1>404 Not Found</h1>');
    res.write('<a href="/">Go to Home</a>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
 }
}
exports.requestHandler = requestHandler;