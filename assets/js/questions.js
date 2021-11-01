var questions = [
{
    question: "Commonly used data types do NOT include:",
    answers: ["Strings", "Alerts", "Booleans", "Numbers"],
    correctAnswer: "Alerts"
},
{
    question: "The condition in an if / else statement is enclosed with...",
    answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correctAnswer: "parenthesis"
},
{
    question: "String values must be enclosed within _____ when being assigned to variables:",
    answers: ["commas", "curly brackets", "quotes", "parenthesis"],
    correctAnswer: "quotes"
},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["Java Script", "terminal/bash", "for loops", "console.log"],
    correctAnswer: "console.log"
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


