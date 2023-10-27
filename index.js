const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose')
const quizRoute = require('./app/routes/quizRoutes')
const app = express();

const corsOptions = {
    origin: "*"
}

//register cors middleware
app.use(cors(corsOptions));
app.use(express.json());

//membuat routes 
/*app.get("/" , (req, res) => {
    res.json({message : "Hello"});
})
*/
mongoose.connect('mongodb://127.0.0.1:27017/quiz_apps', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( () => console.log('Connected to mongoDb'))
    .catch(err => console.error('Error connection to MongoDB', err))

app.use('/questions', quizRoute)

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=> {
    console.log(`Server berjalan di port ${PORT}`);
})
