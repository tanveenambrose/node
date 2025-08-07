const path = require('path');

const express = require('express');

const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');
const app = express();

const rootDir = require('./utils/pathUtil');




app.use(userRouter);
app.use(hostRouter);

app.use((req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', '404.html'));
});





const PORT = 3006;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});