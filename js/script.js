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

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const button = document.querySelector("button"), // Переменная с кнопкой "Добавить"
    promo = document.querySelectorAll(".promo__adv"), // Псевдомассив с элементами рекламы
    newFilm = document.querySelector(".adding__input"), // Переменная с ответом пользователя
    movieList = document.querySelector('.promo__interactive-list'); // Переменная со списком фильмов

let moviesInList = document.querySelectorAll(".promo__interactive-item"); // Псевдомассив со всеми элементами списка

promo.forEach(item => item.remove()); // Удаляем рекламу с сайта
document.querySelector(".promo__genre").textContent = "Драма"; // Меняем жанр фильма
document.getElementsByClassName('promo__bg')[0].style.backgroundImage = 'url("img/bg.jpg")'; // Меняем фоновое изображание фильма на другое


function sortingAnArray() { // Функция для сортировки массива с фильмами
    movieDB.movies.forEach((item) => item.toLowerCase());
    movieDB.movies.sort();
}

sortingAnArray();

function numberingTheList() {  // Функция нумерующая список
    moviesInList.forEach(function (item, i) {
        item.innerHTML = `${i + 1}. ${movieDB.movies[i]}
        <div class="delete"></div>`;
    });

}

numberingTheList();

function trimmingMovieTitles() { // Функция которая обрезает длинные названия фильмов
    movieDB.movies.forEach(function (element, index) {
        if (element.length > 21) movieDB.movies[index] = element.slice(0, 21) + "...";
    })
}

trimmingMovieTitles();

function addNewFilmInList() {
    movieDB.movies.push(newFilm.value); // Добавляем значение которое ввёл пользователь в массив всех фильмов
    sortingAnArray(); // Сортируем массив
    trimmingMovieTitles(); // Обрезаем длинные названия

    const newListItem = document.createElement('li'); // Создаём новый элемент
    newListItem.innerText = newFilm.value; // Присваиваем этому элементу значение котороё ввёл пользователь
    newListItem.className = "promo__interactive-item"; // Присваиваем этому елементу класс списка

    movieList.insertAdjacentElement('beforeend', newListItem); //Добавляем этот эллемент в конец списка

    moviesInList = document.querySelectorAll(".promo__interactive-item"); // Обновляем значение переменной со списком фильмов

    numberingTheList();
}

button.addEventListener('click', addNewFilmInList); // Делаем обработчик событий для кнопки







