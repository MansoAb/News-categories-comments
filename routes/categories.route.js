const {Router} = require("express")
const router = Router()
const {categoryControllers} = require("../controllers/categories.controller")


router.get("/categories", categoryControllers.showCategories)
router.post("/categories", categoryControllers.addCategory)
router.delete("/categories/:id", categoryControllers.deleteCategory)

module.exports = router