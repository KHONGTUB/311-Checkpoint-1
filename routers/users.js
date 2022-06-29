const usersControllers = require('../controllers/users')
const express = require('express')
const router = express.Router()

router.get('/', usersControllers.allusers)
router.get('/:id', usersControllers.oneuser)
router.put('/:id', usersControllers.update)
router.post('/', usersControllers.create)
router.delete('/:id', usersControllers.remove)

module.exports = router