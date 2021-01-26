import axios from 'axios';

const GetStates = async () => {
  const { data } = await axios
    .get(`${process.env.STATES_URL}`);

  const states = data.map((state) => ({
    uf: `${state.sigla}`,
    nome: `${state.nome}`,
  }));

  return states;
};

export default GetStates;
