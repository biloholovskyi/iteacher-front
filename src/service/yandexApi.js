import axios from "axios";

const yandexApiUrl = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${process.env.REACT_APP_YANDEX_DICTIONARY_KEY}`;
const apiDetectUrl = `${process.env.REACT_APP_API_URL}api/translate/detect/`;
const apiSynthesizeUrl = `${process.env.REACT_APP_API_URL}api/translate/synthesize/`;
const languages = {
    "en": "en-ru",
    "ru": "ru-en"
}

class YandexApi {
    lookup = async (text) => {
        const response = await axios.post(apiDetectUrl, { text: text });
        const lang = languages[response.data.languageCode];
        if (!lang)
            return null;
        const yandex_response = await axios.get(`${yandexApiUrl}&lang=${lang}&text=${text}`);

        return this.parse_lookup(yandex_response.data, lang.substring(0, 2), lang.substring(3, 5))
    }


    synthesize = async (text, language) => {
        const response = await axios.post(apiSynthesizeUrl,
            { text: text, language: language },
            { responseType: 'blob' }
        );

        const blob = new Blob([response.data], { type: 'audio/ogg' })
        return URL.createObjectURL(blob);
    }


    parse_lookup = async (data, input_lang, translate_lang) => {
        let result = {
            input_lang: input_lang,
            translate_lang: translate_lang,
            words: [],
            translateOptions: [],
            examples: []
        }

        Object.entries(data.def).forEach(([, value]) => {
            Object.entries(value.tr).forEach(([, tr]) => {
                result.words.push({
                    input: {
                        text: value.text,
                        ts: value.ts //Yandex не возвращает транскрипцию русского
                    },

                    translate: {
                        text: tr.text,
                        ts: value.ts //Yandex не возвращает транскрипцию перевода
                    }
                });

                let means = "";
                if (tr.mean)
                    Object.entries(tr.mean).forEach(([, mean]) => {
                        means += mean.text + ", ";
                    })

                let syns = "";
                if (tr.syn)
                    Object.entries(tr.syn).forEach(([, syn]) => {
                        syns += syn.text + ", ";
                    })

                syns = syns.slice(0, -2)
                if (!syns)
                    syns = tr.text;

                if (means)
                    result.translateOptions.push({ input: means.slice(0, -2), translate: syns });


                if (tr.ex)
                    Object.entries(tr.ex).forEach(([, ex]) => {
                        result.examples.push({ input: ex.text, translate: ex.tr[0].text });
                    })
            })
        })
        return result;
    }

}

export default YandexApi;