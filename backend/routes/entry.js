const router = require('express').Router();
const { add, remove } = require('../controllers/entry');

router.route('/add').get(add);
router.route('/remove').get(remove);

module.exports = router;