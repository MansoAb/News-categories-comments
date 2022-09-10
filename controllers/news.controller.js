
const News = require("../models/News.model")

module.exports.newsControllers = { 
    showNewsById: async function(req, res){
        const {id} = req.params
        try{
        const news = News.findById(id)
        res.json(news)
        }catch(err){
            res.json(err.message)
        }
    },
    showNewsByCategoriesId: async function(req, res){
        const {id} = req.params
        try{
        const news = await News.find({categoryId: id})
        res.json(news)
        }catch(err){
            res.json(err)
        }
    },
    showNews: async function(req, res){
        try{
        const news = News.find()
        res.json(news)
        }catch(err){
            res.json(err)
        }
    },
    addNews: async function(req, res){
        const {header, text, categoryId} = req.body
        try{
            await News.create({
            header,
            text,
            categoryId,
          });
          res.json("News was add")
        }catch(err){
            console.log(err)
        }
    },
    deleteNews: async function(req, res){
        const {id} = req.params
        try{
            await News.findByIdAndRemove(id)
            res.json(`News by ${id} was delete`)
        }catch(err){
            res.json(err)
        }
    },
    changeNews: async function(req, res){
        const {id} = req.params
        const {text, header, categoryId} = req.body
        try{
            await News.findByIdAndUpdate(id, {text, header, categoryId})
            res.json(`News by ${id} was change`)
        }catch(err){
            res.json(err)
        }
    }



}

