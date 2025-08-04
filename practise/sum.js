const sumRequestHandler = (req, res) => {
    console.log(req.url, req.method);
    const body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    }
    );
        req.on('end', () => {
           const bodyStr = Buffer.concat(body).toString();
              const params = new URLSearchParams(bodyStr);
              const bodyObj = Object.fromEntries(params);
              console.log(bodyObj);
              const result = Number(bodyObj.num1) + Number(bodyObj.num2);
              console.log(result);
              res.setHeader('Content-Type', 'text/html');
     res.write(`
         <html>
         <head>
         <title>The Rersult</title>
         </head>
         <body>
         <h1>The Sum of these two numbers is = ${result}</h1><br>
            <a href="/">Go to Home</a>
         </body>
         </html>`)
         return res.end();
        });
    }

exports.sumRequestHandler = sumRequestHandler;