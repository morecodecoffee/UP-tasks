/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg".
Оно лежит в папке img. Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных
из этого JS файла. Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const advs = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list'),
    li = movieList.querySelectorAll('li');

// 1) Удалить все рекламные блоки
advs.forEach(adv => {
    adv.remove();
});

// 2) "комедия" -> "драма"
genre.textContent = 'драма';

// 3) задний фон постера -> "img/bg.jpg"
poster.style.backgroundImage = 'url("img/bg.jpg")';

// 4) movieDB.movies -> список фильмов на странице, отсортировать их по алфавиту
// 5) Добавить нумерацию выведенных фильмов
movieList.innerHTML = '';
movieDB.movies.sort().forEach((movie, index) => {
    movieList.innerHTML +=`
        <li class="promo__interactive-item">
            ${index + 1}. ${movie}
            <div class="delete"></div>
        </li>
    `;
});