const router = require('express').Router();
const userRoute = require('./userRoute');
const postRoute = require('./postRoute');
const likeRoute = require('./likeRoute');

router.get("/", function (req, res) {
  res.send("ini di router index");
});

router.use("/users", userRoute);
router.use("/posts", postRoute);
router.use("/likes", likeRoute);

module.exports = router