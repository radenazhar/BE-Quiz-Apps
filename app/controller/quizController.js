const { restart } = require('nodemon');
const quizServices = require('../services/quizServices')

exports.createQuestion = async(req, res) => {
    try {
        const newQuestion = await quizServices.createQuestion(req.body);
        res.status(200).json(newQuestion);
    } catch (error) {
        res.status(400).json(error);
    }
}