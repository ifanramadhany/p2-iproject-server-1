const UserController = require('../controllers/userController');
const imageKit = require('../middlewares/imageKit');
const { authentication } = require('../middlewares/middleware');
const uploadImage = require('../middlewares/multer');

const router = require('express').Router();

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/auth/google', UserController.googleAuth);
router.get('/data', authentication, UserController.getUserData)
router.patch('/profile', authentication, uploadImage, imageKit, UserController.changeProfile);

module.exports = router