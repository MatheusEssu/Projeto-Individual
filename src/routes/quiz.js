var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/insertQuiz", function (req, res) {
    quizController.insertQuiz(req, res);
})

module.exports = router;