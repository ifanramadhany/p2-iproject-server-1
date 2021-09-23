const PostController = require('../controllers/postController');
const { authentication, authorization } = require('../middlewares/middleware');

const router = require('express').Router();

router.get('/', PostController.getAll)

router.use(authentication)

router.post('/', PostController.addPost)
router.get('/:id', PostController.getPostById)
router.delete('/:id', authorization, PostController.deletePost)


module.exports = router