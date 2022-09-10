const Category = require("../models/Category.model")
module.exports.categoryControllers = {
    addCategory: async function(req, res){
        const {name} = req.body
        try{
        await Category.create({name})
        res.json("Category was add")
        }catch(err){
            res.json(err)
        }
    },
    deleteCategory: async function(req, res){
        const {id} = req.params
        try{
        await Category.findByIdAndRemove(id)
        res.json(`Category by id ${id} was delete`)
        }catch(err){
            res.json(err)
        }
    },
    showCategories: async function(req, res){
        try{
            const categories = await Category.find()
            res.json(categories)
        }catch(err){
            res.json(err)
        }
    }
}