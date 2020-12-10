/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания
let numberOfFilms;

function start() {
    while ((!numberOfFilms || isNaN(numberOfFilms)) && numberOfFilms !== 0) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
    // personalMovieDB.count = numberOfFilms;
}

function enterMyMovies() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        if (!a || a.length > 50 || b == null || b == '') {
            alert('Неверные данные. Попробуйте снова');
            i--;
        } else {
            personalMovieDB.movies[a] = b;
        }
    }
}

function alertMyLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`, ``);
        personalMovieDB.genres.push(genre);
    }
}

start();
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
enterMyMovies();
alertMyLevel();
writeYourGenres();
showMyDB();