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

    if (score < 5) {
        const red = 255;
        const green = Math.round((score / 5) * 255);
        scoreBox.style.backgroundColor = `rgb(${red}, ${green}, 0)`;
    } else if (score >= 5 && score < 10) {
        const red = Math.round(((10 - score) / 5) * 255);
        const green = 255;
        scoreBox.style.backgroundColor = `rgb(${red}, ${green}, 0)`;
    } else if (score == 10) {
        scoreBox.style.backgroundColor = "green";
    }
}



// document.getElementById("question1").style.display = "block";

const checkCurrentQuiz = () => {
    const queryString = window.location.search.split('&')[0];
    if (queryString === "?quiz=nl") {
        // Show Belgium and France photos
        document.getElementById('quiz-link-1').innerHTML = `<a href="../page's/belgie.html>
        <img src="../media/Belgium.jpg" alt="Quiz 1">
        <p>Quiz 1</p>
         </a>`
        document.getElementById('quiz-link-2').innerHTML = `<a href="../page's/frankrijk.html">
        <img src="../media/France.jpg" alt="Quiz 1">
         <p>Quiz 2</p>
         </a>`
        document.getElementById('quiz-link-3').innerHTML = `<a href="../page's/duitsland.html">
         <img src="../media/Germany.jpg" alt="Quiz 1">
         <p>Quiz 3</p>
        </a>`
        document.getElementById('info').innerHTML = `The Netherlands, often referred to as Holland, is renowned for its innovative spirit, vibrant cities, and picturesque landscapes. Amsterdam, the capital city, captivates with its historic canal rings, world-class museums, and liberal atmosphere. From exploring the Anne Frank House to cruising along the city's waterways, Amsterdam offers a wealth of experiences for visitors.

        Beyond Amsterdam, the Netherlands unfolds into a patchwork of tulip fields, windmills, and quaint villages. The Keukenhof Gardens burst into a riot of color each spring, while the Kinderdijk windmills stand as a testament to the country's mastery of water management and engineering.
        
        The Dutch are pioneers in various fields, from art and design to technology and sustainable living. Rembrandt and Van Gogh are celebrated Dutch artists whose works continue to inspire generations, while Dutch designers like Piet Mondrian and Gerrit Rietveld have left an indelible mark on the world of modern design. In terms of technology and innovation, the Netherlands leads the way with advancements in renewable energy, urban planning, and agriculture.`
        
    } else if (queryString === "?quiz=be") {
        // Show Netherlands, France, and Germany photos
        document.getElementById('quiz-link-1').innerHTML = `<a href="../page's/nl.html">
        <img src="../media/Netherlands.jpg" alt="Quiz 1">
        <p>Quiz 1</p>
         </a>`
        document.getElementById('quiz-link-2').innerHTML = `<a href="../page's/frankrijk.html">
        <img src="../media/France.jpg" alt="Quiz 1">
         <p>Quiz 2</p>
         </a>`
        document.getElementById('quiz-link-3').innerHTML = `<a href="../page's/duitsland.html">
         <img src="../media/Germany.jpg" alt="Quiz 1">
         <p>Quiz 3</p>
        </a>`
        document.getElementById('info').innerHTML =`In het land van België, waar chocolade de lucht vulde en stripfiguren avonturen beleefden, waren er tien vragen die de nieuwsgierige geesten uitdaagden.<br><br>

        Het begon met de vraag naar de hoofdstad van België, die de reizigers naar Brussel leidde. Daar ontdekten ze de stad van chocolade, Brugge genaamd.<br><br>
        
        Terwijl ze verder reisden, ontmoetten ze de iconische Kuifje, een beroemde Belgische stripfiguur. En ze bewonderden het Atomium in Brussel, een architectonisch wonder.<br><br>
        
        België was ook de thuisbasis van muzikale grootheden zoals Natalia, bekend als de 'Queen of Pop'. En ze lazen literaire meesterwerken zoals 'De Leeuw van Vlaanderen', geschreven door Hendrik Conscience.<br><br>
        
        Antwerpen stond bekend om zijn diamanten, terwijl surrealistische kunstenaars zoals René Magritte de wereld verbaasden met hun werken.<br><br>
        
        Gentenaars vierden hun bijnaam in Gent, terwijl Aalst bekend stond om zijn levendige carnavalsstoet.<br><br>
        
        En zo eindigde het verhaal van de tien vragen van België, een verhaal dat de rijke cultuur en geschiedenis van het land weerspiegelde.`
    } else if (queryString === "?quiz=du") {
        // Show Netherlands, Belgium, and farnce photos
        document.getElementById('quiz-link-1').innerHTML = `<a href="../page's/belgie.html">
        <img src="../media/Belgium.jpg" alt="Quiz 1">
        <p>Quiz 1</p>
         </a>`
        document.getElementById('quiz-link-2').innerHTML = `<a href="../page's/frankrijk.html">
        <img src="../media/France.jpg" alt="Quiz 1">
         <p>Quiz 2</p>
         </a>`
        document.getElementById('quiz-link-3').innerHTML = `<a href="../page's/nl.html">
         <img src="../media/Netherlands.jpg" alt="Quiz 1">
         <p>Quiz 3</p>
        </a>`
        document.getElementById('info').innerHTML =`Germany, situated in the heart of Europe, stands as a beacon of cultural, economic, and political influence. Boasting a rich tapestry of history, Germany's story unfolds through its ancient roots, medieval heritage, and modern achievements. Its capital, Berlin, serves as a vibrant hub of creativity, innovation, and historical significance. From the remnants of the Berlin Wall to the grandeur of the Brandenburg Gate, Berlin embodies the resilience and dynamism of the German spirit.

        Beyond Berlin, Germany's landscape captivates with its diverse beauty. The Bavarian Alps offer majestic peaks and pristine lakes, while the Rhine Valley enchants with its romantic castles and vineyard-clad hillsides. Cities like Munich, Hamburg, and Cologne showcase distinct regional cultures, from Bavarian traditions to Hanseatic charm.
        
        Germany's economic prowess is renowned worldwide, with industries ranging from automotive engineering and manufacturing to finance and technology. Leading global corporations like Volkswagen, BMW, and Siemens hail from Germany, contributing to its reputation as an economic powerhouse.
        
        Culturally, Germany is a treasure trove of artistic expression, from the classical compositions of Beethoven and Bach to the avant-garde movements of the Bauhaus. Its museums, theaters, and music festivals attract enthusiasts from around the globe, while its culinary scene tantalizes with hearty sausages, savory pretzels, and frothy beers brewed according to centuries-old traditions.`
    }
    else if (queryString === "?quiz=fr") {
        // Show Netherlands, Belgium, and Germany photos
        document.getElementById('quiz-link-1').innerHTML = `<a href="../page's/belgie.html">
        <img src="../media/Belgium.jpg" alt="Quiz 1">
        <p>Quiz 1</p>
         </a>`
        document.getElementById('quiz-link-2').innerHTML = `<a href="../page's/nl.html">
        <img src="../media/Netherlands.jpg" alt="Quiz 1">
         <p>Quiz 2</p>
         </a>`
        document.getElementById('quiz-link-3').innerHTML = `<a href="../page's/duitsland.html">
         <img src="../media/Germany.jpg" alt="Quiz 1">
         <p>Quiz 3</p>
        </a>`
        document.getElementById('info').innerHTML =`Frankrijk, officieel bekend als de Franse Republiek, is een land dat bekend staat om zijn rijke geschiedenis, cultuur en invloed op wereldwijde kunst, mode, keuken en politiek. Gelegen in West-Europa, wordt Frankrijk begrensd door België, Luxemburg, Duitsland, Zwitserland, Italië, Monaco, Spanje, Andorra en de Middellandse Zee. Het land heeft een diverse geografie, variërend van de bergketens van de Alpen en de Pyreneeën tot vlaktes en kustlijnen.

        Parijs, de hoofdstad van Frankrijk, is wereldberoemd vanwege iconische bezienswaardigheden zoals de Eiffeltoren, de Notre-Dame en het Louvre Museum. Het land heeft ook tal van andere historische steden en pittoreske dorpen, waaronder Lyon, Marseille, Nice en Straatsburg.
        
        Frankrijk staat bekend om zijn culinaire tradities, waaronder gerechten als croissants, escargots, coq au vin en boeuf bourguignon. Wijnproductie is ook een belangrijk onderdeel van de Franse cultuur, met regio's zoals Bordeaux, Bourgogne en de Champagne die wereldberoemde wijnen produceren.
        
        Politiek gezien is Frankrijk een democratische republiek met een presidentieel systeem. Het is een van de grondleggers van de Europese Unie en speelt een belangrijke rol in internationale zaken en diplomatie.
        
        Op het gebied van kunst en literatuur heeft Frankrijk een rijke erfenis, met invloedrijke figuren zoals Victor Hugo, Emile Zola, Claude Monet en Auguste Rodin. Het land herbergt ook enkele van 's werelds meest prestigieuze kunstmusea en galerieën.
        
        Economisch gezien is Frankrijk een van 's werelds grootste economieën en een belangrijke speler in sectoren als toerisme, landbouw, technologie, luchtvaart, auto-industrie en luxe goederen.
        
        Met zijn mix van geschiedenis, cultuur, natuurlijke schoonheid en gastronomie blijft Frankrijk een van de meest geliefde bestemmingen voor reizigers over de hele wereld.`
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
