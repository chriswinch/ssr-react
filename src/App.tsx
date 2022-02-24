import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

const App  = () => {
    const [introText, setIntroText] = useState('Hello From Server');

    useEffect(() => {
        setIntroText('Hello From Client!!');
    }, []);

    return (
        <Routes>
            <Route path="/" element={<h1>{introText}</h1>} />
        </Routes>
    )
}

export default App;
