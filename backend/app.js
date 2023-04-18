require('dotenv').config();
require('express-async-errors');

const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
const USER = process.env.USER || 'Express';

app.use(express.static('../frontend/dist'));

app.get('/', (req, res) => {
    res.send(`Hi, ${USER}`);
})

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})
