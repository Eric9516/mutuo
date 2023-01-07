import React from "react";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Cotizador from "../components/Cotizador";
import PorqueElegirnos from "../components/PorqueElegirnos";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <AboutUs />
            <PorqueElegirnos />
            <Cotizador />
            <ContactUs />
            <Footer />
        </>
    );
};

export default Home;
