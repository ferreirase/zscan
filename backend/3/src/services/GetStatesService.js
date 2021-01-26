import axios from 'axios';

async function GetStates() {
  try {
    const { data: states } = await axios
      .get(`${process.env.STATES_URL}/estados`);

    const { data: populations } = await axios
      .get(`${process.env.POPULATION_URL}/populacao`);

    const result = states.map((state) => ({
      nome: state.nome,
      uf: state.uf,
      populacao: populations
        .filter((population) => population.uf === state.uf)[0].populacao,
    }));

    return result;
  } catch (error) {
    console.log(error);
  }
}

export default GetStates;
