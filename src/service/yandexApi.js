import axios from "axios";

const yandexApiUrl = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${process.env.REACT_APP_YANDEX_DICTIONARY_KEY}`;
const apiUrl = `${process.env.REACT_APP_API_URL}api/translate/detect/`;
const languages = {
    "en": "en-ru",
    "ru": "ru-en"
}

export const lookup = async (text) => {
    const response = await axios.post(apiUrl, { text: text });
    const lang = languages[response.data.languageCode];
    if (!lang)
        return null;
    const yandex_response = await axios.get(`${yandexApiUrl}&lang=${lang}&text=${text}`);
    return yandex_response.data;
}