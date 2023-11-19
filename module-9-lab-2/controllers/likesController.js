"use strict";
const Models = require("../models");

const addLikes = (data, res) => {
    let criteria = {where: { id: data.postId 
    }}
    let dataToUpdate = {
        likes: sequelize.literal('likes + 1')
    }
    Models.Posts.update(dataToUpdate, criteria)
    .then(function (data) {
        res.send({ result: 200 , data: data})
    }).catch(err => {
        throw err
    })
}
module.exports = {
    addLikes,
}