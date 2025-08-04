const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    if(req.url === '/home'){
        res.write('<h1>we are in the home page</h1>');
        return res.end();
    }
    else if(req.url === '/men'){
        res.write('<h1>we are in the men page</h1>');
        return res.end();
    }
    else if(req.url === '/women'){
        res.write('<h1>we are in the women page</h1>');
        return res.end();
    }
    else if(req.url === '/kids'){
        res.write('<h1>we are in the kids page</h1>');
        return res.end();
    }
    else if(req.url === '/cart'){
        res.write('<h1>we are in the cart page</h1>');
        return res.end();
    }
    else if(req.url === '/'){
         res.write(`
        <html lang="en">
<head>
    
    <title>Document</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/men">Men</a></li>
                <li><a href="/women">Women</a></li>
                <li><a href="/kids">Kids</a></li>
                <li><a href="/cart">Cart</a></li>
            </ul>
        </nav>
    </header>
    
</body>
</html>
`);
        return res.end();

    }
    else{
        res.write('<h1>404 not found</h1>');
        return res.end();
    }

});

server.listen(3002, () => {
    console.log('Server is running on port http://localhost:3002');
})