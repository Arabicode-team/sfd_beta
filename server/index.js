import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors({
  origin: [process.env.PUBLIC_URL],
  methods: ['GER', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials: true,
}));

app.use(express.json());

app.listen(port, () => {
console.log('Server is running on port http://localhost:' + port);
});