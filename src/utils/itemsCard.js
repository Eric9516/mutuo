import React from "react";
import { BsFillStopwatchFill, BsFillFilePersonFill } from "react-icons/bs";
import { FaDollarSign, FaPercent } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { AiFillBank } from "react-icons/ai";
import { RxCountdownTimer } from "react-icons/rx";
import { MdWork } from "react-icons/md";

export const whyChooseUs = [
    {
        icono: <BsFillStopwatchFill size="4em" />,
        textoFront: "Solicitud simple y 100% online",
        textoBack:
            "Contactanos por whatsapp haciendo click en el logo a la derecha o completando el formulario y nos pondremos en contacto a la brevedad.",
    },
    {
        icono: <FaDollarSign size="4em" />,
        textoFront: "Acreditación inmediata",
        textoBack:
            "Si cumplis con los requisitos, en menos de 24hs estará disponible el dinero para pasar a retirar por nuestras oficinas o te lo transferimos a tu cuenta.",
    },
    {
        icono: <FaPercent size="4em" />,
        textoFront: "Las mejores tasas de interés",
        textoBack: "Las tasas mas bajas del mercado.",
    },
    {
        icono: <GoChecklist size="4em" />,
        textoFront: "Excelente atención a nuestros clientes",
        textoBack: "Nos destacamos por nuestra cordial y rápida atención.",
    },
];

export const easily = [
    {
        icono: <AiFillBank size="4em" />,
        textoFront: "Trabajo en relación de dependencia o monotriburo",
        textoBack:
            "En caso de sueldo mensual enviar el último recibo, en caso de sueldo quincenal enviar los recibos de las ultimas dos quincenas.",
    },
    {
        icono: <MdWork size="4em" />,
        textoFront: "Antigüedad mínima de un año",
        textoBack: "Antigüedad mínima de un año comprobable en recibo.",
    },
    {
        icono: <RxCountdownTimer size="4em" />,
        textoFront: "Tener buen comportamiento creditico los últimos 12 meses",
        textoBack:
            "No presentar embargos ni deudas con otras agencias financieras en los últimos 12 meses.",
    },
    {
        icono: <BsFillFilePersonFill size="4em" />,
        textoFront: "Garantía",
        textoBack: "Con recibo de sueldo y antigüedad de más de un año.",
    },
];
