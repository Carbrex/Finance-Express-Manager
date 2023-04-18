require('dotenv').config();
require('express-async-errors');
const PORT = process.env.PORT || 5000;
const USER = process.env.USER || 'Express';

//ExpressApp
const express = require('express');
const app = express();

//Routes
const authRouter = require('./routes/auth');
const entryRouter = require('./routes/entry');

//Middleware
const authenticateMW = require('./middleware/auth');
const notFoundMW = require('./middleware/not-found');
const errorMW = require('./middleware/error-handler');

// app.use(express.static('../frontend/dist'));

app.get('/', (req, res) => {
	res.send(`Hi, ${USER}`);
});

app.get('/api/v1/auth', authRouter);
// app.use('/api/v1/entry', authenticateMW, entryRouter);
app.use('/api/v1/entry', entryRouter);

app.use(notFoundMW);
app.use(errorMW);

// app.get('*', function (req, res) {
// 	res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
// });

//Function Start
async function start() {
	try {
		// await connectDB(process.env.MONGO_URL);
		// console.log('Connected to the DataBase Sucessfully');
		app.listen(PORT, () => {
			console.log(`Server is listening on http://localhost:${PORT}`);
		});
	} catch (error) {
		console.log(`Error: ${error}`);
	}
}
start();
