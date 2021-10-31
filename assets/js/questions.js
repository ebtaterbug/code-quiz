var questions = [
{
    question: "Commonly used data types do NOT include:",
    answers: ["Strings", "Alerts", "Booleans", "Numbers"],
    correctAnswer: "Alerts"
},
{
    question: "question2",
    answers: ["A", "B", "C", "D"],
    correctAnswer: "B"
},
{
    question: "question3",
    answers: ["A", "B", "C", "D"],
    correctAnswer: "C"
},
{
    question: "question4",
    answers: ["A", "B", "C", "D"],
    correctAnswer: "D"
}
];

var userAnswer = "";

var answerButton1El = document.querySelector("#a1");
var answerButton2El = document.querySelector("#a2");
var answerButton3El = document.querySelector("#a3");
var answerButton4El = document.querySelector("#a4");

answerButton1El.addEventListener("click", function() {
    userAnswer = answerButton1El.textContent;
    checkAnswer();
    loadNextQuestion();
});
answerButton2El.addEventListener("click", function() {
    userAnswer = answerButton2El.textContent;
    checkAnswer();
    loadNextQuestion();
});
answerButton3El.addEventListener("click", function() {
    userAnswer = answerButton3El.textContent;
    checkAnswer();
    loadNextQuestion();
});
answerButton4El.addEventListener("click", function() {
    userAnswer = answerButton4El.textContent;
    checkAnswer();
    loadNextQuestion();
});


