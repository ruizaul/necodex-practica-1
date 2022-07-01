import React, { useEffect, useState } from "react";
import { Table } from "./Table";
import { StatusPill } from "../components/TableStatusPills";
import { TableActionButtons } from "../components/TableActionButtons";
import { getData } from "../hooks/getData";

export const CreateTable = () => {
  const [practicantes, setPracticantes] = useState([]);

  const columns = [
    {
      Header: "Nombre",
      accessor: "nombre",
    },
    {
      Header: "Email",
      accessor: "correo",
    },
    {
      Header: "Estatus",
      accessor: "status",
      Cell: StatusPill,
    },
    {
      Header: "Acciones",
      accesor: "action",
      id: "action",
      Cell: <TableActionButtons></TableActionButtons>,
    },
  ];

  useEffect(() => {
    getData(setPracticantes);
  }, []);

  console.log(practicantes);

  if (practicantes.length === 0) {
    return (
      <>
        <h1 className="flex items-center justify-center -mb-10 mt-48 mx-20 font-large leading-tight text-5xl text-gray-300">
          No se ha registrado ningun practicante... 👻
        </h1>
      </>
    );
  } else {
    return (
      <>
        <div className="grid content-center ">
          <div className="rounded-lg bg-gray-100 text-gray-900 ">
            <main className="px-5 pt-5 pb-3">
              <div className="">
                <h1 className="text-xl font-semibold">
                  📌 Catalogo de practicantes
                </h1>
              </div>
              <div className="mt-8">
                <Table columns={columns} data={practicantes} />
              </div>
            </main>
          </div>
        </div>
      </>
    );
  }
};
