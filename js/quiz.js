const questions = [
    {
        question: "In welk jaar is Nederland opgericht" ,
        answers: [
            { text: "1920", correct: false},
            { text: "1581", correct: true},
            { text: "1723", correct: false},
            { text: "1643", correct: false},
        ]
    },
    {
        question: "Wat is de hoofstad van Nederland?" ,
        answers: [
            { text: "Den haag", correct: false},
            { text: "Rotterdam", correct: false},
            { text: "Amsterdam", correct: true},
            { text: "Vaticaan stad", correct: false},
        ]
    },
    {
        question: "Welke Nederlandse schilder maakte De Nachtwacht?" ,
        answers: [
            { text: "Rembrandt", correct: true},
            { text: "van Gogh", correct: false},
            { text: "da Vinci", correct: false},
            { text: "Picasso", correct: false},
        ]
    },
    {
        question: "In welk jaar is NederlandIn welk jaar won Nederland het ek voetbal?" ,
        answers: [
            { text: "2014", correct: false},
            { text: "2020", correct: true},
            { text: "2004", correct: false},
            { text: "1988", correct: false},
        ]
    },
    {
        question: "Door welke brouwerij wordt Amstel bier gebrouwen?" ,
        answers: [
            { text: "Heineken", correct: true},
            { text: "Leffe", correct: false},
            { text: "Hertog jan", correct: false},
            { text: "Jupiler", correct: false},
        ]
    },
    {
        question: "Hoe heet het vroegere Nederlandse Indië nu?" ,
        answers: [
            { text: "India", correct: false},
            { text: "Indië", correct: false},
            { text: "Indonesië", correct: true},
            { text: "Pakistan", correct: false},
        ]
    },
    {
        question: "Welke Nederlandse stad heeft nooit stadswallen om zich heen gehad?" ,
        answers: [
            { text: "Breda", correct: false},
            { text: "Delft", correct: false},
            { text: "Gouda", correct: false},
            { text: "Den Haag", correct: true},
        ]
    },
    {
        question: "Wie is met 50 doelpunten nog steeds de topscorer aller tijden van het Nederlands elftal?" ,
        answers: [
            { text: "Robin van Persie", correct: true},
            { text: "Quiten Timber", correct: false},
            { text: "Cody Gakpo", correct: false},
            { text: "Memphis Depay", correct: false},
        ]
    },
    {
        question: "Van welke Nederlandse provincie is Leeuwarden de hoofdstad?" ,
        answers: [
            { text: "Breda", correct: false},
            { text: "Amsterdam", correct: false},
            { text: "Friesland", correct: true},
            { text: "Rome", correct: false},
        ]
    },
    {
        question: "Welk Nederlands bedrijf vond in 1963 de muziekcassette uit? " ,
        answers: [
            { text: "Philips", correct: true},
            { text: "AMD", correct: false},
            { text: "Postnl", correct: false},
            { text: "NXP ", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-button")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerButtons.appendChild(button);
if(answer.correct){
    button.dataset.correct = answer.correct
}

        button.addEventListener("click", selectAnswer);
    });
}
function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = "You scored " + score + " out of " + "10";
    nextButton.innerHTML = "Show results";
    nextButton.setAttribute("onclick", "window.location.href = 'end.html?quiz=nl&score='");
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}



nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})



startQuiz();