import React, { useState, useEffect } from 'react';

const App  = () => {
    const [introText, setIntroText] = useState('Hello From Server');

    useEffect(() => {
        setIntroText('Hello From Client');
    }, []);

    return (
        <h1>{introText}</h1>
    )
}

export default App;
