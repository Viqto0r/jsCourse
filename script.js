var numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
var personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
for (var i = 0; i < 2; i++) {
    var lastWatchedFilm = void 0, lastWatchedFilmRating = void 0;
    do {
        lastWatchedFilm = prompt('Один из просмотренных фильмов?', '');
    } while (!lastWatchedFilm ||
        lastWatchedFilm.length < 0 ||
        lastWatchedFilm.length > 50);
    do {
        lastWatchedFilmRating = prompt('На сколько оцените этот фильм?', '');
    } while (!lastWatchedFilmRating ||
        lastWatchedFilmRating.length < 0 ||
        lastWatchedFilmRating.length > 50);
    personalMovieDB.movies[lastWatchedFilm] = +lastWatchedFilmRating;
}
if (personalMovieDB.count < 10) {
    console.log('Просмотренно довольно мало фильмов');
}
else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
}
else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
}
else {
    console.log('Произошла ошибка');
}
console.log(personalMovieDB);
