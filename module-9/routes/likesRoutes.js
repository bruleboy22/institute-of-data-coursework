const express = require('express');
const router = express.Router();
const likesController = require('../controllers/likesController');


router.post('/like/:postId', likesController.likePost);

router.delete('/unlike/:postId', likesController.unlikePost);

module.exports = router;
