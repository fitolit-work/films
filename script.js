"use strict";
let numberOfFilms, filmName, filmRating;
do {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
} while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < numberOfFilms; i++) {
    do {
        filmName = prompt('Один из последних просмотренных фильмов?');
    } while (filmName == '' || filmName == null || filmName.length > 50);

    do {
        filmRating = prompt('На сколько оцените его?');
    } while (filmRating == '' || filmRating == null);
    personalMovieDB.movies[filmName] = filmRating;
}

if (personalMovieDB < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB >= 10 && personalMovieDB < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка")
}

console.log(personalMovieDB);