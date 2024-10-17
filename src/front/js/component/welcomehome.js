import React, { useContext } from "react";
import { Context } from "../store/appContext";
import background from "../../img/all.jpg";
import "../../styles/home.css";

export const WelcomeHome = () => {
    return (
        <div className="text-center mb-2" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(${background})`,
            backgroundSize: "cover", // Ajusta para cubrir el área completa
            backgroundPosition: "center", // Centra la imagen
            backgroundRepeat: "no-repeat", // Evita que la imagen se repita

            height: "35vh", // Ajusta el tamaño del componente
            width: "100%", // Asegura que ocupe todo el ancho
        }}>
            <div className="text-center text-white pt-5">
                <h1 className=""> Todo en un solo lugar! La guía más completa para películas, series de TV, libros y juegos</h1>
                <p>
                    Descubre todo sobre tus favoritos. Y si no sabes cual es con tan solo unas preguntas lo encontramos
                </p>
                <button type="button" className="btn btn-dark border-dark btn-lg m-3" >Populares</button>
                <button type="button" className="btn btn-dark border-dark btn-lg">Test</button>
            </div>
        </div>
    );
};
