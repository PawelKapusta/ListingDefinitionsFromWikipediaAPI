import React, {useState, useEffect} from 'react';
import axios from 'axios';
const Convert = ({language, text}) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);
    const api_key = process.env.REACT_APP_API_KEY;
    useEffect(() =>
    {
        const timerId = setTimeout(()=> {
            setDebouncedText(text);
        },500);
        return () => {
            clearTimeout(timerId);
        }
    },[text])
    useEffect( () => {
        const doTranslations = async () => {
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {},{
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: api_key
                }
            })
            setTranslated(data.data.translations[0].translatedText);
        };
        doTranslations();

    },[language,debouncedText])
    return(
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
}

export default Convert;