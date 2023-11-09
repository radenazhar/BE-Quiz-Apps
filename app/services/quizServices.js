const Question = require("../models/quizModel");


exports.createQuestion = (body) => {
    return Question.create(body);
}

exports.getQuestion = () => {
    return Question.find();
}

exports.getQuestionById = (id) => {
    return Question.findById(id);
}

exports.deleteQuestion = (id) => {
    console.log(id)
    return Question.findByIdAndDelete(id)
}

/*
try {
        const _id = new mongoose.Types.ObjectId(id)
        console.log(_id);
        const doc = await Question.findById(_id).exec();
        console.log(doc)
        // await doc.delete();
    } catch (error) {
        console.log(error)
    }
return id; */