const express = require('express');
const router = express.Router();

const userController = require('../../controllers/users/users.controller')


// router.use('/auth', AuthRoute);

router.get('/', userController.landing);


module.exports = router;