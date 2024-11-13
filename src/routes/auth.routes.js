const { Router } = require('express')

const controller = require('../controllers/auth.controller')

const router = Router()

router.post('/signin', controller.signIn)
router.post('/signout', controller.signout)

module.exports = router
