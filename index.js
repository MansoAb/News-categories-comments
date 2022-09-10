const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = 3000
app.use(express.json())

app.use(require("./routes/news.route"))
app.use(require("./routes/categories.route"))
app.use(require("./routes/comments.route"))





mongoose.connect("mongodb+srv://Mansur:1954@cluster0.xyb0huh.mongodb.net/test", {
  })
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB")); //




app.listen(port, function(){
    console.log("Сервер запущен.")
})