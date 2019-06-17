const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Post = new Schema({
    content: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        default: Date(),
    }
})


module.exports = post = mongoose.model('Posts', Post);