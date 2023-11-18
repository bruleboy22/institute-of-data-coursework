const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
   type: String,
   trim: true,
   required: true
 },
   text: {
   type: String,
   trim: true,
   required: true
 },

 createdAt: { type: Date, default: Date.now },
 updatedAt: { type: Date, default: Date.now },

  comments: [{
   type: mongoose.Schema.Types.ObjectId,
   ref: 'comments'
  }]
})

postSchema.virtual('url').get(function(){
  return '/post/' + this._id
 })

module.exports = mongoose.model('posts', postSchema); 