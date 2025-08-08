const path = require('path');

const express = require('express');


const homeRouter = require('./routes/homeRouter');
const contactRouter = require('./routes/contactRouter');
const app = express();
const rootDir = require('./utils/pathUtil');


app.use(homeRouter);
app.use(contactRouter);

app.use((req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', '404.html'));
})




const PORT = 3007;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})