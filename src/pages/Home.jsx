import React from "react";
import { useNavigate } from "react-router-dom";
import { CreateTable } from "../components/CreateTable";

export const Home = () => {
  let navigate = useNavigate();

  return (
    <>
      {/* Contenedor de todo lo que despliega la pagina */}
      <div className="container">
        {/* Header de la pagina */}
        <div className="cont ttle">
          <span className="gre">{"<N"}</span>
          <span className="whi">{"ecodex  -->"}</span>

          <span className="righty">
            {" Catálogo de practicantes  "}
            <span className="gre2">{"/>"}</span>
          </span>
        </div>

        {/* Boton Crear practicante */}
        <div
          className="relative flex ml-auto my-auto items-center cursor-pointer w-48 py-3 pl-4 pr-2 overflow-hidden font-semibold text-[#1e847f] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
          title="Agregar Practicante"
          onClick={() => {
            navigate("/agregar");
          }}
        >
          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#1e847f] group-hover:h-full"></span>
          <span className="absolute right-0 pr-2 duration-200 ease-out group-hover:translate-x-12">
            <svg
              className="w-5 h-5 text-[#1e847f]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className=" absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg
              className="w-5 h-5 text-gray-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
            Crear Practicante
          </span>
        </div>
        {/* Mostrar tabla */}
        <div className="cont table">
          <CreateTable></CreateTable>
        </div>
        {/* Footer de la pagina */}
        <div className="footer">
          {"© 2022 Saul Fimbres - Roberto Amaya. All Rights Reserved."}
        </div>
      </div>
    </>
  );
};
