import React from "react";
import Navbar from "./components/Navbar";
import "./Styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Home />
            </Router>
        </>
    );
};

export default App;
