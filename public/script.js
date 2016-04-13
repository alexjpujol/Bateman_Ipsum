var quotes = ["“...there is an idea of a Patrick Bateman, some kind of abstraction, but there is no real me, only an entity, something illusory, and though I can hide my cold gaze and you can shake my hand and feel flesh gripping yours and maybe you can even sense our lifestyles are probably comparable: I simply am not there.”", "“All it comes down to is this: I feel like shit but look great.”", "“I had all the characteristics of a human being—flesh, blood, skin, hair—but my depersonalization was so intense, had gone so deep, that my normal ability to feel compassion had been eradicated, the victim of a slow, purposeful erasure. I was simply imitating reality, a rough resemblance of a human being, with only a dim corner of my mind functioning”"]

var displayQuote = document.getElementById("quote").textContent;
             
             
$(document).ready(function() {
    $("#generate").on("click", function() {
        $("#quote").fadeOut(500);
        var index = (Math.floor(Math.random() * quotes.length));
        displayQuote = quotes[index];
        $("#quote").fadeIn(800)
    })
})