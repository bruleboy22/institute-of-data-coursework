
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
   text: {
    type: String,
    trim: true,
    required: true
   },
   createdAt: { type: Date, default: Date.now },
   updatedAt: { type: Date, default: Date.now }
   })

 module.exports = mongoose.model('comments', commentSchema);