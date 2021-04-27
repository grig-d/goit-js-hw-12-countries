import articlesTmpl from './templates/articles.hbs';
import './styles.css';
import NewsApiService from './js/news-service';
////

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

// делаем экземпляр, чтобы получить объект с методами и свойствами
const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  newsApiService.query = e.currentTarget.elements.query.value; // при сабмите формы при помощи сеттера получаем значение запроса

  if (newsApiService.query.trim() === '') {
    return;
  }
  newsApiService.resetPage(); // сбрасываем номер страницы при изменении запроса
  newsApiService.fetchArticles().then(articles => {
    clearArticlesContainer();
    appendArticlesMarkup(articles);
  });
}

// для пагинации надо сохранять searchQuery
function onLoadMore() {
  newsApiService.fetchArticles().then(appendArticlesMarkup);
}

function appendArticlesMarkup(articles) {
  refs.articlesContainer.insertAdjacentHTML(
    'beforeend',
    articlesTmpl(articles),
  );
}

// при новом запросе очищаем контейнер от предыдущих статей
function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}
////
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/mobile/dist/PNotifyMobile.css';
// import '@pnotify/core/dist/Material.css';
// import 'material-design-icons/iconfont/material-icons.css';
// import { defaults, error, notice, success } from '@pnotify/core';
// defaults.styling = 'material';
// defaults.icons = 'material';
// defaults.width = '400px';
// defaults.delay = 1000;
// ////

// const messages = {
//   success: { text: 'Search completed successfully!' },
//   notice: { text: 'Please, specify your request' },
//   error: { text: 'Sorry, incorrect request' },
// };

// const refs = {
//   successBtn: document.querySelector('#success'),
//   noticeBtn: document.querySelector('#notice'),
//   errorBtn: document.querySelector('#error'),
// };

// refs.successBtn.addEventListener('click', () => success(messages.success));
// refs.noticeBtn.addEventListener('click', () => notice(messages.notice));
// refs.errorBtn.addEventListener('click', () => error(messages.error));
////

// Есть файл fetchCountries.js с дефолтным экспортом функции fetchCountries(searchQuery),
// возвращающей промис с массивом стран, результат запроса к API.
// Поиск стран
// Создай небольшое приложение поиска данных о стране по ее частичному или полному имени.
// Используй Rest Countries API (https://restcountries.eu/), а именно ендпоинт / name (https://restcountries.eu/#api-endpoints-name),
// возвращающий массив объектов стран попавших под критерий поиска.
// Достаточно чтобы приложение работало для большинства стран. Некоторые страны, такие как Sudan, могут создавать проблемы,
// поскольку название страны является частью названия другой страны, South Sudan.
// Не нужно беспокоиться об этих исключениях.
// Интерфейс очень простой. Название страны для поиска пользователь вводит в текстовое поле.
// ⚠️ ВНИМАНИЕ! HTTP-запросы на бекенд происходят не по сабмиту формы, формы нет, а при наборе имени страны в инпуте, то есть по событию input.
// Но делать HTTP-запрос при каждом нажатии клавиши нельзя, так как одновременно получится много HTTP-запросов которые будут выполняться в непредсказуемом порядке (race conditions).
// Поэтому на обработчик события необходимо применить подход debounce и делать HTTP-запрос спустя 500мс после того, как пользователь перестал вводить текст.
// Используй npm-пакет lodash.debounce. (https://www.npmjs.com/package/lodash.debounce)
// Если бекенд вернул больше чем 10 стран подошедших под критерий введенный пользователем, в интерфейсе отображается нотификация о том, что необходимо сделать запрос более специфичным.
// Для оповещений используй плагин pnotify. (https://github.com/sciactive/pnotify)
// 1 Если ввод пользователя пустой или некорректный
// 2 Когда найдена необходимая страна добавляем сообщение об успехе
// 3 Если от 2 до 10 результатов просим конкретизировать запрос
// Уточните запрос
