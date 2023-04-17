const express = require("express");
const app = express();

const PORT = 5000;

app.use(express.static('./build'));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/', (req, res) => {
    res.send('HI ehkafsdfkjhj');
})

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})
