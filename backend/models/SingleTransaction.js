const mongoose = require('mongoose');

const SingleTransactionSchema = new mongoose.Schema(
	{
		category: {
			type: String,
			required: [true, 'Please provide category'],
			maxlength: 50,
		},
		amount: {
			type: Number,
			required: [true, 'Please provide amount'],
		},
		transaction_type: {
			type: String,
			enum: ['dr', 'cr'],
			required: [true, 'Please provide transaction_type'],
		},
		remarks: {
			type: String,
			default: '',
			maxlength: 100,
		},
		createdBy:{
			type:mongoose.Types.ObjectId,
			ref:'User',
			required:[true,'Please provide user']
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Transaction', SingleTransactionSchema);
