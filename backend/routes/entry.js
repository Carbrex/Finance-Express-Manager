const router = require('express').Router();
const {
	createEntry,
	deleteEntry,
	getAllEntries,
	updateEntry,
	getEntry,
} = require('../controllers/entry');

router.route('/').get(getAllEntries).post(createEntry);
router.route('/:id').get(getEntry).delete(deleteEntry).patch(updateEntry);

module.exports = router;