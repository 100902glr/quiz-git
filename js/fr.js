var questions = [
    {
        question: "Wat is de officiële naam van de Franse presidentiële residentie?",
        choices: [
            "Het Élysée Kasteel",
            "Het Louvre",
            "Het Versailles Paleis",
            "Het Pantheon"
        ],
        correctAnswer: "Het Élysée Kasteel"
    },
    {
        question: "Welke rivier stroomt door Parijs?",
        choices: [
            "De Loire",
            "De Seine",
            "De Rhône",
            "De Garonne"
        ],
        correctAnswer: "De Seine"
    },
    {
        question: "Wie schreef de beroemde roman 'Les Misérables'?",
        choices: [
            "Émile Zola",
            "Gustave Flaubert",
            "Victor Hugo",
            "Albert Camus"
        ],
        correctAnswer: "Victor Hugo"
    },
    {
        question: "Wat is de hoogste berg in Frankrijk en in welk gebergte bevindt deze zich?",
        choices: [
            "Mont Blanc, in de Pyreneeën",
            "Mont Blanc, in de Vogezen",
            "Mont Blanc, in de Alpen",
            "Mont Ventoux, in de Jura"
        ],
        correctAnswer: "Mont Blanc, in de Alpen"
    },
    {
        question: "Wie staat bekend als 'de kleine mus' in de Franse muziekgeschiedenis?",
        choices: [
            "Édith Piaf",
            "Maurice Chevalier",
            "Charles Aznavour",
            "Jacques Brel"
        ],
        correctAnswer: "Édith Piaf"
    },
    // Open Questions
    {
        question: "Wat is de hoofdstad van Frankrijk?",
        correctAnswer: "Parijs"
    },
    {
        question: "Hoe wordt het Franse gerecht van dunne plakjes aardappel gebakken met ui en kruiden genoemd?",
        correctAnswer: "Gratin dauphinois"
    },
    {
        question: "Wat is de naam van het paleis nabij Versailles dat ooit de residentie was van Franse koningen?",
        correctAnswer: "Het Paleis van Versailles (Château de Versailles)"
    },
    {
        question: "Welke Franse schilder schilderde 'De Sterrennacht over de Rhône' en 'Zonnebloemen'?",
        correctAnswer: "Vincent van Gogh"
    },
    {
        question: "Hoeveel sterren heeft de Eiffeltoren?",
        correctAnswer: "De Eiffeltoren heeft geen officiële sterren."
    }
];

// Set initial question index
var currentQuestionIndex = 0;

// Function to display the current question and choices
function displayQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var questionTextElement = document.getElementById('questionText');
    if (questionTextElement) {
        questionTextElement.textContent = currentQuestion.question;
    } else {
        console.error("Error: questionText element not found.");
    }
    
    var choiceLabels = document.querySelectorAll('.choice label');
    choiceLabels.forEach(function(label, index) {
        label.textContent = currentQuestion.choices[index];
    });
}

// Function to check the selected answer and proceed to the next question
// Function to display the current question and choices
function displayQuestion() {
    // Remove previous event listener for 'Submit Answer' button
    var submitAnswerButton = document.getElementById('submitAnswer');
    // var submitAnswerButton = submitAnswerButton.cloneNode(true);
    // submitAnswerButton.parentNode.replaceChild(submitAnswerButton, submitAnswerButton);

    var currentQuestion = questions[currentQuestionIndex];
    var questionTextElement = document.getElementById('questionText');
    if (questionTextElement) {
        questionTextElement.textContent = currentQuestion.question;
    } else {
        console.error("Error: questionText element not found.");
    }
    
    var choiceLabels = document.querySelectorAll('.choice label');
    choiceLabels.forEach(function(label, index) {
        label.textContent = currentQuestion.choices[index];
    });

    var choiceInputs = document.querySelectorAll('input[type="radio"]');
    console.log(choiceInputs)
    choiceInputs.forEach((input, index) => {
        input.value = currentQuestion.choices[index].toLowerCase();
    });
    // Detach event listener if exists 
    submitAnswerButton.removeEventListener('click', submitAnswerFunction);
    // Attach event listener for 'Submit Answer' button
    submitAnswerButton.addEventListener('click', submitAnswerFunction);
}

const submitAnswerFunction = () => {
    // Get the selected answer
    var selectedAnswer = document.querySelector('input[name="capital"]:checked');
    
    // Check if an answer is selected
    if(selectedAnswer) {
        // Check if the selected answer is correct
        if(selectedAnswer.value.toLowerCase() === questions[currentQuestionIndex].correctAnswer.toLowerCase()) {
            // Apply green background to the correct choice
            selectedAnswer.parentElement.style.backgroundColor = "green";
        } else {
            // Apply red background to the incorrect choice
            selectedAnswer.parentElement.style.backgroundColor = "red";
            // Apply green background to the correct choice
            document.querySelector('input[value="' + questions[currentQuestionIndex].correctAnswer.toLowerCase() + '"]').parentElement.style.backgroundColor = "green";
        }
        
        // Disable all radio buttons
        var choices = document.querySelectorAll('.choice input[type="radio"]');
        choices.forEach(function(choice) {
            choice.disabled = true;
        });
        
        // Hide the 'Submit Answer' button
        var submitAnswerButton = document.getElementById('submitAnswer');
        submitAnswerButton.style.display = "none";
        
        // Show the 'Next Question' button
        document.getElementById('nextQuestion').style.display = "block";
    } else {
        alert("Please select an answer.");
    }
}

// Function to proceed to the next question
document.getElementById('nextQuestion').addEventListener('click', function() {
    // Increment the question index
    currentQuestionIndex++;
    
    // Check if there are more questions
    if(currentQuestionIndex < questions.length) {
        // Display the next question
        displayQuestion();
        
        // Reset radio buttons and enable them for the next question
        var radioButtons = document.querySelectorAll('.choice input[type="radio"]');
        radioButtons.forEach(function(radioButton) {
            radioButton.checked = false;
            radioButton.disabled = false;
        });
        
        // Reset background color for all choices
        var choices = document.querySelectorAll('.choice');
        choices.forEach(function(choice) {
            choice.style.backgroundColor = "";
        });
        
        // Hide the 'Next Question' button
        document.getElementById('nextQuestion').style.display = "none";
        
        // Show the 'Submit Answer' button
        document.getElementById('submitAnswer').style.display = "block";
    } else {
        alert("Congratulations! You have completed the quiz.");
    }
});

// Display the first question initially
displayQuestion();
