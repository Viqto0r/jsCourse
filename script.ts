const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '')!

interface IPersonalMovieDB {
  count: number
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

for (let i = 0; i < 2; i++) {
  let lastWatchedFilm, lastWatchedFilmRating

  do {
    lastWatchedFilm = prompt('Один из просмотренных фильмов?', '')
  } while (
    !lastWatchedFilm ||
    lastWatchedFilm.length < 0 ||
    lastWatchedFilm.length > 50
  )

  do {
    lastWatchedFilmRating = prompt('На сколько оцените этот фильм?', '')
  } while (
    !lastWatchedFilmRating ||
    lastWatchedFilmRating.length < 0 ||
    lastWatchedFilmRating.length > 50
  )

  personalMovieDB.movies[lastWatchedFilm as string] = +lastWatchedFilmRating
}

if (personalMovieDB.count < 10) {
  console.log('Просмотренно довольно мало фильмов')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log('Вы классический зритель')
} else if (personalMovieDB.count > 30) {
  console.log('Вы киноман')
} else {
  console.log('Произошла ошибка')
}

console.log(personalMovieDB)
