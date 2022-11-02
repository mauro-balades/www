import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { useLocation } from "react-router-dom";
import Blog from "./components/Blog";
import { AnimatePresence } from "framer-motion"

function App() {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/projects" element={<Home />} />
            </Routes>
        </AnimatePresence>
    );
}

export default App;
