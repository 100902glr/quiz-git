let currentQuestion = 1;
let totalCorrect = 0;

function checkAnswer(isCorrect) {
    if (isCorrect) {
        document.getElementById("question" + currentQuestion).classList.add("correct");
        totalCorrect++;
    } else {
        document.getElementById("question" + currentQuestion).classList.add("incorrect");
    }
}

function nextQuestion() {
    const currentQuestionElement = document.getElementById("question" + currentQuestion);
    currentQuestionElement.style.display = "none";
    currentQuestion++;
    const nextQuestionElement = document.getElementById("question" + currentQuestion);
   
        nextQuestionElement.style.display = "block";
   
}


function updateScore(score) {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = score;

    const scoreBox = document.querySelector(".score-box");

    if (score < 10) {
        scoreBox.style.backgroundColor = "red";
    } else if (score >= 10 && score < 15) {
        scoreBox.style.backgroundColor = "orange";
    } else {
        scoreBox.style.backgroundColor = "green";
    }
}





// document.getElementById("question1").style.display = "block";

const checkCurrentQuiz = () => {
    const queryString = window.location.search.split('&')[0];
    if (queryString === "?quiz=nl") {
        // Show Belgium and France photos
        document.getElementById('quiz-link-1').innerHTML = `<a href="../page's/belgie.html" target="_blank">
        <img src="../media/Belgium.jpg" alt="Quiz 1">
        <p>Quiz 1</p>
         </a>`;

        document.getElementById('quiz-link-2').innerHTML = `<a href="../page's/frankrijk.html" target="_blank"">
        <img src="../media/France.jpg" alt="Quiz 1">
         <p>Quiz 2</p>
         </a>`
        document.getElementById('quiz-link-3').innerHTML = `<a href="../page's/duitsland.html" target="_blank"">
         <img src="../media/Germany.jpg" alt="Quiz 1">
         <p>Quiz 3</p>
        </a>`
        document.getElementById('info').innerHTML = `Nederland, ook wel bekend als Holland, staat bekend om zijn innovatieve geest, levendige steden en pittoreske landschappen.<br><br>
         Amsterdam, de hoofdstad, trekt aan met zijn historische grachten, topmusea en liberale sfeer.<br><br>

          Van het verkennen van het Anne Frank Huis tot het varen over de grachten, Amsterdam biedt veel ervaringen voor bezoekers.<br><br>

        Verder dan Amsterdam is Nederland een lappendeken van tulpenvelden, windmolens en schilderachtige dorpen.<br><br>
         De Keukenhof tuinen komen elk voorjaar tot leven met kleur, terwijl de Kinderdijk windmolens getuigen
         
          van het Nederlandse meesterschap in waterbeheer en techniek.<br><br>


        Op cultureel gebied zijn de Nederlanders pioniers in kunst, design en technologie.<br><br>
        Beroemde Nederlandse kunstenaars zoals Rembrandt en Van Gogh blijven generaties inspireren.<br><br>
        Nederlandse ontwerpers zoals Piet Mondriaan en Gerrit Rietveld hebben een blijvende invloed gehad op de moderne designwereld.<br><br>

        In technologie en innovatie loopt Nederland voorop met vooruitgang in duurzame energie, stadsplanning en landbouw.`
        
    } else if (queryString === "?quiz=be") {
        // Show Netherlands, France, and Germany photos
        document.getElementById('quiz-link-1').innerHTML = `<a href="../page's/nederland.html" target="_blank">
        <img src="../media/Netherlands.jpg" alt="Quiz 1">
        <p>Quiz 1</p>
         </a>`
        document.getElementById('quiz-link-2').innerHTML = `<a href="../page's/frankrijk.html" target="_blank">
        <img src="../media/France.jpg" alt="Quiz 1">
         <p>Quiz 2</p>
         </a>`
        document.getElementById('quiz-link-3').innerHTML = `<a href="../page's/duitsland.html" target="_blank">
         <img src="../media/Germany.jpg" alt="Quiz 1">
         <p>Quiz 3</p>
        </a>`
        document.getElementById('info').innerHTML =`In het land van België, waar chocolade de lucht vulde en stripfiguren avonturen beleefden, waren er tien vragen die de nieuwsgierige
         geesten uitdaagden.<br><br>

        Het begon met de vraag naar de hoofdstad van België, die de reizigers naar Brussel leidde. Daar ontdekten ze de stad van chocolade, Brugge genaamd.<br><br>
        
        Terwijl ze verder reisden, ontmoetten ze de iconische Kuifje, een beroemde Belgische stripfiguur. En ze bewonderden het Atomium in Brussel, een architectonisch wonder.<br><br>
        
        België was ook de thuisbasis van muzikale grootheden zoals Natalia, bekend als de 'Queen of Pop'. En ze lazen literaire meesterwerken zoals 'De Leeuw van Vlaanderen', 
        geschreven door Hendrik Conscience.<br><br>
        
        Antwerpen stond bekend om zijn diamanten, terwijl surrealistische kunstenaars zoals René Magritte de wereld verbaasden met hun werken.<br><br>
        
        Gentenaars vierden hun bijnaam in Gent, terwijl Aalst bekend stond om zijn levendige carnavalsstoet.<br><br>
        
        En zo eindigde het verhaal van de tien vragen van België, een verhaal dat de rijke cultuur en geschiedenis van het land weerspiegelde.`

    } else if (queryString === "?quiz=du") {
        // Show Netherlands, Belgium, and farnce photos
        document.getElementById('quiz-link-1').innerHTML = `<a href="../page's/belgie.html" target="_blank">
        <img src="../media/Belgium.jpg" alt="Quiz 1">
        <p>Quiz 1</p>
         </a>`
        document.getElementById('quiz-link-2').innerHTML = `<a href="../page's/frankrijk.html" target="_blank">
        <img src="../media/France.jpg" alt="Quiz 1">
         <p>Quiz 2</p>
         </a>`
        document.getElementById('quiz-link-3').innerHTML = `<a href="../page's/nederland.html" target="_blank">
         <img src="../media/Netherlands.jpg" alt="Quiz 1">
         <p>Quiz 3</p>
        </a>`
        document.getElementById('info').innerHTML =`Duitsland, gelegen in het hart van Europa, is een land met een rijke culturele, economische en politieke geschiedenis.<br><br>
         De hoofdstad Berlijn is een levendige stad die zowel moderniteit als historische betekenis belichaamt,
          met iconische bezienswaardigheden zoals de overblijfselen van de Berlijnse Muur en de imposante Brandenburger Tor.<br><br>

        Het landschap van Duitsland is divers en adembenemend.<br><br> De Beierse Alpen trekken bezoekers aan met hun majestueuze pieken en heldere meren, 

        terwijl de romantische Rijnvallei indruk maakt met zijn schilderachtige kastelen en wijngaard-geklede heuvels.<br><br>

         Steden zoals München, Hamburg en Keulen hebben elk hun eigen unieke charme en cultuur, variërend van Beierse tradities tot de levendige Hanseatische sfeer.<br><br>
        
        Op economisch gebied staat Duitsland bekend als een wereldleider, met sterke industrieën zoals auto-engineering, productie, financiën en technologie.<br><br>
         Bedrijven als Volkswagen, BMW en Siemens zijn slechts enkele voorbeelden van de vele succesvolle Duitse ondernemingen die bijdragen 
         aan de wereldwijde reputatie van het land als economische grootmacht.<br><br>
        
        Cultuur speelt ook een centrale rol in het Duitse leven.<br><br>
         Het land heeft een rijke artistieke traditie, variërend van de klassieke muziek van componisten als Beethoven en Bach tot de innovatieve ontwerpen van de Bauhaus-beweging.<br><br>
          Musea, theaters en muziekfestivals zijn overal te vinden en trekken kunstliefhebbers van over de hele wereld. <br><br>
          Op culinair gebied staat Duitsland bekend om zijn traditionele gerechten zoals worstjes, pretzels en bier, 
          die allemaal een belangrijk onderdeel zijn van de lokale cultuur.`
    }
    else if (queryString === "?quiz=fr") {
        // Show Netherlands, Belgium, and Germany photos
        document.getElementById('quiz-link-1').innerHTML = `<a href="../page's/belgie.html" target="_blank">
        <img src="../media/Belgium.jpg" alt="Quiz 1">
        <p>Quiz 1</p>
         </a>`
        document.getElementById('quiz-link-2').innerHTML = `<a href="../page's/nederland.html" target="_blank">
        <img src="../media/Netherlands.jpg" alt="Quiz 1">
         <p>Quiz 2</p>
         </a>`
        document.getElementById('quiz-link-3').innerHTML = `<a href="../page's/duitsland.html" target="_blank">
         <img src="../media/Germany.jpg" alt="Quiz 1">
         <p>Quiz 3</p>
        </a>`
        document.getElementById('info').innerHTML =`Frankrijk, officieel bekend als de Franse Republiek, is een land dat bekend staat om zijn rijke geschiedenis, 
        cultuur en invloed op wereldwijde kunst, mode, keuken en politiek.<br><br>
         Gelegen in West-Europa, wordt Frankrijk begrensd door België, Luxemburg, Duitsland,Zwitserland, Italië, Monaco, Spanje, Andorra en de Middellandse Zee.
        
         <br><br> Het land heeft een diverse geografie, variërend van de bergketens van de Alpen en de Pyreneeën tot vlaktes en kustlijnen.<br><br>

        Parijs, de hoofdstad van Frankrijk, is wereldberoemd vanwege iconische bezienswaardigheden zoals de Eiffeltoren, de Notre-Dame en het Louvre Museum.<br><br>
         Het land heeft ook tal van andere historische steden en pittoreske dorpen, waaronder Lyon, Marseille, Nice en Straatsburg.<br><br>
        
        Frankrijk staat bekend om zijn culinaire tradities, waaronder gerechten als croissants, escargots, coq au vin en boeuf bourguignon.<br><br>
         Wijnproductie is ook een belangrijk onderdeel van de Franse cultuur, met regio's zoals Bordeaux, Bourgogne en de Champagne die wereldberoemde wijnen produceren.<br><br>

        
        Politiek gezien is Frankrijk een democratische republiek met een presidentieel systeem.<br><br>
         Het is een van de grondleggers van de Europese Unie en speelt een belangrijke rol in internationale zaken en diplomatie.<br><br>
        
        Op het gebied van kunst en literatuur heeft Frankrijk een rijke erfenis, met invloedrijke figuren zoals Victor Hugo, Emile Zola, Claude Monet en Auguste Rodin.
        <br><br>
         Het land herbergt ook enkele van 's werelds meest prestigieuze kunstmusea en galerieën.<br><br>
        
        Economisch gezien is Frankrijk een van 's werelds grootste economieën en een belangrijke speler in sectoren als 
        toerisme, landbouw, technologie, luchtvaart, auto-industrie en luxe goederen.<br><br>
        
        Met zijn mix van geschiedenis, cultuur, natuurlijke schoonheid en gastronomie blijft Frankrijk een van de meest geliefde bestemmingen voor 
        reizigers over de hele wereld.`
    }
}

document.addEventListener("DOMContentLoaded", function() {
    checkCurrentQuiz();


});
document.addEventListener("DOMContentLoaded", function() {
    // Extract the score from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const score = urlParams.get('score');
    
    // Update the score
    updateScore(score);
});
