const express = require('express');
const app = express();

const path = require('path');


const PORT = 3007;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})