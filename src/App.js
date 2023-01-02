import React from "react";
import Navbar from "./components/Navbar";
import "./Styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./components/ContactUs";
import SignUp from "./pages/SignUp";
import AboutUs from "./components/AboutUs";

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
