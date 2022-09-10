const {Router} = require("express")
const router = Router()
const {commentControllers} = require("../controllers/comments.controller")


router.get("/news/:id/comments", commentControllers.showComments)
router.post("/news/comments", commentControllers.addComment)
router.delete("/news/comments/:id", commentControllers.deleteComment)

module.exports = router