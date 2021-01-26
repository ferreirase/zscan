import { Router } from 'express';
import GetStates from '../services/GetStatesService';

const statesRoutes = Router();

statesRoutes.get('/estados', async (_, res) => {
  const states = await GetStates();

  return res.status(200).json(states);
});

export default statesRoutes;
