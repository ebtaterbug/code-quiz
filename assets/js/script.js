var secondsEl = parseInt(document.querySelector("#seconds").innerHTML);
var startButtonEl = document.querySelector("#start");


var time = 50;

var timer = function() {
    if (time > 0) {
        time--
        console.log(time);
    }
    document.getElementById("seconds").textContent = time;
}

startButtonEl.addEventListener("click", function() {
    setInterval(timer, 1000);
});

document.getElementById("seconds").textContent = time;







    