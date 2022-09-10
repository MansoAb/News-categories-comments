const {Router} = require("express")
const router = Router()
const {newsControllers} = require("../controllers/news.controller")


router.get("/news/:id", newsControllers.showNewsById)
router.get("/news/categories/:id", newsControllers.showNewsByCategoriesId)
router.get("/news", newsControllers.showNews)
router.post("/news", newsControllers.addNews)
router.delete("/news/:id", newsControllers.deleteNews)
router.patch("/news/:id", newsControllers.changeNews)

module.exports = router
