const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const firstQuestionFilmName = prompt('Один из последних просмотренных фильмов?'); 
const firstQuestionFilmRating = +prompt('На сколько оцените его?');

const secondQuestionFilmName = prompt('Один из последних просмотренных фильмов?');
const secondQuestionFilmRating = +prompt('На сколько оцените его?');

personalMovieDB.movies[firstQuestionFilmName] = firstQuestionFilmRating;
personalMovieDB.movies[secondQuestionFilmName] = secondQuestionFilmRating;

console.log(personalMovieDB);