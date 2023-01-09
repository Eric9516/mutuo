import React from "react";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Cotizador from "../components/Cotizador";
import PorqueElegirnos from "../components/PorqueElegirnos";
import Footer from "../components/Footer";
import ValoresProvider from "../context/valoresContext.jsx";

const Home = () => {
    return (
        <>
            <AboutUs />
            <PorqueElegirnos />
            <ValoresProvider>
                <Cotizador />
                <ContactUs />
            </ValoresProvider>
            <Footer />
        </>
    );
};

export default Home;
