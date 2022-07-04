import axios from "axios";

export const getDesactivar = async (value, status) => {
  const stat = status === "activo" ? "inactivo" : "activo";

  await axios
    .put(
      `https://back-practica-necodex.herokuapp.com/api/practicantes/${value}`,
      {
        status: stat,
      }
    )
    .then((response) => {
      return console.log(response.data.practicante.status);
    });
};
