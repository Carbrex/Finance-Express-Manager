const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Types.ObjectId,
			ref: 'User',
			required: [true, 'Please provide user'],
		},
		category: {
			type: String,
			required: [true, 'Please provide category'],
			maxlength: 50,
		},
		amount: {
			type: Number,
			required: [true, 'Please provide amount'],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Transaction', TransactionSchema);
