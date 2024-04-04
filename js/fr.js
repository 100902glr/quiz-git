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

var totalQuestions = questions.length;
var currentQuestion = 0;
var totalCorrect = 0;

function displayQuestion() {
    var questionElement = document.getElementById("questionText");
    var choicesElement = document.getElementsByClassName("choices")[0];
    var openQuestionAnswer = document.getElementById("openQuestionAnswer");
    var selectedChoice = null;

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
            inputElement.type = "button";
            inputElement.className = "choiceButton"; // Nieuwe toevoeging
            inputElement.id = "option_" + index;
            inputElement.name = "capital";
            inputElement.value = choice;

            var labelElement = document.createElement("label");
            labelElement.htmlFor = "option_" + index;
            labelElement.textContent = choice;

            choiceElement.appendChild(inputElement);

            choicesElement.appendChild(choiceElement);

            // Event listener to toggle selection of choice
            inputElement.addEventListener("click", function () {
                // Verwijder eerst de 'clicked' klasse van alle knoppen
                var allButtons = document.querySelectorAll('.choiceButton');
                allButtons.forEach(function (button) {
                    button.classList.remove('clicked');
                });
            
                if (selectedChoice) {
                    selectedChoice.classList.remove('selected');
                }
                selectedChoice = inputElement;
                selectedChoice.classList.add('selected');
            
                // Voeg een klasse toe om de achtergrondkleur donkerder te maken
                selectedChoice.classList.add('clicked');
            });
        });
    } else { // Voeg inputveld toe voor open vraag
        openQuestionAnswer.style.display = "block";
    }

    // Event listener for submit button
    document.getElementById("submitAnswer").addEventListener("click", function () {
        if (selectedChoice) {
            checkAnswer(selectedChoice.value);
        } else {
            alert("Selecteer een antwoord voordat je indient.");
        }
    });
}

function checkAnswer(selectedValue) {
    var correctAnswer = questions[currentQuestion].correctAnswer;
    var feedbackElement = document.getElementById("feedback");

    if (selectedValue === correctAnswer) {
        feedbackElement.textContent = "Goed! Het juiste antwoord is: " + correctAnswer;
        feedbackElement.style.color = "green";
        totalCorrect++;
    } else {
        feedbackElement.textContent = "Fout! Het juiste antwoord is: " + correctAnswer;
        feedbackElement.style.color = "red";
    }

    // Verberg de submit button en toon de knop voor de volgende vraag
    document.getElementById("submitAnswer").style.display = "none";
    document.getElementById("nextQuestion").style.display = "inline";
}

// Eventlistener voor doorgaan naar de volgende vraag
document.getElementById("nextQuestion").addEventListener("click", function() {
    var openAnswer = document.getElementById("openAnswer");
    var nextQuestionButton = document.getElementById("nextQuestion");

    // Toon het inputveld voor open vragen
    openAnswer.style.display = "block";

    // Verberg de knop voor de volgende vraag
    nextQuestionButton.style.display = "none";

    // Ga naar de volgende vraag
    nextQuestionOrEndQuiz();
});

// Functie om naar de volgende vraag te gaan of de quiz te beëindigen
function nextQuestionOrEndQuiz() {
    currentQuestion++;
    if (currentQuestion < totalQuestions) {
        displayQuestion();
        document.getElementById("feedback").textContent = "";
        document.getElementById("submitAnswer").style.display = "inline"; // Toon de knop voor het indienen van antwoorden
    } else {
        // Beëindig de quiz en ga naar de eindpagina
        window.location.href = "end.html?quiz=fr&score=" + totalCorrect;
    }
}

// Start de quiz door de eerste vraag weer te geven
displayQuestion();
