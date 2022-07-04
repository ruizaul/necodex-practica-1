import axios from "axios";

export const getHorario = async (state) => {
  const peticion = await axios.get(
    "https://back-practica-necodex.herokuapp.com/api/horarios/"
  );

  state(peticion.data.horarios, []);
};
