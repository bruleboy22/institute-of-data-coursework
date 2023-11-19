const express = require('express');
const router = express.Router();
const postController = require('../controllers').postController;

router.post('/create', (req, res) => {
    console.log('req body in route: ', req.body)
    postController.createPosts(req, res)
    
})

// get all posts
router.get('/posts', (req, res) => {
    postController.getPosts(req, res)
})

// get one individual post
router.get('/posts/:postId', (req, res) => {
     postController.getOnePost(req, res)
})

router.put('/posts/:postId', (req, res)=> {
    postController.updatePosts(req, res)
})

router.delete('/:id', (req, res) => {
    postController.deletePosts(req, res)
})


module.exports = router;
