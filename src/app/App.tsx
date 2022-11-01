import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';

function App() {

    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/blog" element={<Home />}/>
        </Routes>
    );
}

export default App;
