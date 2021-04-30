import fetchCountries from './fetch-countries';
import renderMarkup from './render-markup';

export default function searchCountry(event) {
  const searchQuery = event.target.value.trim();
  if (searchQuery) {
      return fetchCountries(searchQuery).then(data => renderMarkup(data));
  }
}
