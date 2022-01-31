const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "jade");

app.listen(8080, function(){
    console.log("Server is running on port 8080.");
})

var questions = ["1, 1, 2, 3, 5", "1, 4, 9, 16, 25", "2, 3, 5, 7, 11", "1, 2, 4, 8, 16"];
var answers = [8, 36, 13, 32];

app.get('/', function (req, res) {
    res.render('number-quiz.pug', viewvalue(0, 0));
});

app.post('/quiz', function (req, res) {
    let par = req.body;
    let quiz_number = parseInt(par.quiz_number);
    let score = parseInt(par.score);
    let answer = parseInt(par.answer);

    var data;
    if (quiz_number + 1 == questions.length) {
        data = viewvalue(answer == answers[quiz_number] ? ++score : score, quiz_number);
        data.result = "You have completed the Number Quiz with a score of " +
            score + " out of " + answers.length;
        data.done = true;
    } else 
        data = viewvalue(answer == answers[quiz_number] ? ++score : score, ++quiz_number);
    res.render('number-quiz.pug', data);
});

function viewvalue(score, quiz_number) {
    var data = {
        'score': score,
        'question': questions[quiz_number],
        'quiz_number': quiz_number,
        'result': ""
    }
    return data;
}