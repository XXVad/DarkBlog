const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  author: {type: String, required: true},
});

const postModel = mongoose.model('posts', PostSchema);

module.exports = postModel;
