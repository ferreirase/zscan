import cors from 'cors';
import express from 'express';
import routes from './routes/index';

require('dotenv').config();

const app = express();

app.use(routes);
app.use(cors());

app.disable('x-powered-by');

// Passamos a porta onde o servidor ficará ouvindo
app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});
