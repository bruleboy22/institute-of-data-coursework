const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.post('/like/:postId', (req, res) => {
Controllers.likesController.likePost (req, res)
});

module.exports = router;