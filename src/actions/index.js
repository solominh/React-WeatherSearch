import axios from 'axios';

export const SEARCH_CITY = 'SEARCH_CITY';
const API_KEY = 'b0af864f42f2fd049c98dacddd480a57';
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export function handleSearch(searchTerm) {
    const url = `${BASE_URL}&q=${searchTerm},us`;
    const request = axios.get(url);

    return {
        type: SEARCH_CITY,
        payload: request
    }
}


