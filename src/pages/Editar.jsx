import React from "react";
import { useNavigate } from "react-router-dom";

export const Editar = () => {
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
      <h1 className="flex items-center justify-center -mb-10 mt-2 font-large leading-tight text-5xl text-gray-300 ">
        Editar practicante
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
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nombre(s)"
                className="w-full rounded-md border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            {/* apellidos */}
            <div className="mb-5">
              <label
                htmlFor="surname"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                📜 Apellidos
              </label>
              <input
                type="text"
                name="surname"
                id="surname"
                placeholder="Apellidos"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
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
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Ejemplo@dominio.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            {/* Telefono */}
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                📞 Numero de teléfono
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="662 1231212"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            {/* CLABE */}
            <div className="mb-5">
              <label
                htmlFor="clabe"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                🏧 CLABE interbancaria
              </label>
              <input
                type="text"
                name="clabe"
                id="clabe"
                placeholder="0123456789..."
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            {/* Horario */}
            <div className="mb-5">
              <label
                htmlFor="countries"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                🕧 Preferencia de horario
              </label>
              <select
                id="schedule"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6A64F1] focus:border-[#6A64F1] block w-full p-2.5 dark:bg-gray-200 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option defaultValue>Selecciona tu horario</option>
                <option value="am">9am - 5pm</option>
                <option value="pm">3pm - 11pm</option>
              </select>
            </div>

            {/* Submit Button*/}
            <div className="mt-8 mx-24">
              <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                Modificar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
