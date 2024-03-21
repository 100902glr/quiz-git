// Define an array of questions and their corresponding correct answers
var questions = [
    {
        question: "How many cities and towns are in Germany?",
        choices: [
            "80000",
            "16000",
            "478",
            "22000"
        ],
        correctAnswer: "80000"
    },
    {
        question: "Which river flows through Berlin, the capital of Germany?",
        choices: [
            "Rhine",
            "Elbe",
            "Danube",
            "Spree"
        ],
        correctAnswer: "Spree"
    },
    {
        question: "Who was the first Chancellor of West Germany after World War II?",
        choices: [
            "Angela Merkel",
            "Konrad Adenauer",
            "Helmut Kohl",
            "Willy Brandt"
        ],
        correctAnswer: "Konrad Adenauer"
    },
    {
        question: "What is the name of the German currency before the adoption of the euro?",
        choices: [
            "Markka",
            "Franc",
            "Deutsche Mark",
            "Lira"
        ],
        correctAnswer: "Deutsche Mark"
    },
    {
        question: "Which German city is famous for its annual Oktoberfest celebration??",
        choices: [
            "Cologne",
            "Stuttgart",
            "Munich",
            "Hamburg"
        ],
        correctAnswer: "Munich"
    },
    {
        question: "What is the highest mountain in Germany?",
        choices: [
            "Mont Blanc",
            " Zugspitze ",
            "Matterhorn",
            "Mount Everest",

            
        ],
        correctAnswer: " Zugspitze "
    },
    {
        question: "Which car manufacturer is headquartered in Wolfsburg, Germany??",
        choices: [
            "Ford",
            "BMW",
            "Volkswagen",
            "Mercedes-Benz"
        ],
        correctAnswer: "Volkswagen"
    },
    {
        question: "Which famous fairy tale duo originated from Germany?",
        choices: [
            "Cinderella and Prince Charming",
            "Hansel and Gretel ",
            " Romeo and Juliet",
            "LiBeauty and the Beast"
        ],
        correctAnswer: "Hansel and Gretel "
    },
    {
        question: " Which colors are in the German flag",
        choices: [
            "Red, white, and blue",
            "Green, white, and red",
            "Black, red, and gold ",
            " Yellow, black, and red"
        ],
        correctAnswer: "Black, red, and gold "
    }
    ,
    {
        question: "In which year was the Berlin Wall demolished?",
        choices: [
            "1985 ",
            "1991",
            "1989",
            "1993"
        ],
        correctAnswer: "1989"
    },
    
];

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
        window.location.href = "end.html?quiz=nl&score=" + totalCorrect; // Pass the score as a query parameter
    }
});

function updateScore(score) {
    var scoreElement = document.getElementById("score");
    scoreElement.textContent = score + " van de 5 vragen correct beantwoord";
}

// Display the first question initially
displayQuestion();
