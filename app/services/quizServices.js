const Question = require("../models/quizModel");

exports.createQuestion = (body) => {
    return Question.create(body);
}