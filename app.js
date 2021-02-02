var express = require("express")

var app = express()
var path = require("path")
var port = 3000
var userRouter = require("./routers/user")
var bodyParser = require("body-parser");

app.use(bodyParser.json())

// //bài1
// app.use(express.static("public"))

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "./views/index.html"))
// })

// app.get("/con", function(req, res) {
//     res.sendFile(path.join(__dirname, "./views/index(1).html"))
// })
// app.get("/download", function(req, res) {
//     res.download("./vendor/img/genshin.png")
// })

//bài 2

app.use("/nodemy", userRouter)




app.listen(port, function() {
    console.log("Server chạy tại cổng: " + port);
})