const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { UnauthenticatedError } = require('../errors');

const authenticate = async (req, res, next) => {
	const header = req.headers.authorization;
	if (!header || !header.startsWith('Bearer')) {
		throw new UnauthenticatedError('Authentication Invalid');
	}
	const token = header.split(' ')[1];
	let payload;
	try {
		payload = jwt.verify(token, process.env.JWT_SECRET);
	} catch (error) {
		throw new UnauthenticatedError('Invalid Token');
	}

	const user = await User.findById(payload.userId);
	if (!user) {
		throw new UnauthenticatedError("User Doesn't exist");
	}
	req.user = { userId: payload.userId, name: payload.name };
	next();
};

module.exports = authenticate;
