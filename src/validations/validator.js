export const montoPrestamo = (value) => {
    return value >= 5000 && value <= 100000;
};

export const cantidadCuotas = (value) => {
    return value >= 0 && value <= 12;
};

export const localidad = (value) => {
    return value.trim() === "Leones" || value.trim() === "leones";
};
