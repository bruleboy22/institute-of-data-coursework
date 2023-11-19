'use strict';

const User = require('./users');
const Post = require('./posts');
const { Sequelize } = require('../dbConnect');
const Likes = require('./likes');
const Books = require('./books');
const Characters = require('./characters');

async function init() {
  try {
    await User.sync();
    await Post.sync();
    await Likes.sync();
    await Books.sync();
    await Characters.sync();
    //await Sequelize.sync({force: true});
    console.log('Models synchronized with the database.');
  } catch (error) {
    console.error('Error syncing models:', error);
  }
}

init();

module.exports = {
  User,
  Post,
  Likes,
  Books,
  Characters,
};
