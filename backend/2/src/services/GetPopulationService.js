import axios from 'axios';

const GetAllStatesPopulation = async () => {
  const { data } = await axios
    .get(`${process.env.STATES_URL}`);

  const states = data.geonames.map((state) => ({
    uf: `${state.adminCodes1.ISO3166_2}`,
    populacao: `${state.population}`,
  }));

  return states;
};

export default GetAllStatesPopulation;
