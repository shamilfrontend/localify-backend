const { Router } = require('express');

const controller = require('../controllers/comment.controller');

const router = Router();

router.post('/', controller.create);

module.exports = router;
