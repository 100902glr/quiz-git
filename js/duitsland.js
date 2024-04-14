// Define an array of questions and their corresponding correct answers
var questions = [
    {
        question: "Hoeveel steden en dorpen zijn er in Duitsland?",
        choices: [
            "80000",
            "16000",
            "478",
            "22000"
        ],
        correctAnswer: "80000"
    },
    {
        question: "Welke rivier stroomt door Berlijn, de hoofdstad van Duitsland?",
        choices: [
            "Rijn",
            "Elbe",
            "Donau",
            "Spree"
        ],
        correctAnswer: "Spree"
    },
    {
        question: "Wie was de eerste bondskanselier van West-Duitsland na de Tweede Wereldoorlog?",
        choices: [
            "Angela Merkel",
            "Konrad Adenauer",
            "Helmut Kohl",
            "Willy Brandt"
        ],
        correctAnswer: "Konrad Adenauer"
    },
    {
        question: "Wat is de naam van de Duitse munteenheid vóór de invoering van de euro?",
        choices: [
            "Markka",
            "Franc",
            "Deutsche Mark",
            "Lira"
        ],
        correctAnswer: "Deutsche Mark"
    },
    {
        question: "Welke Duitse stad staat bekend om haar jaarlijkse Oktoberfest viering?",
        choices: [
            "Keulen",
            "Stuttgart",
            "München",
            "Hamburg"
        ],
        correctAnswer: "München"
    },
    {
        question: "Wat is de hoogste berg in Duitsland?",
        choices: [
            "Mont Blanc",
            "Zugspitze",
            "Matterhorn",
            "Mount Everest"
        ],
        correctAnswer: "Zugspitze"
    },
    {
        question: "Welke autofabrikant heeft zijn hoofdkantoor in Wolfsburg, Duitsland?",
        choices: [
            "Ford",
            "BMW",
            "Volkswagen",
            "Mercedes-Benz"
        ],
        correctAnswer: "Volkswagen"
    },
    {
        question: "Welk beroemd sprookjesduo komt oorspronkelijk uit Duitsland?",
        choices: [
            "Assepoester en Prins Charmant",
            "Hans en Grietje",
            "Romeo en Julia",
            "Belle en het Beest"
        ],
        correctAnswer: "Hans en Grietje"
    },
    {
        question: "Welke kleuren zitten er in de Duitse vlag?",
        choices: [
            "Rood, wit en blauw",
            "Groen, wit en rood",
            "Zwart, rood en goud",
            "Geel, zwart en rood"
        ],
        correctAnswer: "Zwart, rood en goud"
    },
    {
        question: "In welk jaar werd de Berlijnse Muur afgebroken?",
        choices: [
            "1985",
            "1991",
            "1989",
            "1993"
        ],
        correctAnswer: "1989"
    },
     {
        question: "Welke rivier stroomt door de stad Keulen?",
        correctAnswer: "rijn"
    },
    {
        question: "Wat is de Duitse naam voor Duitsland? ?",
        correctAnswer: "Deutschland"
    },
    {
        question: "Welke Duitse stad staat bekend om zijn jaarlijkse bierfestival, Oktoberfest??",
        correctAnswer: "München"
    },
    {
        question: "Wat is de naam van het Duitse nationale voetbalteam ?",
        correctAnswer: "Die Mannschaft"
    },
    {
        question: "Welke Duitse stad was de hoofdstad van het Heilige Roomse Rijk en staat bekend om zijn historische architectuur en monumenten?",
        correctAnswer: "Aken"
    }
];

var totalQuestions = questions.length;
var currentQuestion = 0;
var totalCorrect = 0;
function displayQuestion() {
    var questionElement = document.getElementById("questionText");
    var choicesElement = document.getElementsByClassName("choices")[0];
    var openQuestionAnswer = document.getElementById("openQuestionAnswer");

    // Toon de huidige vraag
    questionElement.textContent = questions[currentQuestion].question;

    // Verwijder alle vorige keuzes en open vraag inputveld
    choicesElement.innerHTML = "";
    openQuestionAnswer.style.display = "none";

    // Voeg keuzes toe aan de DOM voor gesloten vragen
    if (questions[currentQuestion].choices) {
        questions[currentQuestion].choices.forEach(function (choice, index) {
            var choiceElement = document.createElement("div");
            choiceElement.className = "choice";

            var inputElement = document.createElement("input");
            inputElement.type = "radio";
            inputElement.id = "option_" + index;
            inputElement.name = "capital";
            inputElement.value = choice;

            var labelElement = document.createElement("label");
            labelElement.htmlFor = "option_" + index;
            labelElement.textContent = choice;

            choiceElement.appendChild(inputElement);
            choiceElement.appendChild(labelElement);
            choicesElement.appendChild(choiceElement);
        });
    } else { // Voeg inputveld toe voor open vraag
        openQuestionAnswer.style.display = "block";
    }
}
// Functie om het huidige vraagnummer weer te geven
function displayQuestionNumber() {
    var questionNumberElement = document.getElementById("questionNumber");
    questionNumberElement.textContent = "vraag " + (currentQuestion + 1) + " van " + totalQuestions;
}

// Roep de functie aan om het huidige vraagnummer weer te geven bij het starten van de quiz
displayQuestionNumber();


function checkAnswer() {
    var selectedOption = document.querySelector('input[name="capital"]:checked');
    var openAnswer = document.getElementById("openAnswer");
    var feedbackElement = document.getElementById("feedback");
    var choices = document.querySelectorAll('.choice');
    var nextQuestionButton = document.getElementById("nextQuestion");

    if (selectedOption) { // Als het een gesloten vraag is
        var selectedValue = selectedOption.value;
        var correctAnswer = questions[currentQuestion].correctAnswer;

        if (selectedValue === correctAnswer) {
            feedbackElement.textContent = "Goed! Het juiste antwoord is: " + correctAnswer;
            feedbackElement.style.color = "green";

            // Verander de achtergrondkleur van de geselecteerde knop naar groen
            selectedOption.parentElement.style.backgroundColor = "green";
            totalCorrect++;
        } else {
            feedbackElement.textContent = "Fout! Het juiste antwoord is: " + correctAnswer;
            feedbackElement.style.color = "red";

            // Verander de achtergrondkleur van de geselecteerde knop naar rood
            selectedOption.parentElement.style.backgroundColor = "red";

            // Zoek de knop met het juiste antwoord en verander de achtergrondkleur naar groen
            choices.forEach(function (choice) {
                if (choice.textContent.includes(correctAnswer)) {
                    choice.style.backgroundColor = "green";
                }
            });
        }
    } else { // Als het een open vraag is
        var userAnswer = openAnswer.value.trim();
        var correctAnswer = questions[currentQuestion].correctAnswer.toLowerCase();

        if (userAnswer.toLowerCase() === correctAnswer) {
            feedbackElement.textContent = "Goed! Het juiste antwoord is: " + correctAnswer;
            feedbackElement.style.color = "green";
            totalCorrect++;
        } else {
            feedbackElement.textContent = "Fout! Het juiste antwoord is: " + correctAnswer;
            feedbackElement.style.color = "red";
        }

        // Zoek het antwoord en verander de achtergrondkleur van de knop naar groen
        choices.forEach(function (choice) {
            if (choice.textContent.includes(correctAnswer)) {
                choice.style.backgroundColor = "green";
            }
        });
    }

    // Verberg de submit button en toon de knop voor de volgende vraag
    document.getElementById("submitAnswer").style.display = "none";
    nextQuestionButton.style.display = "inline";

    // Verberg het inputveld voor open vragen
    openAnswer.style.display = "none";

    // Reset de waarde van het inputveld voor open vragen
    openAnswer.value = '';
}

// Eventlistener voor doorgaan naar de volgende vraag
document.getElementById("nextQuestion").addEventListener("click", function () {
    var openAnswer = document.getElementById("openAnswer");
    var nextQuestionButton = document.getElementById("nextQuestion");

    // Toon het inputveld voor open vragen
    openAnswer.style.display = "block";

    // Verberg de knop voor de volgende vraag
    nextQuestionButton.style.display = "none";
});

// Eventlistener voor het controleren van antwoorden
document.getElementById("submitAnswer").addEventListener("click", function () {
    if (document.querySelector('input[name="capital"]:checked') || document.getElementById("openAnswer").value.trim() !== '') {
        checkAnswer();
    } else {
        alert("Kies een optie of vul een antwoord in voor open vragen.");
    }
});

// Eventlistener voor doorgaan naar de volgende vraag
document.getElementById("nextQuestion").addEventListener("click", nextQuestionOrEndQuiz);



// Eventlistener voor doorgaan naar de volgende vraag
document.getElementById("nextQuestion").addEventListener("click", nextQuestionOrEndQuiz);


// Functie om naar de volgende vraag te gaan of de quiz te beëindigen
function nextQuestionOrEndQuiz() {
    currentQuestion++;
    if (currentQuestion < totalQuestions) {
        displayQuestion();
        displayQuestionNumber();
        document.getElementById("nextQuestion").style.display = "none";
        document.getElementById("feedback").textContent = "";
        document.getElementById("submitAnswer").style.display = "inline"; // Toon de knop voor het indienen van antwoorden
    } else {
        // Beëindig de quiz en ga naar de eindpagina
        window.location.href = "info.html?quiz=be&score=" + totalCorrect;
    }
}



// Eventlistener voor doorgaan naar de volgende vraag
document.getElementById("nextQuestion").addEventListener("click", nextQuestionOrEndQuiz);

// Start de quiz door de eerste vraag weer te geven
displayQuestion();
displayQuestionNumber(); // Call displayQuestionNumber() at the start of the quiz

