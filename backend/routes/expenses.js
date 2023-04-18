const router = require('express').Router();
// const { login, register } = require('../controllers/expenses');

router.route('/expenses').post(register);

module.exports = router;