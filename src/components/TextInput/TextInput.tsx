import React, { useState } from 'react';

const TextInput = () => {
    const [text, setInputText] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };

    return (
        <div>
            <input type="text" value={text} onChange={(e) => handleChange(e)} />
            <p>Text entered: {text}</p>
        </div>
    );
};

export default TextInput;
