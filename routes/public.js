const express = require('express');
const router = express.Router();
const controller = require('.././controllers');
const auth = require('../sempli/controllers/auth')


/////////////// Routes  /////////////////////////////

router.get('/', controller.main.index)
router.post('/login', auth.auth)

router.post('/test',controller.main.test)

//users

router.get('/users', controller.users.users)
router.post('/users/create', controller.users.createuser)
router.get('/user/:id', controller.users.userid)
router.post('/user/findone', controller.users.one)
router.delete('/user/:id', controller.users.delete)
router.put('/user/update/:id',controller.users.update)

module.exports = router;