"use strict";
let numberOfFilms, filmName, filmRating, genreName;

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

rememberMyFilms(2);

detectPersonalLevel();

showMyDB(personalMovieDB.privat);

writeYourGenres();


function start() {
    do {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    } while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));
}


function rememberMyFilms(quantityQuestions) {
    for (let i = 0; i < quantityQuestions; i++) {
        do {
            filmName = prompt('Один из последних просмотренных фильмов?').trim();
        } while (filmName == '' || filmName == null || filmName.length > 50);
        
        do {
            filmRating = prompt('На сколько оцените его?');
        } while (filmRating == '' || filmRating == null);
        personalMovieDB.movies[filmName] = filmRating;
    }
}


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}


function showMyDB(hiden) {
    (!hiden) ? console.log(personalMovieDB) : null;
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`).trim());
    }
}
