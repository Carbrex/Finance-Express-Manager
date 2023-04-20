const User = require('../models/User');
const Entry = require('../models/SingleTransaction');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors');

const getAllEntries = async (req, res) => {
	const entries = await Entry.find({ createdBy: req.user.userId }).sort('createdAt');
	console.log(entries);
	res.status(StatusCodes.OK).json({ count: entries.length, entries });
};
const getEntry = async (req, res) => {
	const { user: { userId }, params: { id: entryId } } = req;
	const entry = await Entry.findOne({ _id: entryId, createdBy: userId });
	if (!entry) {
		throw new NotFoundError(`No Entry with id ${entryId}`);
	}
	res.status(StatusCodes.OK).json({ entry });
};

const createEntry = async (req, res) => {
	req.body.createdBy = req.user.userId;
	const entry = await Entry.create(req.body);
	res.status(StatusCodes.CREATED).json(entry);
};

const updateEntry = async (req, res) => {
	const { body: { category, amount, transaction_type, remarks }, user: { userId }, params: { id: entryId } } = req;
	if (category === '' || amount === '' || transaction_type === '' || remarks === '') {
		throw new BadRequestError('Category, Amount, Transa or Positions field cant be empty');
	}
	const entry = await Entry.findOneAndUpdate({ _id: entryId, createdBy: userId }, req.body, { new: true, runValidators: true });
	if (!entry) {
		throw new NotFoundError(`No entry with id ${entryId}`);
	}
	res.status(StatusCodes.OK).json({ entry });
};

const deleteEntry = async (req, res) => {
	const { user: { userId }, params: { id: entryId } } = req;
	const entry = await Entry.findOneAndDelete({ _id: entryId, createdBy: userId });
	if (!entry) {
		throw new NotFoundError(`No entry with id ${entryId}`);
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
