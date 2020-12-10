/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания
let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        while ((!personalMovieDB.count || isNaN(personalMovieDB.count)) && personalMovieDB.count !== 0) {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
        }
        personalMovieDB.count = personalMovieDB.count;
    },
    enterMyMovies: function() {
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
    },
    alertMyLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`, ``);
            if (genre == null || genre == '') {
                i--;
            } else {
                personalMovieDB.genres.push(genre);
            }
        }
        personalMovieDB.genres.forEach(function(genre, index) {
            console.log(`Любимый жанр #${index + 1} - это ${genre}`)
        });
    },
    showMyDB: function() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        personalMovieDB.privat = !personalMovieDB.privat;
    }
};
personalMovieDB.start();
personalMovieDB.enterMyMovies();
personalMovieDB.alertMyLevel();
personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();