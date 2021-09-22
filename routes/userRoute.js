const UserController = require('../controllers/userController');
const imageKit = require('../middlewares/imageKit');
const { authentication } = require('../middlewares/middleware');
const uploadImage = require('../middlewares/multer');

const router = require('express').Router();

router.use('/register', UserController.register)
router.use('/login', UserController.login)
router.use('/data', authentication, UserController.getUserData)
router.patch('/profile', authentication, uploadImage, imageKit, UserController.changeProfile);

module.exports = router