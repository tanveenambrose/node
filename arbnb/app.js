const express = require('express');
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');
const app = express();

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.use(express.urlencoded());

app.use(userRouter);
app.use(hostRouter);




const PORT = 3006;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});