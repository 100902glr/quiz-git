var questions = [
    {
        question: "Wat is de bijnaam van het Nederlands nationale voetbalteam?",
        choices: [
            "Oranje Leeuwen",
            "Leeuwen",
            "Oranje Tijgers",
            "Rode Duivels"
        ],
        correctAnswer: "Oranje Leeuwen"
    },
    {
        question: "Welk Nederlands stripverhaal gaat over een jongen en zijn hond?",
        choices: [
            "Jan, Jans en de Kinderen",
            "Sjors en Sjimmie",
            "Donald Duck",
            "Tom Poes"
        ],
        correctAnswer: "Tom Poes"
    },
    {
        question: "Wat is het grootste jaarlijkse muziekfestival van Nederland?",
        choices: [
            "Coachella",
            "Glastonbury",
            "Tomorrowland",
            "Pinkpop"
        ],
        correctAnswer: "Pinkpop"
    },
    {
        question: "Welk Nederlands gerecht is een stamppot van aardappelen, boerenkool en worst?",
        choices: [
            "Erwtensoep",
            "Zuurkool",
            "Boerenkool",
            "Hutspot"
        ],
        correctAnswer: "Boerenkool"
    },
    {
        question: "Welk Nederlands stripfiguur staat bekend om zijn avonturen met zijn hond Dribbel?",
        choices: [
            "Donald Duck",
            "Sjors en Sjimmie",
            "Bassie",
            "Dribbel"
        ],
        correctAnswer: "Dribbel"
    },
    {
        question: "Naam van het Nederlands koningshuis?",
        correctAnswer: "Oranje-Nassau"
    },
    {
        question: "Wie is de huidige koning van Nederland?",
        correctAnswer: "Willem-Alexander"
    },
    {
        question: "Wat is de naam van de Nederlandse nationale luchtvaartmaatschappij?",
        correctAnswer: "KLM (Koninklijke Luchtvaart Maatschappij)"
    },
    {
        question: "Welke stad staat bekend om zijn grachten en historische gebouwen?",
        correctAnswer: "Amsterdam"
    },
    {
        question: "Hoe heet het hoogste punt in Nederland?",
        correctAnswer: "Vaalsberg"
    },
    {
        question: "Welk Nederlands stripfiguur staat bekend om zijn rode haren en blauwe broek?",
        choices: [
            "Dribbel",
            "Bassie",
            "Suske",
            "Kuifje"
        ],
        correctAnswer: "Suske"
    },
    {
        question: "Wat is de bijnaam van het beroemde Nederlands biermerk uit Heineken?",
        choices: [
            "Grolsch",
            "Amstel",
            "Hertog Jan",
            "Heineken"
        ],
        correctAnswer: "Heineken"
    },
    {
        question: "Welke Nederlandse stad staat bekend om zijn havens en scheepvaart?",
        choices: [
            "Amsterdam",
            "Utrecht",
            "Den Haag",
            "Rotterdam"
        ],
        correctAnswer: "Rotterdam"
    },
    {
        question: "Welk Nederlands stripfiguur is een avontuurlijke journalist met zijn hond Bobbie?",
        choices: [
            "Tom Poes",
            "Donald Duck",
            "Sjors en Sjimmie",
            "Kuifje"
        ],
        correctAnswer: "Kuifje"
    },
    {
        question: "Wat is Nederland vooral bekend om?",
        choices: [
            "Klompen",
            "Molens",
            "Kaas",
            "Tulpen"
        ],
        correctAnswer: "Kaas"
    },
    {
        question: "Welke rivier stroomt door Utrecht?",
        correctAnswer: "De Rijn"
    },
    {
        question: "Wat is het belangrijkste exportproduct van Nederland?",
        correctAnswer: "Bloemen"
    },
    {
        question: "Welk Nederlands stripverhaal gaat over een man die avonturen beleeft met zijn hond?",
        correctAnswer: "Sjors en Sjimmie"
    },
    {
        question: "Welk Nederlands bier staat bekend als 'het groene bier'?",
        correctAnswer: "Grolsch"
    },
    {
        question: "Welke Nederlandse stad staat bekend om zijn kaasmarkten en grachten?",
        correctAnswer: "Alkmaar"
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
        window.location.href = "info.html?quiz=nl&score=" + totalCorrect;
    }
}



// Eventlistener voor doorgaan naar de volgende vraag
document.getElementById("nextQuestion").addEventListener("click", nextQuestionOrEndQuiz);

// Start de quiz door de eerste vraag weer te geven
displayQuestion();
displayQuestionNumber(); // Call displayQuestionNumber() at the start of the quiz

