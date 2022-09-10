const Comment = require("../models/Comment.model")
module.exports.commentControllers = {
    addComment: async function(req, res){
        const {name, text, newsId} = req.body
        try{
        await Comment.create({
            name, 
            text,
            newsId
        })
        res.json("Comment was add")
        }catch(err){
            res.json(err)
        }
    },
    deleteComment: async function(req, res){
        const {id} = req.params
        try{
        await Comment.findByIdAndRemove(id)
        res.json(`Comment by id ${id} was delete`)
        }catch(err){
            res.json(err)
        }
    },
    showComments: async function(req, res){
        const {id} = req.params
        try{
            const comments = await Comment.find({newsId: id})
            res.json(comments)
        }catch(err){
            res.json(err)
        }
    }
}