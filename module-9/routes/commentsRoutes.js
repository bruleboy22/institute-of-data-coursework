const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

router.post('/create', commentsController.createComment);

router.get('/post/:postId', commentsController.getCommentsForPost);

module.exports = router;
