import countryTemplate from '../templates/country.hbs';
import listTemplate from '../templates/search-list.hbs';
import refs from './refs';
import notify from './notifications';

export default function renderMarkup(value) {
  if (value.length === 1) {
    const markup = countryTemplate(...value);
    refs.outputContainer.innerHTML = '';
    refs.outputContainer.insertAdjacentHTML('beforeend', markup);
    notify('success');
    refs.searchForm.value = '';
    return;
  }

  if (value.length >= 2 && value.length <= 10) {
    const markup = listTemplate(value);
    refs.outputContainer.innerHTML = '';
    refs.outputContainer.insertAdjacentHTML('beforeend', markup);
    notify('specify');
    return;
  }

  if (value.length > 10) {
    refs.outputContainer.innerHTML = '';
    notify('notice');
    return;
  }

  refs.outputContainer.innerHTML = '';
  notify('error');
}
