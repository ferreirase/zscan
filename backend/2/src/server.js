import cors from 'cors';
import express from 'express';
import routes from './routes/index';

require('dotenv').config();

const app = express();

app.use(routes);
app.use(cors());

app.disable('x-powered-by');

const endpoints = [
  {
    endpoint: '/populacao',
    function: 'Todos os estados com suas respectivas populações',
  },
  {
    endpoint: '/populacao/UF',
    function: 'Estado selecionado no endpoint e sua respectiva população',
  },
];

app.get('/', (_, res) => res.json({
  endpoints,
}));

// Passamos a porta onde o servidor ficará ouvindo
app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});
