const numberOfFilms = prompt('Сколько фильмов вы посмотрели?', '')

interface IPersonalMovieDB {
  count: string | null
  movies: { [key: string]: any }
  actors: Object
  genres: string[]
  privat: boolean
}

const personalMovieDB: IPersonalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}

const lastWatchedFilm1 = prompt('Один из просмотренных фильмов?', '')
const lastWatchedFilmRating1 = prompt('На сколько оцените этот фильм?', '')
const lastWatchedFilm2 = prompt('Один из просмотренных фильмов?', '')
const lastWatchedFilmRating2 = prompt('На сколько оцените этот фильм?', '')
personalMovieDB.movies[lastWatchedFilm1 as string] = lastWatchedFilmRating1
personalMovieDB.movies[lastWatchedFilm2 as string] = lastWatchedFilmRating2

console.log(personalMovieDB)
