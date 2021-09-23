const PostController = require('../controllers/postController');
const { authentication, authorization } = require('../middlewares/middleware');

const router = require('express').Router();

router.get('/', PostController.getAll)

router.use(authentication)

router.delete('/:id', authorization, PostController.deletePost)
router.post('/', PostController.addPost)


module.exports = router