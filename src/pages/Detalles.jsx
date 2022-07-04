import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { classNames } from "../helpers/Utils";
import { getDesactivar } from "../fetchs/getDesactivar";
import Swal from "sweetalert2";
import moment from "moment";

export const Detalles = () => {
  const navigate = useNavigate();

  const { state } = useLocation();

  const value = state.uid;

  const status = state.status;

  const parseDate = moment(state.nacimiento).utc().format("YYYY-MM-DD");

  const data = {
    nombre: state.nombre,
    apellidos: state.apellidos,
    genero: state.genero,
    correo: state.correo,
    nacimiento: parseDate,
    telefono: state.telefono,
    clabe: state.clabe,
    horario: state.horario,
  };

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

      {/* Boton editar */}
      <div
        className="relative flex ml-auto my-auto items-center cursor-pointer w-48 -mt-10 py-3 pl-4 mb-52 pr-2 mr-60  overflow-hidden font-semibold text-[#1e847f] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
        title="Editar Practicante"
        onClick={() => {
          navigate("/editar", { state: data });
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
          Editar Practicante
        </span>
      </div>

      {/* Boton desactivar */}
      <div
        className="relative flex ml-auto my-auto items-center cursor-pointer w-48 -mt-72 py-3 pl-4 mb-52 pr-2 mr-8  overflow-hidden font-semibold text-[#1e847f] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
        title="Activar/Desactivar Practicante"
        onClick={() => {
          Swal.fire({
            title: "Estas seguro?",
            text: "Se cambiara el estado de este practicante.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#1e847f",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, cambiar estado!",
            cancelButtonText: "Cancelar",
          }).then((result) => {
            if (result.isConfirmed) {
              getDesactivar(value, status);
              Swal.fire({
                icon: "success",
                showConfirmButton: false,
                title: "Listo!",
                timer: 1200,
                text: "El estado del practicante ha cambiado",
              });
              setTimeout(() => {
                navigate("/");
              }, 1200);
            }
          });
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
          Activar/Desactivar Practicante
        </span>
      </div>

      {/* Titulo */}
      <h1 className="flex items-center justify-center -mb-10 -mt-48 mx-10 font-large leading-tight text-5xl text-gray-300 ">
        Detalles practicante
      </h1>

      {/* Form */}
      <div className="flex items-center justify-center my-20 ">
        <div className="mx-auto w-full max-w-[400px] px-8 py-8 bg-slate-100 rounded-lg">
          <form onSubmit={(e) => submit(e)}>
            {/* Nombres */}
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                {"📜 Nombre(s)"}
              </label>
              <input
                disabled
                onChange={(e) => handle(e)}
                type="text"
                id="nombre"
                value={data.nombre}
                placeholder="Nombre(s)"
                className="w-full rounded-md border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            {/* Apellidos */}
            <div className="mb-5">
              <label
                htmlFor="surname"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                📜 Apellidos
              </label>
              <input
                disabled
                onChange={(e) => handle(e)}
                type="text"
                id="apellidos"
                value={data.apellidos}
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
                  disabled
                  type="radio"
                  id="genero"
                  checked={data.genero === "H"}
                  value={data.genero}
                  name="gender"
                  onChange={(e) => handle(e)}
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
                  disabled
                  type="radio"
                  id="genero"
                  name="gender"
                  checked={data.genero === "M"}
                  value={data.genero}
                  onChange={(e) => handle(e)}
                  className="w-4 h-4 text-[#1e847f] bg-gray-100 border-gray-300 focus:ring-[#1e847f] dark:focus:ring-[#1e847f] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  htmlFor="default-radio-2"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-[#6B7280]"
                >
                  Mujer
                </label>
              </div>
            </div>

            {/* Nacimiento */}

            <div className="mb-5">
              <label
                htmlFor="datepicker"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                🍰 Fecha de nacimiento
              </label>
              <input
                disabled
                date={data.nacimiento}
                onChange={(e) => handle(e)}
                type="date"
                id="nacimiento"
                value={data.nacimiento}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
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
                disabled
                onChange={(e) => handle(e)}
                type="email"
                id="correo"
                value={data.correo}
                placeholder="Opcional"
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
                disabled
                onChange={(e) => handle(e)}
                type="number"
                id="telefono"
                value={data.telefono}
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
                disabled
                onChange={(e) => handle(e)}
                type="text"
                id="clabe"
                value={data.clabe}
                placeholder={data.clabe}
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
                disabled
                onChange={(e) => handle(e)}
                id="horario"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6A64F1] focus:border-[#6A64F1] block w-full p-2.5 dark:bg-gray-200 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option disabled>Selecciona tu horario</option>
                <option>{`${state.horario.entrada} - ${state.horario.salida} `}</option>
              </select>
            </div>

            {/* activo */}
            <div className="mb-2">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                ⚡ Activo
              </label>
              <span
                className={classNames(
                  "px-5 py-1 mx-28 uppercase leading-wide font-bold text-xs rounded-full shadow-sm",
                  state.status.startsWith("activo")
                    ? "bg-green-700 text-white"
                    : "bg-yellow-700 text-white",
                  state.status.startsWith("inactivo")
                    ? "bg-yellow-700 text-white"
                    : "bg-green-700 text-white"
                )}
              >
                {state.status}
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
