import React, { useState } from "react";

export const ValoresContext = React.createContext();

const ValoresProvider = ({ children }) => {
    const [monto, setMonto] = useState("");
    const [cuota, setCuota] = useState("");
    const [pago, setPago] = useState("");

    return (
        <ValoresContext.Provider value={{ monto, setMonto, cuota, setCuota, pago, setPago }}>
            {children}
        </ValoresContext.Provider>
    );
};

export default ValoresProvider;
