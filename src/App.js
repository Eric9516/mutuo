import React from "react";
import Navbar from "./components/Navbar";
import "./Styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";
import ContactUs from "./pages/ContactUs";
import SignUp from "./pages/SignUp";
import Marketing from "./pages/SignUp";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<QuienesSomos />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/marketing" element={<Marketing />} />
            </Routes>
        </Router>
    );
};

export default App;
