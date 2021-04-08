import { useState } from "react";
import Button from 'react-bootstrap/Button';

const messages = {
    'en': 'Hello World!',
    'it': 'Ciao Mondo!'
}

function MyButton(props) {

    let [lang, setLang] = useState(props.lang || 'en'); // Default eng

    /*
    let text;
    if(props.lang === undefined)
        text = 'Hi!';
    else
        text = messages[props.lang];
    */

    return (
        <Button onClick={ () => {
            if (lang === 'it')
                setLang('en');
                // lang = 'en'; WROOOOOONG!
            else
                setLang('it');
        }}>
            {messages[lang]}
        </Button>
    );
}

export default MyButton ;