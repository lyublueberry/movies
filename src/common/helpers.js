import axios from 'axios';
import { BASE_API } from '@/common/constants';

async function getApiData(version, section, method, params) {
    try {
      const response = await axios.get(`${BASE_API}/v${version}/${section}/${method}`, {
        params,
        headers: {
          'accept': 'application/json',
          'X-API-KEY': process.env.VUE_APP_KINOPOISK_API_KEY
        }
      });
      const data = response.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  }

export async function getAllFilms(type, page) {
    return getApiData('2.2', 'films', 'top', { type, page });
  }

  export async function getAllGenres() {
    return getApiData('2.2', 'films', 'filters');
  }