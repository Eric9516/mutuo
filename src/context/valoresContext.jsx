import React, { useState } from "react";

export const ValoresContext = React.createContext();

const ValoresProvider = ({ children }) => {
    const [monto, setMonto] = useState("");
    const [cuota, setCuota] = useState("");

    return <ValoresContext.Provider value={{ monto, setMonto, cuota, setCuota }}>{children}</ValoresContext.Provider>;
};

export default ValoresProvider;
