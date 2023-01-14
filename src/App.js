import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Whatsapp from "./components/Whatsapp";

const App = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Whatsapp />
        </>
    );
};

export default App;
