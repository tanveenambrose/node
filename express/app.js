const express = require('express');
const app = express();


app.use((req, res, next) => {
    console.log("First Dummy Middleware", req.method, req.url);
    next();
});
app.use((req, res, next) => {
    console.log("Second Dummy Middleware", req.method, req.url);
    next();
});
// app.use((req, res, next) => {
//     console.log("Third Middleware", req.method, req.url);
//     res.send("<h3>Hello from the third middleware!</h3>");
// });

app.get('/', (req, res, next) => {
    res.send("<h1>Welcome To the Home Page</h1>")});

app.get('/contact', (req, res, next)=>{
    res.send(`<h1>Welcome To the Contact Page</h1><br>
        <form action="/contact" method="POST">
        <input type="text" name="name" placeholder="Enter your name" required>
        <input type="email" name="email" placeholder="Enter your email" required>
        <input type="submit"/>`)});

app.post('/contact', (req, res, next)=>{
    res.send("<h1>You will get the info soon..</h1>")});

const PORT =3006;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});