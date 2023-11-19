const Like = require('../models/likes');


const likePost =  (res) => {
    Models.Likes.find({})
.then(data => res.send({ result: 200, data: data }))
.catch(err => {
  console.log(err);
  res.send({ result: 500, error: err.message });
});
};


const unlikePost = (req, res) => {
    Models.Likes.findByIdAndRemove(req.params.id, req.body, { useFindAndModify: false })
      .then(data => res.send({ result: 200, data: data }))
      .catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
  };

module.exports = {
    likePost,
    unlikePost,
  }