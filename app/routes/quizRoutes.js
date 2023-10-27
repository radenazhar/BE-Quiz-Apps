const express = require("express");
const quizController = require('../controller/quizController');
const router = express.Router();


router
    .route("/")
    .post(quizController.createQuestion);


module.exports = router;