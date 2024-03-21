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
    if (nextQuestionElement) {
        nextQuestionElement.style.display = "block";
    } else {
        showResult();
    }
}

function showResult() {
    updateScore(totalCorrect);
    document.getElementById("result").textContent = "Je hebt " + totalCorrect + " van de 15 vragen goed beantwoord.";
}

function updateScore(score) {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = score;

    const scoreBox = document.querySelector(".score-box");
    const percent = (score / 15) * 100;
    scoreBox.style.background = `linear-gradient(to right, red 0%, green ${percent}%, red ${percent}%, red 100%)`;
}

// document.getElementById("question1").style.display = "block";

const checkCurrentQuiz = () => {
    const queryString = window.location.search;
    if (queryString === "?quiz=nl") {
        // Show Belgium and France photos
        document.getElementById('quiz-link-1').innerHTML = `<a href="www.google.com">
        <img src="../media/Belgium.jpg" alt="Quiz 1">
        <p>Quiz 1</p>
         </a>`
        document.getElementById('quiz-link-2').innerHTML = `<a href="www.google.com">
        <img src="../media/France.jpg" alt="Quiz 1">
         <p>Quiz 2</p>
         </a>`
        document.getElementById('quiz-link-3').innerHTML = `<a href="www.google.com">
         <img src="../media/Germany.jpg" alt="Quiz 1">
         <p>Quiz 3</p>
        </a>`
        document.getElementById('info').innerHTML = `The Netherlands, often referred to as Holland, is renowned for its innovative spirit, vibrant cities, and picturesque landscapes. Amsterdam, the capital city, captivates with its historic canal rings, world-class museums, and liberal atmosphere. From exploring the Anne Frank House to cruising along the city's waterways, Amsterdam offers a wealth of experiences for visitors.

        Beyond Amsterdam, the Netherlands unfolds into a patchwork of tulip fields, windmills, and quaint villages. The Keukenhof Gardens burst into a riot of color each spring, while the Kinderdijk windmills stand as a testament to the country's mastery of water management and engineering.
        
        The Dutch are pioneers in various fields, from art and design to technology and sustainable living. Rembrandt and Van Gogh are celebrated Dutch artists whose works continue to inspire generations, while Dutch designers like Piet Mondrian and Gerrit Rietveld have left an indelible mark on the world of modern design. In terms of technology and innovation, the Netherlands leads the way with advancements in renewable energy, urban planning, and agriculture.`
        
    } else if (queryString === "?quiz=be") {
        // Show Netherlands, France, and Germany photos
        document.getElementById('quiz-link-1').innerHTML = `<a href="www.google.com">
        <img src="../media/Netherlands.jpg" alt="Quiz 1">
        <p>Quiz 1</p>
         </a>`
        document.getElementById('quiz-link-2').innerHTML = `<a href="www.google.com">
        <img src="../media/France.jpg" alt="Quiz 1">
         <p>Quiz 2</p>
         </a>`
        document.getElementById('quiz-link-3').innerHTML = `<a href="www.google.com">
         <img src="../media/Germany.jpg" alt="Quiz 1">
         <p>Quiz 3</p>
        </a>`
        document.getElementById('info').innerHTML =`Nestled between France, Germany, and the Netherlands, Belgium offers a unique blend of cultures, languages, and traditions. Its capital, Brussels, serves as the administrative center of the European Union, embodying Belgium's role as a crossroads of international diplomacy and cooperation.

        Beyond Brussels, Belgium's landscape is dotted with medieval towns, picturesque countryside, and architectural wonders. Cities like Bruges and Ghent transport visitors back in time with their cobblestone streets, historic churches, and enchanting canals. Antwerp, known as the diamond capital of the world, dazzles with its vibrant fashion scene and thriving port.
        
        Belgium's culinary heritage is equally impressive, with specialties like Belgian chocolates, waffles, and beers enjoyed around the globe. From indulging in pralines at renowned chocolatiers to savoring a Trappist beer brewed in centuries-old monasteries, Belgium offers a gastronomic journey like no other.`
    } else if (queryString === "?quiz=du") {
        // Show Netherlands, Belgium, and farnce photos
        document.getElementById('quiz-link-1').innerHTML = `<a href="www.google.com">
        <img src="../media/Belgium.jpg" alt="Quiz 1">
        <p>Quiz 1</p>
         </a>`
        document.getElementById('quiz-link-2').innerHTML = `<a href="www.google.com">
        <img src="../media/France.jpg" alt="Quiz 1">
         <p>Quiz 2</p>
         </a>`
        document.getElementById('quiz-link-3').innerHTML = `<a href="www.google.com">
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
        document.getElementById('quiz-link-1').innerHTML = `<a href="www.google.com">
        <img src="../media/Belgium.jpg" alt="Quiz 1">
        <p>Quiz 1</p>
         </a>`
        document.getElementById('quiz-link-2').innerHTML = `<a href="www.google.com">
        <img src="../media/Netherlands.jpg" alt="Quiz 1">
         <p>Quiz 2</p>
         </a>`
        document.getElementById('quiz-link-3').innerHTML = `<a href="www.google.com">
         <img src="../media/Germany.jpg" alt="Quiz 1">
         <p>Quiz 3</p>
        </a>`
        document.getElementById('info').innerHTML =`France, often hailed as the epitome of sophistication and elegance, captivates with its timeless charm and cultural richness. Paris, the capital city, stands as a symbol of romance, art, and gastronomy. From the iconic Eiffel Tower to the masterpieces housed in the Louvre Museum, Paris offers a glimpse into France's illustrious past and vibrant present.

        Beyond Paris, France's landscape unfolds into a diverse tapestry of regions, each with its own distinct character. The sun-drenched vineyards of Bordeaux produce some of the world's finest wines, while the lavender fields of Provence evoke a sense of tranquility and beauty. Along the French Riviera, glamorous cities like Nice and Cannes beckon with their azure waters and luxurious resorts.
        
        France's cultural influence extends far beyond its borders, encompassing art, literature, fashion, and cuisine. The works of French artists like Monet, Renoir, and Picasso adorn museum walls worldwide, while fashion houses like Chanel and Louis Vuitton set trends on the global stage. French cuisine, with its emphasis on fresh ingredients and meticulous preparation, delights epicureans with dishes ranging from coq au vin to crème brûlée.`
    }
}

document.addEventListener("DOMContentLoaded", function() {
    checkCurrentQuiz();
});