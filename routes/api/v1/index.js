
const router = require('express').Router();
const {checkAuth} = require('../../../middleware/auth');
const {login, dashboard} = require('../../../controllers/main');

router.post('/login', login);
router.get('/dashboard', checkAuth, dashboard);

module.exports = router;