import axios from "axios";

const yandexApiUrl = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${process.env.REACT_APP_YANDEX_DICTIONARY_KEY}`;
const apiDetectUrl = `${process.env.REACT_APP_API_URL}api/translate/detect/`;
const apiSynthesizeUrl = `${process.env.REACT_APP_API_URL}api/translate/synthesize/`;
const languages = {
    "en": "en-ru",
    "ru": "ru-en"
}

export const lookup = async (text) => {
    const response = await axios.post(apiDetectUrl, { text: text });
    const lang = languages[response.data.languageCode];
    if (!lang)
        return null;
    const yandex_response = await axios.get(`${yandexApiUrl}&lang=${lang}&text=${text}`);
    return { 
        input_lang: lang.substring(0,2),
        translate_lang: lang.substring(3,5),
        data: yandex_response.data
    };
}


export const synthesize = async (text, language) => {
    const response = await axios.post(apiSynthesizeUrl,
        { text: text, language: language },
        { responseType: 'blob' }
    );
    
    const blob = new Blob([response.data], { type: 'audio/ogg' })
    return URL.createObjectURL(blob);
}