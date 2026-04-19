const mongoose = require('mongoose');

// Define the comment schema
const commentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User model
    video: { type: mongoose.Schema.Types.ObjectId, ref: 'Video', required: true }, // Reference to Video model
    text: { type: String, required: true }, // Comment text
    likes: { type: Number, default: 0 }, // Likes count
    createdAt: { type: Date, default: Date.now } // Creation date
});

// Create the Comment model
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;