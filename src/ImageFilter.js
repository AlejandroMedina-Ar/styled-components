import React from "react";
import alimentacion from "./assets/images/alimentacion.svg"
import salud from "./assets/images/salud.svg"
import utilidades from "./assets/images/utilidades.svg"
import transporte from "./assets/images/transporte.svg"
import otros from "./assets/images/otros.svg"
import { Icono, IconoTema } from "./Components/UI/Ui_Elements"


export default (type) => {
    const Images = {
        Restaurante: <IconoTema src={alimentacion} alt="Restaurante" />,
        Salud: <IconoTema src={salud} alt="Salud" />,
        Utilidades: <IconoTema src={utilidades} alt="Utilidades" />,
        Transporte: <IconoTema src={transporte} alt="Transporte" />,
        default: <IconoTema src={otros} alt="Otros" />,
    };

   return Images[type] || Images["default"];
};