import React from "react";
import { useNavigate } from "react-router-dom";

export const Detalles = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Back Button */}
      <button
        className="flex items-center justify-center mt-10 mx-10 text-white  focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center mr-2 dark:bg-[#1a1a1a] dark:hover:bg-[#1e847f]"
        type="button"
        title="Regresar"
        onClick={() => navigate("/")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Titulo */}
      <h1 className="flex items-center justify-center -mb-10 mt-2 mx-10 font-large leading-tight text-5xl text-gray-300 ">
        Detalles del practicante
      </h1>

      {/* Form */}
      <div className="flex items-center justify-center my-20 ">
        <div className="mx-auto w-full max-w-[400px] px-8 py-8 bg-slate-100 rounded-lg">
          <form action="" method="POST">
            {/* Nombres */}
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                {"📜 Nombre(s)"}
              </label>
              <label
                type="text"
                className="mb-3 block w-full text-base font-medium text-[#07074D]"
              >
                Saul
              </label>
            </div>

            {/* apellidos */}
            <div className="mb-5">
              <label
                htmlFor="surname"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                📜 Apellidos
              </label>
              <label
                type="text"
                name="surname"
                id="surname"
                placeholder="Apellidos"
                className="mb-3 block w-full text-base font-medium text-[#07074D]"
              >
                Fimbres
              </label>
            </div>

            {/* Genero */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                🚻 Género
              </label>

              <div className="flex items-center mb-4 ml-6">
                <input
                  type="radio"
                  value="male"
                  name="gender"
                  className="w-4 h-4 text-[#1e847f] bg-gray-100 border-gray-300 focus:ring-[#1e847f] dark:focus:ring-[#1e847f] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  htmlFor="default-radio-1"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-[#6B7280]"
                >
                  Hombre
                </label>
              </div>

              <div className="flex items-center mb-4 ml-6">
                <input
                  type="radio"
                  value="women"
                  name="gender"
                  className="w-4 h-4 text-[#1e847f] bg-gray-100 border-gray-300 focus:ring-[#1e847f] dark:focus:ring-[#1e847f] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  htmlFor="default-radio-1"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-[#6B7280]"
                >
                  Mujer
                </label>
              </div>
            </div>

            {/* Correo Electronico */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Correo Electrónico
              </label>
              <label
                type="email"
                className="mb-3 block w-full text-base font-medium text-[#07074D]"
              >
                hotmail.com
              </label>
            </div>

            {/* Telefono */}
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                📞 Numero de teléfono
              </label>
              <label
                type="text"
                name="phone"
                id="phone"
                placeholder="662 1231212"
                className="mb-3 block w-full text-base font-medium text-[#07074D]"
              >
                6621
              </label>
            </div>

            {/* CLABE */}
            <div className="mb-5">
              <label
                htmlFor="clabe"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                🏧 CLABE interbancaria
              </label>
              <label
                type="text"
                className="mb-3 block w-full text-base font-medium text-[#07074D]"
              >
                CLABE
              </label>
            </div>

            {/* Horario */}
            <div className="mb-5">
              <label
                htmlFor="countries"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                🕧 Preferencia de horario
              </label>
              <label
                type="text"
                value=""
                className="mb-3 block w-full text-base font-medium text-[#07074D]"
              >
                Selecciona tu horario
              </label>
            </div>

            {/* Activo */}
            <div className="mb-5">
              <label className="mb-3 block w-full text-base font-medium text-[#07074D]">
                ❓ Estado
              </label>
              <label
                type="text"
                value=""
                className="mb-3 block w-full border-black text-base font-medium text-[#07074D]"
              >
                Activo
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
