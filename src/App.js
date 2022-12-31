import React from "react";
import Navbar from "./components/Navbar";
import "./Styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import SignUp from "./pages/SignUp";
import AboutUs from "./pages/AboutUs";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
        </Router>
    );
};

export default App;
