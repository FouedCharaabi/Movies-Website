movies = [
    "inception",
    "Game Of Thrones",
    "Breaking Bad",
    "Kin 2018",
    "Peninsula",
    "IRON MAN 3",
    "Venom",
    "AQuaMan",
    "John Wick",
    "The Tomorrow War",
    "Peaky Blinders",
    "Chernobyl",
    "Better Call Saul",
    "See",
    "Black Miror",
    "Banshee",
    "The Karate Kid",
    "Spider-man:Into The Spider Verse",
    "The Dark Knight",
    "The Dark Tower",
    "The Revenant",
    "Extraction",
    "American Sniper",
    "Fantastic Beast",
    "Alive",
    "Annabelle",
    "Bird Box",
    "Don't Breath",
    "Army Of The Dead",
    "The Purge",
    "The Conjuring",
];
function each(coll, func) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            func(coll[i], i);
        }
    } else {
        for (var key in coll) {
            func(coll[key], key);
        }
    }
}
function filter(array, predicate) {
    var acc = [];
    each(array, function (element) {
        if (predicate(element)) {
            acc.push(element);
        }
    });
    return acc;
}
function searchh() {
    if ($("#search").val() === "John wick") {
        $("allMoviesDiv").hide();
        var x = $("<div><img src='images/m7-.jpg' /></div>");
        x.appendTo("body");
    }
}
$("#search").on("click", searchh());
