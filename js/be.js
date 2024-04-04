var questions = [
    {
        question: "1. Wat is het favoriete snackgerecht van Belgen, bestaande uit frietjes met mayonaise?",
        choices: [
            "Mosselen met friet",
            "Stoofvlees met friet",
            "Balletjes in tomatensaus met friet",
            "Frikandel speciaal"
        ],
        correctAnswer: "Stoofvlees met friet"
    },
    {
        question: "2. Welk beroemd Belgisch stripfiguur heeft een hond genaamd Bobbie en woont in een molen?",
        choices: [
            "Suske en Wiske",
            "Kuifje",
            "Jommeke",
            "Nero"
        ],
        correctAnswer: "Kuifje"
    },
    {
        question: "3. Welk Belgisch gerecht bestaat uit mosselen gekookt in witte wijn en geserveerd met friet?",
        choices: [
            "Mosselen met friet",
            "Stoofvlees met friet",
            "Kip met friet",
            "Garnaalkroketten"
        ],
        correctAnswer: "Mosselen met friet"
    },
    {
        question: "4. Wat is de bijnaam van het beroemdste Belgische bier, dat ook wel 'het vloeibare brood' wordt genoemd?",
        choices: [
            "Leffe",
            "Chimay",
            "Duvel",
            "Westvleteren 12"
        ],
        correctAnswer: "Leffe"
    },
    {
        question: "5. Welk bekend Belgisch stripfiguur woont in een molen en heeft een vriendin genaamd Suzie?",
        choices: [
            "Suske en Wiske",
            "Kuifje",
            "Jommeke",
            "Nero"
        ],
        correctAnswer: "Suske en Wiske"
    },
    {
        question: "6. Wat is de meest voorkomende voornaam bij Belgische mannen?",
        correctAnswer: "Jan"
    },
    {
        question: "7. Wat is het favoriete onderwerp van discussie onder Belgen?",
        correctAnswer: "Het weer"
    },
    {
        question: "8. Wat is de populairste Belgische sport na voetbal?",
        correctAnswer: "Wielrennen"
    },
    {
        question: "9. Wat is het favoriete gezelschapsspel van Belgen, gespeeld met kleine pionnen en dobbelstenen?",
        correctAnswer: "Monopoly"
    },
    {
        question: "10. Wat is een typisch Belgische gewoonte tijdens het winkelen?",
        correctAnswer: "Veel handtassen dragen"
    },
    {
        question: "11. Welk Belgisch stripfiguur staat bekend om zijn blauwe huid en witte muts?",
        choices: [
            "Kuifje",
            "Suske en Wiske",
            "Smurfen",
            "Jommeke"
        ],
        correctAnswer: "Smurfen"
    },
    {
        question: "12. Wat is de bijnaam van het beroemde Belgische bier dat in een speciaal glas wordt geserveerd met een aangepaste schuimkraag?",
        choices: [
            "Duvel",
            "Chimay",
            "Leffe",
            "Westvleteren 12"
        ],
        correctAnswer: "Duvel"
    },
    {
        question: "13. Welke Belgische stad is wereldberoemd om zijn diamantindustrie?",
        choices: [
            "Antwerpen",
            "Brugge",
            "Gent",
            "Luik"
        ],
        correctAnswer: "Antwerpen"
    },
    {
        question: "14. Welk Belgisch stripfiguur is een kleine jongen die avonturen beleeft met zijn vrienden Flip de papegaai en Filiberke?",
        choices: [
            "Suske en Wiske",
            "Kuifje",
            "Jommeke",
            "Nero"
        ],
        correctAnswer: "Jommeke"
    },
    {
        question: "15. Wat is de hoofdstad van België?",
        choices: [
            "Brugge",
            "Gent",
            "Brussel",
            "Antwerpen"
        ],
        correctAnswer: "Brussel"
    },
    {
        question: "16. Welke beroemde Belgische schilder wordt geassocieerd met het fauvisme en is bekend om zijn levendige kleurgebruik?",
        correctAnswer: "René Magritte"
    },
    {
        question: "17. Wat is het nationale gerecht van België, bestaande uit gestoofd rundvlees in bier, op smaak gebracht met kruiden?",
        correctAnswer: "Stoofvlees"
    },
    {
        question: "18. Welke Belgische zangeres staat bekend om hits als 'If I Could Turn Back Time' en 'Believe'?",
        correctAnswer: "Helmut Lotti"
    },
    {
        question: "19. Welk Belgisch bier staat bekend als 'het bruine bier'?",
        correctAnswer: "Leffe"
    },
    {
        question: "20.Welke Belgische stad staat bekend om zijn middeleeuwse architectuur en jaarlijkse Gentse Feesten?",
        correctAnswer: "Gent"
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
        document.getElementById("nextQuestion").style.display = "none";
        document.getElementById("feedback").textContent = "";
        document.getElementById("submitAnswer").style.display = "inline"; // Toon de knop voor het indienen van antwoorden
    } else {
        // Beëindig de quiz en ga naar de eindpagina
        window.location.href = "end.html?quiz=be&score=" + totalCorrect;
    }
}



// Eventlistener voor doorgaan naar de volgende vraag
document.getElementById("nextQuestion").addEventListener("click", nextQuestionOrEndQuiz);

// Start de quiz door de eerste vraag weer te geven
displayQuestion();
displayQuestionNumber(); // Call displayQuestionNumber() at the start of the quiz

