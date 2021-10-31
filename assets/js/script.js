var secondsEl = parseInt(document.querySelector("#seconds").innerHTML);
var startButtonEl = document.querySelector("#start");

var finalScore = [];

var time = 50;
var timerId;

function startTimer() {
    timeId = setInterval(timer, 1000);
}

function timer() {
    if (time > 0) {
        time--
        document.getElementById("seconds").textContent = time;
        document.getElementById("final-score").textContent = time;
    }
    if (time == 0) {
        document.getElementById("div2").classList.add("display-none");
        document.getElementById("div3").classList.remove("display-none");
        clearInterval();
    }
}

var questionsIndex = 0;


function loadNextQuestion() {
    if (questionsIndex < 4) {
        document.getElementById("question").textContent = questions[questionsIndex].question;
        document.getElementById("a1").textContent = questions[questionsIndex].answers[0];
        document.getElementById("a2").textContent = questions[questionsIndex].answers[1];
        document.getElementById("a3").textContent = questions[questionsIndex].answers[2];
        document.getElementById("a4").textContent = questions[questionsIndex].answers[3];
        
    }
    else {
        document.getElementById("div3").classList.remove("display-none");
        document.getElementById("div2").classList.add("display-none");
        clearInterval(timeId);
    }
    
}

function checkAnswer() {
    if (questions[questionsIndex].correctAnswer == userAnswer) {
        document.getElementById("answer").textContent = "Correct";
        console.log(userAnswer + questions[questionsIndex].correctAnswer + "correct");
        questionsIndex++  
    }
    else {
        document.getElementById("answer").textContent = "False";
        time = time - 10;
        console.log(userAnswer + questions[questionsIndex].correctAnswer + "False");
        questionsIndex++
    }
    
}

startButtonEl.addEventListener("click", function() {
    startTimer();
    document.getElementById("div1").classList.add("display-none");
    document.getElementById("div2").classList.remove("display-none");
    loadNextQuestion();
});

document.getElementById("seconds").textContent = time;
document.getElementById("final-score").textContent = time;   