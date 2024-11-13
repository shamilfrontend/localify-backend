const { Router } = require('express');

const router = Router();

const controller = require('../controllers/comment.controller');

router.post('/', controller.create);

module.exports = router;
