import axios from "axios";

export const getDesactivar = async (value, status, getData) => {
  const stat = status === "activo" ? "inactivo" : "activo";

  await axios
    .put(
      `https://back-practica-necodex.herokuapp.com/api/practicantes/${value}`,
      {
        status: stat,
      }
    )
    .then(() => {
      return getData();
    });
};
