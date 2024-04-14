var questions = [
    {
        question: "Wat is de hoofdstad van Frankrijk?",
        choices: [
            "Londen",
            "Parijs",
            "Berlijn",
            "Madrid"
        ],
        correctAnswer: "Parijs"
    },
    {
        question: "Wat is de nationale taal van Frankrijk?",
        choices: [
            "Duits",
            "Engels",
            "Spaans",
            "Frans"
        ],
        correctAnswer: "Frans"
    },
    {
        question: "Welke Franse stad staat bekend om zijn carnaval?",
        choices: [
            "Nice",
            "Lyon",
            "Marseille",
            "Toulouse"
        ],
        correctAnswer: "Nice"
    },
    {
        question: "Wie schreef 'Les Misérables'?",
        choices: [
            "Victor Hugo",
            "Alexandre Dumas",
            "Gustave Flaubert",
            "Émile Zola"
        ],
        correctAnswer: "Victor Hugo"
    },
    {
        question: "Welk Frans gerecht wordt gemaakt van rauwe vis?",
        choices: [
            "Boeuf Bourguignon",
            "Coq au Vin",
            "Quiche Lorraine",
            "Tartare"
        ],
        correctAnswer: "Tartare"
    },
    {
        question: "Wie was een beroemde Franse schilder en beeldhouwer, een van de grondleggers van het kubisme?",
        choices: [
            "Claude Monet",
            "Henri Matisse",
            "Pablo Picasso",
            "Vincent van Gogh"
        ],
        correctAnswer: "Pablo Picasso"
    },
    {
        question: "Wat is de naam van de Franse nationale luchtvaartmaatschappij?",
        correctAnswer: "Air France"
    },
    {
        question: "Welke Franse zanger is bekend om 'La vie en rose'?",
        choices: [
            "Edith Piaf",
            "Charles Aznavour",
            "Jacques Brel",
            "Serge Gainsbourg"
        ],
        correctAnswer: "Edith Piaf"
    },
    {
        question: "Welk Frans monument is een van de meest bezochte ter wereld?",
        choices: [
            "Eiffeltoren",
            "Arc de Triomphe",
            "Notre-Dame",
            "Louvre"
        ],
        correctAnswer: "Eiffeltoren"
    },
    {
        question: "Wat is de naam van de langste rivier van Frankrijk?",
        correctAnswer: "Loire"
    },
    {
        question: "Welk Frans eiland in de Middellandse Zee staat bekend om zijn lavendelvelden?",
        correctAnswer: "Corsica"
    },
    {
        question: "Welke Franse stad is bekend om zijn jaarlijkse filmfestival?",
        correctAnswer: "Cannes"
    },
    {
        question: "Wat is de naam van het bekende Franse gebakje gemaakt van bladerdeeg?",
        choices: [
            "Croissant",
            "Éclair",
            "Macaron",
            "Mille-feuille"
        ],
        correctAnswer: "Mille-feuille"
    },
    {
        question: "Welke Franse stad staat bekend om zijn gotische kathedraal?",
        correctAnswer: "Chartres"
    },
    {
        question: "Wat is de naam van de Franse nationale feestdag?",
        correctAnswer: "Quatorze Juillet"
    },
    {
        question: "Welke Franse schrijver schreef 'De Vreemdeling'?",
        correctAnswer: "Albert Camus"
    },
    {
        question: "Wat is het bekendste wijngebied in Frankrijk?",
        correctAnswer: "Bordeaux"
    },
    {
        question: "Welke Franse koning bouwde het Paleis van Versailles?",
        correctAnswer: "Lodewijk XIV"
    },
    {
        question: "Wat is de bijnaam van de inwoners van Marseille?",
        correctAnswer: "Marseillais"
    },
    {
        question: "Welk Frans kasteel is gelegen in de Loire-vallei en staat op de UNESCO Werelderfgoedlijst?",
        correctAnswer: "Château de Chambord"
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
        window.location.href = "info.html?quiz=fr&score=" + totalCorrect;
    }
}



// Eventlistener voor doorgaan naar de volgende vraag
document.getElementById("nextQuestion").addEventListener("click", nextQuestionOrEndQuiz);

// Start de quiz door de eerste vraag weer te geven
displayQuestion();
displayQuestionNumber(); // Call displayQuestionNumber() at the start of the quiz

