// WRITE YOUR CODE BELOW THIS LINE

let favMovies = [
    {
        title: "Ohne Limit",
        year: 2011,
        rating: 7.4,
        description: "Der erfolgreiche Geschäftsmann Carl van Loon wird auf Eddie aufmerksam und will ihn engagieren. \n" + 
        "Doch allmählich spürt Eddie Nebenwirkungen der Droge wie Gedächtnislücken und, bei verspäteter Einnahme, \n" +
        "starke Entzugserscheinungen wie Kopfschmerzen und Wahrnehmungsverlust.",
        directors: ["Neil Burger"],
        writers: ["Paul Leonard-Morgan", "Jo Willems", "Tracy Adams", "Naomi Geraghty"],
        stars: ["Bradley Cooper", "Robert De Niro", "Jake McDorman", "Abbie Cornish"],
        genres: ["Action", "Thriller", "Science-Fiction", "Psychothriller", "Kriminalthriller"]
    },
    {
        title: "Matrix",
        year: 1999,
        rating: 8.7,
        description: "Die Matrix ist eine virtuelle Welt, die von Maschinen mit künstlicher Intelligenz erschaffen wurde. \n" + 
        "Die Menschen \"leben\" in dieser Welt, die sich für sie real anfühlt. \n" +
        "In Wirklichkeit werden aber die Menschen von Maschinen gezüchtet und dienen als Energiequelle.",
        directors: ["Lana Wachowski", "Lilly Wachowski"],
        writers: ["Lana Wachowski", "Lilly Wachowski"],
        stars: ["Keanu Reeves", "Carrie Anne", "Laurence Fishburne", "Hugo Weaving", "Gloria Foster"],
        genres: ["Action", "Science Fiction", "Abenteuer", "Fantasyfilm"]
    },
    {
        title: "Der Herr der Ringe die Gefaehrten",
        year: 2001,
        rating: 8.1,
        description: "Der Film spielt auf dem Kontinent Mittelerde der fiktiven Welt Arda. \n" + 
        "Er handelt von der Geschichte des Hobbits Frodo, der in den Besitz eines mächtigen Ringes gerät. \n" +
        "Dieser Ring soll zerstört werden, um zu verhindern, dass Sauron, der Dunkle Herrscher, ihn erhält. \n" +
        "Sauron könnte damit Mittelerde unterwerfen.",
        directors: ["Peter Jackson"],
        writers: ["Peter Jackson", "Philippa Boyens", "Fren Walsh"],
        stars: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen", "Cate Blanchett", "Liv Tyler", "Orlando Bloom"],
        genres: ["Action", "Fantasyfilm", "Abenteuer"]
    },
    {
        title: "Van Helsing",
        year: 2004,
        rating: 6.0,
        description: 
        "\nDie Serie handelt von Vanessa Van Helsing, einer Nachfahrin Abraham Van Helsings," + 
        "welche beim Beginn einer Vampirapokalypse stirbt und drei Jahre darauf wieder aufersteht" +
        "und sich in einer post-apokalyptischen Welt dem Kampf gegen eine Vampir-Plage stellen muss.",
        directors: ["Stephen SOmmers"],
        writers: ["Neil LaBute", "Simon Barry", "Jonathan Lloyd Walker", "Gorrman Lee", "Karen Lam", "Shevon Singh"],
        stars: ["Hugh Jackman", "Kate Beckingsale", "Robbie Coltrane", "Richard Roxburgh", "Elena Anaya"],
        genres: ["Horrorfilm", "Action", "Abenteuer", "Drama", "Steampunk", "Thriller"]
    }
];

let averageRating = (
    favMovies[0].rating + 
    favMovies[1].rating + 
    favMovies[2].rating + 
    favMovies[3].rating) / 4;
let averageAge = (
    (2022 - favMovies[0].year) + 
    (2022 - favMovies[1].year) +
    (2022 - favMovies[2].year) +
    (2022 - favMovies[3].year)) / 4;
console.log(averageRating.toFixed(2));
console.log(averageAge);
console.log("The title of the first movie is: " + favMovies[0].title);
console.log("The release year of the second movie is: " + favMovies[1].year);
console.log("The IMDB rating of the third movie is: " + favMovies[2].rating);
console.log("The short description of the fourth movie is: " + favMovies[3].description);
console.log("The lead director of the first movie is: " + favMovies[0].directors[0]);
console.log("The lead writer of the second movie is: " + favMovies[1].writers[0]);
console.log("The lead star of the third movie is: " + favMovies[2].rating);
console.log("The main genre of the fourth movie is: " + favMovies[3].genres[0]);

// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{name: "favMovies", content: favMovies, type: "array"},
        {name: "averageRating", content: averageRating, type: "number"},
        {name: "averageAge", content: averageAge, type: "number"}
	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport};