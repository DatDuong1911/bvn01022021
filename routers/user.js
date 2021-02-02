var express = require("express")
var router = express.Router()


router.get("/java/bai1", function(req, res) {
    res.json('Welcome bạn đến javascript bài 1')
})
router.get("/java/bai2", function(req, res) {
    res.json('Welcome bạn đến javascript bài 2')
})
router.get("/html/bai1", function(req, res) {
    res.json('Welcome bạn đến html bài 1')
})


module.exports = router