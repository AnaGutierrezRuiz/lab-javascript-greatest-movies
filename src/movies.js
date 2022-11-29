//FOR SOME ITERATIONS, I HAVE 2 VERSIONS. 
//THE FIRST VERSION IS LONGER, SPLITTING THE CODE IN MULTIPLE VARIABLES, EASIER THAT WAY FOR ME TO COMPREHEND
//THE SECOND VERSION IS ME TRYING TO IMPROVE THE CODE. 
// I HOPE IT'S NOT TOO BIG OF A MESS ;-)





// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArray) {
    return moviesArray.map((movie) => movie.director); 
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(moviesArray) { 
    return moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
//FIRST VERSION
function scoresAverage(moviesArray) {
   if (!moviesArray.length) {
        return 0;
    }
    const scoresArray = moviesArray.map((movie) => movie.score);
    const filteredScoresArray = scoresArray.filter(score => typeof score === "number");
    let scoresAverage = filteredScoresArray.reduce((a, b) => a + b, 0) / scoresArray.length;
    return +scoresAverage.toFixed(2);
}

//SECOND VERSION, I COMMENTED THIS VERSION BECAUSE IT DOES NOT PASS ALL THE TESTS, BUT I WOULD LIKE TO UNDERSTAND WHAT I AM DOING WRONG. 

/* function scoresAverage(moviesArray) {
    let moviesScores = moviesArray
        .map((movie) => movie.score)
        .filter(score => score !== undefined)
        .reduce((acc, score) => acc + score, 0);
    let scoresAverage = !moviesScores.length ? 0 : +(moviesScores / moviesArray.length).toFixed(2);
    return scoresAverage;
} */

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    if (!dramaMovies.length) {
        return 0;
    }
    const dramaMoviesScores = dramaMovies.map((movie) => movie.score);
    let dramaScoresAverage = dramaMoviesScores.reduce((acc, movieScore) => acc + movieScore, 0) / dramaMovies.length;
    
    return +dramaScoresAverage.toFixed(2);
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
