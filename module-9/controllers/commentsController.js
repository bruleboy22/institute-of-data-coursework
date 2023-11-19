const Comment = require('../models/comments');


const createComment = async (req, res) => {
  try {
    const { postId, content, user } = req.body;

    const comment = new Comment({ user, post: postId, content });
    await comment.save();

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getCommentsForPost = async (req, res) => {
  try {
    const { postId } = req.params;

    const comments = await Comment.find({ post: postId }).populate('user');
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
    createComment,
    getCommentsForPost,
}