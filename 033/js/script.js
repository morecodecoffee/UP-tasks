/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики
document.addEventListener('DOMContentLoaded', () => {
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
        addForm = document.querySelector('.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');;
    
    // 1) Удалить все рекламные блоки
    const deleteAdvs = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    
    // 2) "комедия" -> "драма"
    // 3) задний фон постера -> "img/bg.jpg"
    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };    
    
    // 4) movieDB.movies -> список фильмов на странице, отсортировать их по алфавиту
    // 5) Добавить нумерацию выведенных фильмов
    function createMovieList(movies, parent) {
        parent.innerHTML = '';
        movies.sort().forEach((movie, index) => {
            parent.innerHTML +=`
                <li class="promo__interactive-item">
                    ${index + 1}. ${movie}
                    <div class="delete"></div>
                </li>
            `;
        });
    }

    deleteAdvs(advs);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
    
    addForm.addEventListener('submit', (evt) => {
        evt.preventDefault();

        const newMovie = (addInput.value.length > 21) ?
            `${addInput.value.substr(0, 21)}...` : addInput.value;

        if (newMovie) {
            movieDB.movies.push(newMovie);

            createMovieList(movieDB.movies, movieList);

            if (checkbox.checked) {
                console.log('Добавляем любимый фильм'); 
            }  
        }

        evt.target.reset();
    });

    movieList.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('delete')) {
            let index = evt.target.parentElement.innerText[0] - 1;
            movieDB.movies.splice(index, 1);
            createMovieList(movieDB.movies, movieList);
        }
    });
});