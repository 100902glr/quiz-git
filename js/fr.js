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

    // Toon de huidige vraag
    questionElement.textContent = questions[currentQuestion].question;
    
    // Verwijder alle vorige keuzes en open vraag inputveld
    choicesElement.innerHTML = "";
    openQuestionAnswer.style.display = "none";

    // Voeg keuzes toe aan de DOM voor gesloten vragen
    if (questions[currentQuestion].choices) {
        questions[currentQuestion].choices.forEach(function(choice, index) {
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
            choices.forEach(function(choice) {
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
        choices.forEach(function(choice) {
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
document.getElementById("nextQuestion").addEventListener("click", function() {
    var openAnswer = document.getElementById("openAnswer");
    var nextQuestionButton = document.getElementById("nextQuestion");

    // Toon het inputveld voor open vragen
    openAnswer.style.display = "block";

    // Verberg de knop voor de volgende vraag
    nextQuestionButton.style.display = "none";
});

// Eventlistener voor het controleren van antwoorden
document.getElementById("submitAnswer").addEventListener("click", function() {
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
        document.getElementById("nextQuestion").style.display = "none";
        document.getElementById("feedback").textContent = "";
        document.getElementById("submitAnswer").style.display = "inline"; // Toon de knop voor het indienen van antwoorden
    } else {
        // Beëindig de quiz en ga naar de eindpagina
        window.location.href = "end.html?quiz=fr&score=" + totalCorrect;
    }
}



// Eventlistener voor doorgaan naar de volgende vraag
document.getElementById("nextQuestion").addEventListener("click", nextQuestionOrEndQuiz);

// Start de quiz door de eerste vraag weer te geven
displayQuestion();