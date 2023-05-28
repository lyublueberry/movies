import axios from 'axios';

export default async function getApiData(apiUrl, version, section, method, params) {
    try {
      const response = await axios.get(`${apiUrl}/v${version}/${section}/${method}${params}`, {
        headers: {
          'accept': 'application/json',
          'X-API-KEY': 'c84ddf80-564d-467a-b72a-00b258112d90' 
        }
      });
      const data = response.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  }