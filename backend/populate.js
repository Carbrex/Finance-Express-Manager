const fs = require('fs');
const connectDB = require('./db/connect');
const User = require('./models/User');
const { stringify } = require('querystring');

require('dotenv').config();

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		console.log('Connected to the DataBase Sucessfully');

		console.log('Deleting All products...');
		await User.deleteMany();
		console.log('All products Deleted');
		const user = await User.create({
			name: 'apple',
			email: 'apple@a.com',
			password: 'apple@1234',
		});
		const token = user.createJWT();
		console.log(token);
		fs.writeFile(
			'./output.json',
			`{"user":${JSON.stringify(user)}, "token":"${token}"}`,
			(err, result) => {
				if (err) {
					console.log(err);
					return;
				}
				console.log('done with this task');
			}
		);
	} catch (error) {
		console.log(error);
	}
	setTimeout(() => {
		console.log('Hi himmat h to iska solution nikal');
		process.exit(0);
	}, 3);
};
start();
