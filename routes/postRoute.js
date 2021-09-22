const PostController = require('../controllers/postController');
const { authentication } = require('../middlewares/middleware');

const router = require('express').Router();

router.use(authentication)

router.get('/', PostController.getAll)
router.use('/', PostController.addPost)


module.exports = router