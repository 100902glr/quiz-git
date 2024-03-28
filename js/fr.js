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

    {
        question: "Wat is de beroemde Franse lekkernij die bestaat uit laagjes bladerdeeg, gevuld met banketbakkersroom en bedekt met een glazuur van karamel?",
        choices: [
            "Croissant",
            "Éclair",
            "Macaron",
            "Millefeuille"
        ],
        correctAnswer: "Millefeuille"
    },
    {
        question: "Welke Franse stad staat bekend als de hoofdstad van de parfumindustrie?",
        choices: [
            "Nice",
            "Marseille",
            "Cannes",
            "Grasse"
        ],
        correctAnswer: "Grasse"
    },
    {
        question: "Wie was de beroemde Franse keizer die bekend staat om zijn militaire veroveringen en de introductie van het Napoleontische rechtssysteem?",
        choices: [
            "Napoleon Bonaparte",
            "Louis XIV",
            "Charlemagne",
            "François Hollande"
        ],
        correctAnswer: "Napoleon Bonaparte"
    },
    {
        question: "Wat is de traditionele Franse dans die vaak wordt geassocieerd met de Moulin Rouge en de Belle Époque?",
        choices: [
            "Ballet",
            "Can-Can",
            "Tango",
            "Wals"
        ],
        correctAnswer: "Can-Can"
    },
    {
        question: "Wat is de beroemde Franse lekkernij die bestaat uit laagjes bladerdeeg, gevuld met banketbakkersroom en bedekt met een glazuur van karamel?",
        correctAnswer: "Millefeuille"
    },
    {
        question: "Welke Franse stad staat bekend als de hoofdstad van de parfumindustrie?",
        correctAnswer: "Grasse"
    },
    {
        question: "Wie was de beroemde Franse keizer die bekend staat om zijn militaire veroveringen en de introductie van het Napoleontische rechtssysteem?",
        correctAnswer: "Napoleon Bonaparte"
    },
    {
        question: "Wat is de traditionele Franse dans die vaak wordt geassocieerd met de Moulin Rouge en de Belle Époque?",
        correctAnswer: "Can-Can"
    },
    {
        question: "Wat is een bekend Frans gerecht dat bestaat uit slakken gekookt met knoflookboter en kruiden?",
        correctAnswer: "Escargots"
    }

];

// Set initial question index
// Set initial question index
var currentQuestionIndex = 0;

var totalCorrect = 0;

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

    var choiceInputs = document.querySelectorAll('input[type="radio"]');
    console.log(choiceInputs)
    choiceInputs.forEach((input, index) => {
        input.value = currentQuestion.choices[index].toLowerCase();
    });

    // Define submitAnswerButton within the scope of this function
    var submitAnswerButton = document.getElementById('submitAnswer');
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
            // Increase total correct count
            totalCorrect++;
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
        alert("Selecteer graag een antwoord..");
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
        window.location.href = "end.html?quiz=nl&score=" + totalCorrect; // Pass the score as a query parameter
    }
});

function updateScore(score) {
    var scoreElement = document.getElementById("score");
    scoreElement.textContent = score + " van de 5 vragen correct beantwoord";
}

// Display the first question initially
displayQuestion();

