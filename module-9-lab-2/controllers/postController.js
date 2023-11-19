"use strict";
const Models = require("../models");

const getPosts = (res) => {
    Models.Post.findAll({}).then(function (data) {
        res.send({result: 200 , data: data})
    }).catch(err => {
        throw err
    })
}

const createPosts = (req, res) => {
    Models.Post.create(req.body).then(function (data) {
        res.send({ result: 200 , data: data})
    }).catch(err => {
        throw err
    })
}

const updatePosts = (req, res) => {
    Models.Post.update(req.body, { where: { id:
        req.params.id} }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const deletePosts = (req, res) => {
    Models.Post.destroy({ where: { id: req.params.id}
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

module.exports = {
    getPosts,
    createPosts,
    updatePosts,
    deletePosts,
}