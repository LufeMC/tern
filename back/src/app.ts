import express from 'express';
import { database } from './database';
const app = express();
const port = 3000;
import cors from 'cors'

app.use(cors({
    origin: '*'
}));

app.use(express.json());

database.connect()

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/users', require('./routes/user'))
app.use('/itineraries', require('./routes/itineraries'))

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});