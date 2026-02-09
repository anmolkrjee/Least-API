import express from 'express';
import dotenv from 'dotenv';
import connectDB from './cofig/db.js';

const app = express();

dotenv.config();
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the List API');
});


export default app;
