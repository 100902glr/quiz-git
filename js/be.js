const questions = [
    {
        questionNumber: 1,
        question: "Wat is de hoofdstad van België?",
        choices: [
            "Brussel",
            "Antwerpen",
            "Gent",
            "Luik"
        ],
        correctAnswer: "Brussel"
    },
    {
        questionNumber: 2,
        question: "Welke Belgische stad staat bekend om zijn chocolade?",
        choices: [
            "Brugge",
            "Leuven",
            "Antwerpen",
            "Brussel"
        ],
        correctAnswer: "Brugge"
    },
    {
        questionNumber: 3,
        question: "Welke Belgische stripfiguur is een bekende reporter?",
        choices: [
            "Suske",
            "Kuifje",
            "Jommeke",
            "Lucky Luke"
        ],
        correctAnswer: "Kuifje"
    },
    {
        questionNumber: 4,
        question: "In welke Belgische stad is het Atomium te vinden?",
        choices: [
            "Antwerpen",
            "Gent",
            "Brussel",
            "Luik"
        ],
        correctAnswer: "Brussel"
    },
    {
        questionNumber: 5,
        question: "Welke Belgische zangeres staat bekend als de 'Queen of Pop'?",
        choices: [
            "Natalia",
            "Helena",
            "Laura",
            "Axelle"
        ],
        correctAnswer: "Natalia"
    },
    {
        questionNumber: 6,
        question: "Wie schreef 'De Leeuw van Vlaanderen'?",
        choices: [
            "Hendrik Conscience",
            "Willem Elsschot",
            "Stijn Streuvels",
            "Hugo Claus"
        ],
        correctAnswer: "Hendrik Conscience"
    },
    {
        questionNumber: 7,
        question: "Welke Belgische stad staat bekend om zijn diamanten?",
        choices: [
            "Antwerpen",
            "Brugge",
            "Gent",
            "Leuven"
        ],
        correctAnswer: "Antwerpen"
    },
    {
        questionNumber: 8,
        question: "Welke Belgische surrealistische schilder staat bekend om zijn 'Les Temps Perdu'?",
        choices: [
            "René Magritte",
            "Paul Delvaux",
            "James Ensor",
            "Fernand Khnopff"
        ],
        correctAnswer: "René Magritte"
    },
    // Additional questions
    {
        questionNumber: 9,
        question: "Wat is de bijnaam van de inwoners van Gent?",
        choices: [
            "Gentenaars",
            "Antwerpenaren",
            "Bruggelingen",
            "Leuvenaars"
        ],
        correctAnswer: "Gentenaars"
    },
    {
        questionNumber: 10,
        question: "Welke Belgische stad is bekend om zijn jaarlijkse carnavalsstoet?",
        choices: [
            "Aalst",
            "Mechelen",
            "Kortrijk",
            "Hasselt"
        ],
        correctAnswer: "Aalst"
    }
];

let currentQuestionIndex = 0;
let totalCorrect = 0;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionTextElement = document.getElementById('questionText');
    if (questionTextElement) {
        questionTextElement.textContent = "Vraag " + currentQuestion.questionNumber + ": " + currentQuestion.question;
    } else {
        console.error("Error: questionText element not found.");
    }
    
    const choiceLabels = document.querySelectorAll('.choice label');
    choiceLabels.forEach((label, index) => {
        label.textContent = currentQuestion.choices[index];
    });

    const choiceInputs = document.querySelectorAll('input[type="radio"]');
    choiceInputs.forEach((input, index) => {
        input.value = currentQuestion.choices[index].toLowerCase();
    });

    const submitAnswerButton = document.getElementById('submitAnswer');
    submitAnswerButton.addEventListener('click', submitAnswerFunction);
}

const submitAnswerFunction = () => {
    const selectedAnswer = document.querySelector('input[name="capital"]:checked');
    
    if(selectedAnswer) {
        if(selectedAnswer.value.toLowerCase() === questions[currentQuestionIndex].correctAnswer.toLowerCase()) {
            selectedAnswer.parentElement.style.backgroundColor = "green";
            totalCorrect++;
        } else {
            selectedAnswer.parentElement.style.backgroundColor = "red";
            document.querySelector('input[value="' + questions[currentQuestionIndex].correctAnswer.toLowerCase() + '"]').parentElement.style.backgroundColor = "green";
        }
        
        const choices = document.querySelectorAll('.choice input[type="radio"]');
        choices.forEach((choice) => {
            choice.disabled = true;
        });
        
        const submitAnswerButton = document.getElementById('submitAnswer');
        submitAnswerButton.style.display = "none";
        
        document.getElementById('nextQuestion').style.display = "block";
    } else {
        alert("Kies een antwoord");
    }
}

document.getElementById('nextQuestion').addEventListener('click', () => {
    currentQuestionIndex++;
    
    if(currentQuestionIndex < questions.length) {
        displayQuestion();
        
        const radioButtons = document.querySelectorAll('.choice input[type="radio"]');
        radioButtons.forEach((radioButton) => {
            radioButton.checked = false;
            radioButton.disabled = false;
        });
        
        const choices = document.querySelectorAll('.choice');
        choices.forEach((choice) => {
            choice.style.backgroundColor = "";
        });
        
        document.getElementById('nextQuestion').style.display = "none";
        document.getElementById('submitAnswer').style.display = "block";
    } else {
        window.location.href = "end.html?quiz=be&score=" + totalCorrect;
    }
});

function updateScore(score) {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = score + " van de 10 vragen correct beantwoord";
}

displayQuestion();
