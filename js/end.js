let currentQuestion = 1;
let totalCorrect = 0;

function checkAnswer(isCorrect) {
    if (isCorrect) {
        document.getElementById("question" + currentQuestion).classList.add("correct");
        totalCorrect++;
    } else {
        document.getElementById("question" + currentQuestion).classList.add("incorrect");
    }
}

function nextQuestion() {
    const currentQuestionElement = document.getElementById("question" + currentQuestion);
    currentQuestionElement.style.display = "none";
    currentQuestion++;
    const nextQuestionElement = document.getElementById("question" + currentQuestion);
    if (nextQuestionElement) {
        nextQuestionElement.style.display = "block";
    } else {
        showResult();
    }
}

function showResult() {
    updateScore(totalCorrect);
    document.getElementById("result").textContent = "Je hebt " + totalCorrect + " van de 15 vragen goed beantwoord.";
}

function updateScore(score) {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = score;

    const scoreBox = document.querySelector(".score-box");
    const percent = (score / 15) * 100;
    scoreBox.style.background = `linear-gradient(to right, red 0%, green ${percent}%, red ${percent}%, red 100%)`;
}

// document.getElementById("question1").style.display = "block";

const checkCurrentQuiz = () => {
    const queryString = window.location.search;
    if (queryString === "?quiz=nl") {
        // Show Belgium and France photos
        document.getElementById('quiz-link-1').innerHTML = `<a href="www.google.com">
        <img src="../media/Belgium.jpg" alt="Quiz 1">
        <p>Quiz 1</p>
         </a>`
        document.getElementById('quiz-link-2').innerHTML = `<a href="www.google.com">
        <img src="../media/France.jpg" alt="Quiz 1">
         <p>Quiz 2</p>
         </a>`
        document.getElementById('quiz-link-3').innerHTML = `<a href="www.google.com">
         <img src="../media/Germany.jpg" alt="Quiz 1">
         <p>Quiz 3</p>
        </a>`
        
    } else if (queryString === "?quiz=be") {
        // Show Netherlands, France, and Germany photos
        document.getElementById('quiz-link-1').innerHTML = `<a href="www.google.com">
        <img src="../media/Netherlands.jpg" alt="Quiz 1">
        <p>Quiz 1</p>
         </a>`
        document.getElementById('quiz-link-2').innerHTML = `<a href="www.google.com">
        <img src="../media/France.jpg" alt="Quiz 1">
         <p>Quiz 2</p>
         </a>`
        document.getElementById('quiz-link-3').innerHTML = `<a href="www.google.com">
         <img src="../media/Germany.jpg" alt="Quiz 1">
         <p>Quiz 3</p>
        </a>`
    } else if (queryString === "?quiz=du") {
        // Show Netherlands, Belgium, and farnce photos
        document.getElementById('quiz-link-1').innerHTML = `<a href="www.google.com">
        <img src="../media/Belgium.jpg" alt="Quiz 1">
        <p>Quiz 1</p>
         </a>`
        document.getElementById('quiz-link-2').innerHTML = `<a href="www.google.com">
        <img src="../media/France.jpg" alt="Quiz 1">
         <p>Quiz 2</p>
         </a>`
        document.getElementById('quiz-link-3').innerHTML = `<a href="www.google.com">
         <img src="../media/Netherlands.jpg" alt="Quiz 1">
         <p>Quiz 3</p>
        </a>`
    }
    else if (queryString === "?quiz=fr") {
        // Show Netherlands, Belgium, and Germany photos
        document.getElementById('quiz-link-1').innerHTML = `<a href="www.google.com">
        <img src="../media/Belgium.jpg" alt="Quiz 1">
        <p>Quiz 1</p>
         </a>`
        document.getElementById('quiz-link-2').innerHTML = `<a href="www.google.com">
        <img src="../media/Netherlands.jpg" alt="Quiz 1">
         <p>Quiz 2</p>
         </a>`
        document.getElementById('quiz-link-3').innerHTML = `<a href="www.google.com">
         <img src="../media/Germany.jpg" alt="Quiz 1">
         <p>Quiz 3</p>
        </a>`
    }
}

document.addEventListener("DOMContentLoaded", function() {
    checkCurrentQuiz();
});