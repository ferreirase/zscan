import { Router } from 'express';
import GetAllStatesPopulation from '../services/GetPopulationService';

const populationStatesRoutes = Router();

populationStatesRoutes.get('/populacao', async (_, res) => {
  const population = await GetAllStatesPopulation();

  return res.status(200).json(population);
});

populationStatesRoutes.get('/populacao/:uf', async (req, res) => {
  const allStatesPopulation = await GetAllStatesPopulation();

  const stateFiltered = allStatesPopulation
    .filter((state) => state.uf === req.params.uf.toUpperCase());

  if (!stateFiltered || stateFiltered.length === 0) {
    return res.status(400).json({ message: 'State not found' });
  }

  return res.status(200).json(stateFiltered);
});

export default populationStatesRoutes;
