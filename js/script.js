const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = promt('Один из последних просмотренных фильмов', ''),
    b = promt('На сколько оцените его?', ''),
    c = promt('Один из последних просмотренных фильмов', ''),
    d = promt('На сколько оцените его?', '');

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;

console.log(personalMovieDb);
