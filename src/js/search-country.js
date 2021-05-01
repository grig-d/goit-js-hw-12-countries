import fetchCountries from './fetchCountries';
import renderMarkup from './render-markup';
import notify from './notifications';

export default function searchCountry(event) {
  const searchQuery = event.target.value.trim();
  if (searchQuery) {
    return fetchCountries(searchQuery).then(data => renderMarkup(data));
  }
  notify('error');
}
