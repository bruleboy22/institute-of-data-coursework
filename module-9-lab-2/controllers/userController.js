"use strict";
const Models = require("../models");

const getUsers = (res) => {
    Models.User.findAll({}).then(function (data) {
        res.send({result: 200 , data: data})
    }).catch(err => {
        throw err
    })
}
const createUsers = (req, res) => {
    Models.User.create(req.body).then(function (data) {
        res.send({ result: 200 , data: data})
    }).catch(err => {
        throw err
    })
}
const updateUser = (req, res) => {
    Models.User.update(req.body, { where: { id:
        req.params.id} }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}
const deleteUser = (req, res) => {
    Models.User.destroy({ where: { id: req.params.id}
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

module.exports = {
    getUsers, 
    createUsers,
    updateUser,
    deleteUser
}