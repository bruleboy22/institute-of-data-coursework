'use strict';

const Models = require('../models');


const createPosts = (req, res) => {
  new Models.Post(req.body)
    .save()
    .then(data => res.send({ result: 200, data: data }))
    .catch(err => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};


const getPosts = (res) => {
  Models.Post.find({})
    .then(data => res.send({ result: 200, data: data }))
    .catch(err => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getOnePost = (res) => {
  Models.Post.findById(req.params.id, req.body)
  .then(data => res.send({ result: 200, data: data }))
    .catch(err => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });

};

const updatePosts =  (req, res) => {
  console.log(req.body);
  Models.Post.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
    .then(data => res.send({ result: 200, data: data }))
    .catch(err => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deletePosts = (req, res) => {
  Models.Post.findByIdAndRemove(req.params.id, req.body, { useFindAndModify: false })
    .then(data => res.send({ result: 200, data: data }))
    .catch(err => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
module.exports = {
    createPosts,
    getPosts,
    getOnePost,
    updatePosts,
    deletePosts,
  }
  