const User = require('../models/User');
const Entry = require('../models/SingleTransaction');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors');

const getAllEntries = async (req, res) => {
	const entries = await User.findById(req.user.userId)
		.select('transactions')
		.sort('createdAt');
	console.log(entries);
	res.status(StatusCodes.OK).json({ entries, count: entries.length });
};
const getEntry = async (req, res) => {
	const {
		user: { userId },
		params: { id: entryId },
	} = req;

	// const transactions = await User.findById(userId).select('transactions');
	const { transactions } = await User.findById(userId);
	// console.log(tempuser);
	console.log(transactions);
	// console.log(transactions);
	// console.log(transactions.transactions);
	console.log(entryId);
	// for (let i = 0; i < transactions.transactions.length; i++) {
	// 	console.log(transactions.transactions[i]._id);
	// 	if (transactions.transactions[i]._id === entryId) {
	// 		console.log('Value found at index', i);
	// 		break;
	// 	}
	// }
	// const entry = transactions.transactions.filter(
	// 	(transaction) => transaction._id === `new ObjectId("${entryId}")`
	// );
	const entry = 1;
	if (!entry) {
		throw new NotFoundError(`No entry with id ${entryId}`);
	}
	res.status(StatusCodes.OK).json({ entry });
};

const createEntry = async (req, res) => {
	// req.body.createdBy = req.user.userId;
	const user = await User.findById(req.user.userId);
	const { category, amount, transaction_type, remarks } = req.body;
	const newEntry = await Entry.create({
		category,
		amount,
		transaction_type,
		remarks,
	});
	// user.transactions = [...user.transactions, newEntry];
	user.transactions.push(newEntry);
	await user.save();
	res.status(StatusCodes.CREATED).json({ newEntry });
};

const updateEntry = async (req, res) => {
	const {
		body: { company, position },
		user: { userId },
		params: { id: jobId },
	} = req;

	if (company === '' || position === '') {
		throw new BadRequestError('Company or Position fields cannot be empty');
	}
	const job = await Job.findByIdAndUpdate(
		{ _id: jobId, createdBy: userId },
		req.body,
		{ new: true, runValidators: true }
	);
	if (!job) {
		throw new NotFoundError(`No job with id ${jobId}`);
	}
	res.status(StatusCodes.OK).json({ job });
};

const deleteEntry = async (req, res) => {
	const {
		user: { userId },
		params: { id: jobId },
	} = req;

	const job = await Job.findByIdAndRemove({
		_id: jobId,
		createdBy: userId,
	});
	if (!job) {
		throw new NotFoundError(`No job with id ${jobId}`);
	}
	res.status(StatusCodes.OK).send();
};

module.exports = {
	createEntry,
	deleteEntry,
	getAllEntries,
	updateEntry,
	getEntry,
};
