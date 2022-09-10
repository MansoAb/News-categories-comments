const mongoose = require("mongoose")


const commentSchema  = mongoose.Schema({
    name: String,
    text: String,
    newsId: String
})

const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment