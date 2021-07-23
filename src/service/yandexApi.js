import axios from "axios";

const yandexApiUrl = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${process.env.REACT_APP_YANDEX_DICTIONARY_KEY}`;
const apiUrl = `${process.env.REACT_APP_API_URL}api/translate/detect/`;
const languages = {
    "en": "en-ru",
    "ru": "ru-en"
}

export const lookup = (text) => {
    return axios
        .post(apiUrl, { text: text })
        .then((response) => {
            const lang = languages[response.data.languageCode];
            if (!lang)
                return;

            return axios
                .get(`${yandexApiUrl}&lang=${lang}&text=${text}`)
                .then((response) => {
                    return response.data;
                })
                .catch((err) => {
                    console.error(err);
                });
        })

}