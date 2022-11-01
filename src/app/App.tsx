import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

function App() {
    const location = useLocation();

    return (
        <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home />} />
            <Route path="/blog" element={<Home />} />
        </Routes>
    );
}

export default App;
