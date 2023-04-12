var numberOfFilms = prompt('Сколько фильмов вы посмотрели?', '');
var personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
var lastWatchedFilm1 = prompt('Один из просмотренных фильмов?', '');
var lastWatchedFilmRating1 = prompt('На сколько оцените этот фильм?', '');
var lastWatchedFilm2 = prompt('Один из просмотренных фильмов?', '');
var lastWatchedFilmRating2 = prompt('На сколько оцените этот фильм?', '');
personalMovieDB.movies[lastWatchedFilm1] = lastWatchedFilmRating1;
personalMovieDB.movies[lastWatchedFilm2] = lastWatchedFilmRating2;
console.log(personalMovieDB);
