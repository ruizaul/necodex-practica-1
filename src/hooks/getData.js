import axios from "axios";

export const getData = async (state) => {
  const peticion = await axios.get(
    "https://back-practica-necodex.herokuapp.com/api/practicantes"
  );

  state(peticion.data.practicantes, []);
};
