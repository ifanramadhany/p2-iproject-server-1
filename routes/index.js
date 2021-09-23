const router = require('express').Router();
const userRoute = require('./userRoute');
const postRoute = require('./postRoute');
const likeRoute = require('./likeRoute');
const errorHandler = require('../middlewares/errorHandler');

router.get("/", function (req, res) {
  res.send("ini di router index");
});

router.use("/users", userRoute);
router.use("/posts", postRoute);
router.use("/likes", likeRoute);

router.use(errorHandler)

module.exports = router