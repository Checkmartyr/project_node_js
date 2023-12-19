const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  commentText: { type: String, required: true },
  author: { type: String, required: true },
  Drawing:{ type: String, required: true },
//   replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  createdAt: { type: Date, default: Date.now },
});

const Comment = mongoose.model('Comments', commentSchema);
module.exports = Comment;
