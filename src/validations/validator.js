export const montoPrestamo = (value) => {
    return value >= 5000 && value <= 100000;
};

export const cantidadCuotas = (value) => {
    return value >= 0 && value <= 12;
};
