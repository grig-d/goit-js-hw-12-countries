import countryTemplate from '../templates/country.hbs';
import refs from './refs';
import notify from './notifications';

export default function renderMarkup(value) {
  if (value.length === 1) {
    console.log(...value);
    const markup = countryTemplate(...value);
    refs.outputContainer.innerHTML = '';
      refs.outputContainer.insertAdjacentHTML('beforeend', markup);
      notify('success');
      refs.searchForm.value = '';
  }
}
